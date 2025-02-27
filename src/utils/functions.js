import {ThemeColors} from '../theme/themeColors';

const getRandomColor = index => {
  switch (index % 10) {
    case 0:
      return ThemeColors.COLOR1;
    case 1:
      return ThemeColors.COLOR2;
    case 2:
      return ThemeColors.COLOR3;
    case 3:
      return ThemeColors.COLOR4;
    case 4:
      return ThemeColors.COLOR5;
    case 5:
      return ThemeColors.COLOR6;
    case 6:
      return ThemeColors.COLOR7;
    case 7:
      return ThemeColors.COLOR8;
    case 8:
      return ThemeColors.COLOR9;
    case 9:
      return ThemeColors.COLOR9;

    default:
      ThemeColors.RED;
  }
  const randomColor = `#${Math.floor(Math.random() * 16777215)
    .toString()
    .padStart(6, '0')}`;
  return randomColor;
};

export {getRandomColor};
