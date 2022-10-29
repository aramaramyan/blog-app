export const borderRadiusGenerator = () => {
  const min = 3;
  const max = 7;
  let borderRadius = "";

  for (let i = 0; i < 9; i++) {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    const border = `${randomNum * 10}% `;

    i === 4 ? (borderRadius += "/ ") : (borderRadius += border);
  }

  return borderRadius;
};
