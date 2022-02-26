function solution(maps) {
  const n = maps.length; // 행
  const m = maps[0].length; // 열
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];
  const queue = [[0, 0, 1]]; // 좌표, 이동거리 초기화

  while (queue.length) {
    const cur = queue.shift();

    // 맵의 끝지점에 도착하면 이동거리 반환
    if (cur[0] === n - 1 && cur[1] === m - 1) return cur[2];

    // 상하좌우 탐색
    for (let i = 0; i < 4; i += 1) {
      const x = cur[0] + dx[i];
      const y = cur[1] + dy[i];

      // 맵 안에 있고 벽이 아니면 큐에 넣어준다.
      if (x >= 0 && y >= 0 && x < n && y < m && maps[x][y] === 1) {
        maps[x][y] = 0; // 방문 처리
        queue.push([x, y, cur[2] + 1]);
      }
    }
  }
  return -1;
}
