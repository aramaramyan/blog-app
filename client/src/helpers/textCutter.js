export const textCutter = (text) => {
  return text.length < 100 ? text : `${text.substring(0, 400)}...`;
};
