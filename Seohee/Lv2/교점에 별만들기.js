function solution(line) {
  // 교점의 최대/최소 좌표
  let [maxX, minX, maxY, minY] = [-Infinity, Infinity, -Infinity, Infinity];
  let points = [];
  //교점 찾아서 넣기
  for (let i = 0; i < line.length - 1; i += 1) {
    for (let j = i + 1; j < line.length; j += 1) {
      const denominator = line[i][0] * line[j][1] - line[i][1] * line[j][0];

      if (denominator !== 0) {
        const x =
          (line[i][1] * line[j][2] - line[i][2] * line[j][1]) / denominator;
        const y =
          (line[i][2] * line[j][0] - line[i][0] * line[j][2]) / denominator;
        //정수일때만
        if (Number.isInteger(x) && Number.isInteger(y)) {
          points.push([x, y]);
          maxX = Math.max(maxX, x);
          minX = Math.min(minX, x);
          maxY = Math.max(maxY, y);
          minY = Math.min(minY, y);
        }
      }
    }
  }
  // 답안지 초기화
  const answer = new Array(maxY - minY + 1)
    .fill()
    .map(() => new Array(maxX - minX + 1).fill("."));
  // 교점만 바꿔주기
  points.forEach(([x, y]) => {
    answer[maxY - y][x - minX] = "*";
  });

  //일차원으로 변경
  return answer.map((str) => str.join(""));
}
