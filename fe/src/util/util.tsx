export function getDays(month: number) {
  const thisYear: number = 2022;
  const daysArr: Array<number> = [];
  const firstDay = new Date(thisYear, month, 1).getDate();
  const lastDay = new Date(thisYear, month + 1, 0).getDate();
  for (let i: number = firstDay; i < lastDay + 1; i += 1) {
    daysArr.push(i);
  }
  return daysArr;
}
