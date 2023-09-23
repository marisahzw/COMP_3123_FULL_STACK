const capitalize = (str) => {
    const [firstLetter, ...restOfStr] = str;
    return `${firstLetter.toUpperCase()}${restOfStr.join('')}`;
  };
  
  console.log(capitalize('foobar'));
  console.log(capitalize('nodeJs'));
  