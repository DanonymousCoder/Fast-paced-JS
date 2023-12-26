function removeFirstTwo(list) {
  const [a, b,...rest] = list
  return rest;
}
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(removeFirstTwo(source));