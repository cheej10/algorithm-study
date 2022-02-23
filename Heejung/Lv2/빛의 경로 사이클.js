function solution(grid) {
  const answer = [];

  const R = grid.length; // 행의 길이
  const C = grid[0].length; // 열의 길이
  // 3차원 visit 배열 (좌표, 방향)
  const visit = [...Array(R)].map(() =>
    [...Array(C)].map(() => [...Array(4)].map(() => 0))
  );
  const dirMap = { S: 0, R: 1, L: 2 };
  // S => 0, R => 1, L => 2 로 미리 변경
  const map = grid.map((r) => [...r].map((c) => dirMap[c]));
  const dx = [0, 1, 0, -1];
  const dy = [-1, 0, 1, 0]; // 아래, 오, 위, 왼
  // 방향 전환
  const transDir = [
    [0, 1, 3],
    [1, 2, 0],
    [2, 3, 1],
    [3, 0, 2],
  ];

  for (let i = 0; i < R; i += 1) {
    for (let j = 0; j < C; j += 1) {
      for (let dir = 0; dir < 4; dir += 1) {
        // 방문했던 격자는 패스
        if (visit[i][j][dir]) continue;

        let curDir = dir; // 현재 방향
        let r = i; // 현재 r좌표
        let c = j; // 현재 c좌표
        let count = 0;

        // 방문한 격자 만나면 탈출
        while (!visit[r][c][curDir]) {
          count++;

          visit[r][c][curDir] = 1;
          curDir = transDir[curDir][map[r][c]]; // 방향 전환
          r += dy[curDir]; // 좌표 갱신
          c += dx[curDir];
          r = r >= R ? 0 : r < 0 ? R - 1 : r;
          c = c >= C ? 0 : c < 0 ? C - 1 : c;
        }

        answer.push(count);
      }
    }
  }

  return answer.sort((a, b) => a - b);
}
