export function getDays(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDate();
  const lastDay = new Date(year, month, 0).getDate();
  console.log(`firstDay:${firstDay}, lastDay:${lastDay}`);
}
