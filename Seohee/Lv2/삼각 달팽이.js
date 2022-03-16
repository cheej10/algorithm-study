function solution(n) {
  const arrays = new Array(n).fill().map((_, index) => new Array(index + 1));

  let row = 0;
  let col = -1;
  let count = 1;

  //삼각형은 3변이므로!
  for (let i = n; i > 0; i -= 3) {
    // 왼쪽 -> 아래-> 오른쪽 탐색
    for (let j = 0; j < i; j += 1) arrays[++col][row] = count++;

    for (let j = 0; j < i - 1; j += 1) arrays[col][++row] = count++;

    for (let j = 0; j < i - 2; j += 1) arrays[--col][--row] = count++;
  }

  return arrays.flat();
}
