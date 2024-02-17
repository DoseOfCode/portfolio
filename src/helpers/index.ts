function CalculateAgeFromBirthday(
  day: number,
  month: number,
  year: number
): number {
  const birthday = new Date(year, month, day);
  const today = new Date();

  const monthDifference = today.getMonth() - birthday.getMonth();

  let age = today.getFullYear() - birthday.getFullYear();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthday.getDate())
  ) {
    age--;
  }

  return age;
}

export { CalculateAgeFromBirthday };
