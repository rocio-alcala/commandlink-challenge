export function capitalizeString(string: string) {
    const arrayString = string.split("");
    arrayString[0] = arrayString[0].toUpperCase();
    const newString = arrayString.join("");
    return newString;
  }