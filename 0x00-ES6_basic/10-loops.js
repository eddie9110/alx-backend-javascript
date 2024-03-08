export default function appendToEachArrayValue(array, appendString) {
  const arry = [];
  for (const val of array) {
    arry.push(appendString + val);
  }

  return arry;
}
