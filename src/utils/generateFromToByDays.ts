const generateFromToByDays = (days: number) => {
  const currentDate = new Date();
  const pastDate = new Date();
  pastDate.setDate(currentDate.getDate() - days);
  return `${Math.floor(+new Date(pastDate) / 1000)},${Math.floor(
    +new Date(currentDate) / 1000
  )}`;
};

export default generateFromToByDays;
