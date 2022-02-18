function solution(rows, columns, queries) {
  const answer = [];
  // 행렬 만들기
  const arr = Array.from(Array(rows), () => Array(columns).fill(0));

  // 행렬 숫자 채우기
  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < columns; j += 1) {
      arr[i][j] = i * columns + j + 1;
    }
  }

  for (let i = 0; i < queries.length; i += 1) {
    let [x1, y1, x2, y2] = queries[i].map((query) => query - 1);
    const queue = [];

    // 큐에 회전시킬 테두리 영역 넣기
    for (let j = 0; j < y2 - y1; j += 1) queue.push(arr[x1][y1 + j]);
    for (let j = 0; j < x2 - x1; j += 1) queue.push(arr[x1 + j][y2]);
    for (let j = 0; j < y2 - y1; j += 1) queue.push(arr[x2][y2 - j]);
    for (let j = 0; j < x2 - x1; j += 1) queue.push(arr[x2 - j][y1]);

    // 시계방향으로 회전 = 맨 뒤 요소 맨 앞으로 넣어주기
    queue.unshift(queue.pop());

    // 최솟값 찾기
    answer.push(Math.min(...queue));

    // 행렬 바뀐 자리대로 새로 채우기
    for (let i = 0; i < y2 - y1; i += 1) arr[x1][y1 + i] = queue.shift();
    for (let i = 0; i < x2 - x1; i += 1) arr[x1 + i][y2] = queue.shift();
    for (let i = 0; i < y2 - y1; i += 1) arr[x2][y2 - i] = queue.shift();
    for (let i = 0; i < x2 - x1; i += 1) arr[x2 - i][y1] = queue.shift();
  }

  return answer;
}
