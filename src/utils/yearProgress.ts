export interface YearProgressData {
  year: number;
  percentage: number;
  millisecondsElapsed: number;
  secondsElapsed: number;
  minutesElapsed: number;
  hoursElapsed: number;
  daysElapsed: number;
  daysRemaining: number;
  totalDays: number;
  monthsElapsed: number;
  currentMonth: string;
  currentDay: number;
  isLeapYear: boolean;
}

function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function getDaysInYear(year: number): number {
  return isLeapYear(year) ? 366 : 365;
}

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export function getYearProgress(now: Date = new Date()): YearProgressData {
  const year = now.getFullYear();
  const startOfYear = new Date(year, 0, 1);
  const startOfNextYear = new Date(year + 1, 0, 1);

  const totalMs = startOfNextYear.getTime() - startOfYear.getTime();
  const elapsedMs = now.getTime() - startOfYear.getTime();
  const percentage = (elapsedMs / totalMs) * 100;

  const totalDays = getDaysInYear(year);
  const daysElapsed = elapsedMs / (1000 * 60 * 60 * 24);
  const daysRemaining = totalDays - daysElapsed;

  const totalSecondsElapsed = elapsedMs / 1000;

  const month = now.getMonth();
  const dayOfMonth = now.getDate();
  const daysInCurrentMonth = new Date(year, month + 1, 0).getDate();
  const monthFraction = (dayOfMonth - 1) / daysInCurrentMonth;
  const monthsElapsed = month + monthFraction;

  return {
    year,
    percentage: Math.min(Math.max(percentage, 0), 100),
    millisecondsElapsed: Math.floor(elapsedMs),
    secondsElapsed: Math.floor(totalSecondsElapsed),
    minutesElapsed: Math.floor(totalSecondsElapsed / 60),
    hoursElapsed: Math.floor(totalSecondsElapsed / 3600),
    daysElapsed: Math.floor(daysElapsed),
    daysRemaining: Math.ceil(daysRemaining),
    totalDays,
    monthsElapsed: Math.round(monthsElapsed * 10) / 10,
    currentMonth: MONTH_NAMES[month],
    currentDay: now.getDate(),
    isLeapYear: isLeapYear(year),
  };
}
