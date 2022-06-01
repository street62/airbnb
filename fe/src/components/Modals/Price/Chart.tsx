import { useEffect, useRef } from 'react';

type PriceInfoType = {
  minPrice: number;
  maxPrice: number;
  priceData: Array<number>;
};

const CANVAS_INFO = {
  WIDTH: 365,
  HEIGHT: 100,
};

function Chart({ minPrice, maxPrice, priceData }: PriceInfoType) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { WIDTH, HEIGHT } = CANVAS_INFO;

    // 미완성
    ctx.beginPath();
    ctx.moveTo(0, HEIGHT);
    ctx.lineTo(WIDTH, HEIGHT);
    ctx.stroke();
    ctx.fill();
  };

  useEffect(() => {
    draw();
  }, []);

  return <canvas ref={canvasRef} width={CANVAS_INFO.WIDTH} height={CANVAS_INFO.HEIGHT} />;
}

export default Chart;
