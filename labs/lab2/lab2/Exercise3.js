const colors = ['red', 'green', 'blue'];

const capitalize = (str) => {
  const [firstLetter, ...restOfStr] = str;
  return `${firstLetter.toUpperCase()}${restOfStr.join('')}`;
};

const capitalizedColors = colors.map((color) => capitalize(color));

console.log(capitalizedColors);
