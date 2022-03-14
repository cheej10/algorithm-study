function solution(m, n, board) {
  let answer = 0;
  board = board.map((arr) => arr.split('')); // 2차원 배열 판 만들기

  // 지워질 블록 탐색 => remove에 좌표 저장
  while (true) {
    const remove = [];

    for (let i = 0; i < m - 1; i += 1) {
      for (let j = 0; j < n - 1; j += 1) {
        // 판 안에 있고 주변 블록 같으면 좌표 저장
        if (
          board[i][j] &&
          board[i][j] === board[i + 1][j] &&
          board[i][j] === board[i][j + 1] &&
          board[i][j] === board[i + 1][j + 1]
        ) {
          remove.push([i, j]);
        }
      }
    }

    // 블록 지워주기
    for (let i = 0; i < remove.length; i += 1) {
      const [col, row] = remove[i];
      board[col][row] = 0;
      board[col][row + 1] = 0;
      board[col + 1][row] = 0;
      board[col + 1][row + 1] = 0;
    }

    // 블록 지워진 공간 윗줄 블록으로 채우기
    for (let i = m - 1; i > 0; i -= 1) {
      for (let j = 0; j < n; j += 1) {
        for (let pre = i - 1; pre >= 0 && !board[i][j]; pre -= 1) {
          if (board[pre][j]) {
            board[i][j] = board[pre][j];
            board[pre][j] = 0;
            break;
          }
        }
      }
    }

    // 더이상 지울 블록 없으면 답 리턴
    if (!remove.length) {
      board.forEach((arr) =>
        arr.forEach((el) => {
          if (!el) answer += 1;
        })
      );

      return answer;
    }
  }
}
