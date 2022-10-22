const getFirstUppercaseLetter = (word) => {
  return word[0].toUpperCase();
};

export const getUsrNameFirstLetters = (userName) => {
  if (userName) {
    const splitName = userName.split(" ");
    return splitName.length === 1
      ? getFirstUppercaseLetter(splitName)
      : `${getFirstUppercaseLetter(splitName[0])}${getFirstUppercaseLetter(splitName[1])}`;
  }
  return null;
};
