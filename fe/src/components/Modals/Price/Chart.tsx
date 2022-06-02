import { useEffect, useRef } from 'react';

type PriceInfoType = {
  minPrice: number;
  maxPrice: number;
  priceData: Array<number>;
};

type ObjType = {
  [key: string]: number;
};

const CANVAS_INFO = {
  WIDTH: 365,
  HEIGHT: 100,
  SECTIONS: 15,
};

function Chart({ minPrice, maxPrice, priceData }: PriceInfoType) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { WIDTH, HEIGHT, SECTIONS } = CANVAS_INFO;
    const getRange = (data: Array<number>) => {
      const 고정범위 = Math.floor((maxPrice - minPrice) / SECTIONS);
      let 현재범위 = 고정범위;

      const obj: ObjType = {};
      for (let range = 고정범위; range < maxPrice - minPrice; range += 고정범위) {
        obj[range] = 0;
      }

      data.forEach((el) => {
        if (현재범위 < el) {
          현재범위 += 고정범위;

          if (현재범위 + 고정범위 < el) {
            // eslint-disable-next-line no-unreachable-loop
            do {
              현재범위 += 고정범위;
              obj[현재범위] = 1;
              return;
            } while (현재범위 > el && maxPrice > 현재범위);
          }
        }

        !obj[현재범위] ? (obj[현재범위] = 1) : (obj[현재범위] += 1);
      });

      return obj;
    };

    const dataRange = getRange(priceData);

    const drawLine = (dataRange: ObjType) => {
      const dataValues = Object.values(dataRange);

      dataValues.forEach((data: number, idx: number) => {
        const sectionWidth = Math.floor(WIDTH / (SECTIONS - 1));
        const perY = Math.floor((data / Math.max(...dataValues)) * HEIGHT);

        const moveCoord = { x: sectionWidth * idx, y: HEIGHT - perY };
        const controlPoint = {
          x: moveCoord.x - sectionWidth / 2,
          y: idx === 0 ? HEIGHT : HEIGHT - (dataValues[idx - 1] / Math.max(...dataValues)) * HEIGHT,
        };

        ctx.bezierCurveTo(
          controlPoint.x,
          controlPoint.y,
          controlPoint.x,
          moveCoord.y,
          moveCoord.x,
          moveCoord.y,
        );
      });
    };

    ctx.beginPath();
    ctx.moveTo(0, HEIGHT);
    drawLine(dataRange);
    ctx.lineTo(WIDTH, HEIGHT);

    const gradient = ctx.createLinearGradient(0, HEIGHT, WIDTH, HEIGHT);
    gradient.addColorStop(0, '#E0E0E0');
    gradient.addColorStop(1, 'black');
    ctx.fillStyle = gradient;
    ctx.fill();
  };

  useEffect(() => {
    draw();
  }, []);

  return <canvas ref={canvasRef} width={CANVAS_INFO.WIDTH} height={CANVAS_INFO.HEIGHT} />;
}

export default Chart;
