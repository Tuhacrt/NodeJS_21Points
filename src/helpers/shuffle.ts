/* eslint-disable */
export function shuffle<T>(array: T[]): T[] {
  for (let currentIndex = array.length - 1; currentIndex > 0; currentIndex -= 1) {
    const randomIndex = Math.floor(Math.random() * (currentIndex + 1));
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

// let currentIndex = array.length;
// let randomIndex: number;

// while (currentIndex !== 0) {
//   randomIndex = Math.floor(Math.random() * currentIndex);
//   currentIndex -= 1;

//   [array[currentIndex], array[randomIndex]] = [
//     array[randomIndex],
//     array[currentIndex],
//   ];
// }