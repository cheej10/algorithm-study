function solution(n) {
  const arr = new Array(n).fill(0).map((el, idx) => new Array(idx + 1));
  let [x, y, k] = [-1, 0, 1];

  for (let i = 0; i < n; i += 1) {
    for (let j = i; j < n; j += 1) {
      // 아래, 옆, 위 방향에 따라 이동
      if (i % 3 === 0) x += 1;
      if (i % 3 === 1) y += 1;
      if (i % 3 === 2) {
        x -= 1;
        y -= 1;
      }

      arr[x][y] = k;
      k += 1;
    }
  }

  return arr.flat();
}
