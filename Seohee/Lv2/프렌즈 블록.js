//사각형 검사
function checkFourBlock(board) {
  let count = [];
  for (let i = 0; i < board.length - 1; i += 1) {
    for (let j = 0; j < board[0].length - 1; j += 1) {
      if (
        board[i][j] === board[i][j + 1] &&
        board[i + 1][j] === board[i + 1][j + 1] &&
        board[i][j] === board[i + 1][j] &&
        board[i][j] != 0
      )
        count.push([i, j]);
    }
  }
  return count;
}
// 블록 이동
function moveBlock(board) {
  for (let i = board.length - 1; i > 0; i -= 1) {
    for (let j = 0; j < board[0].length; j += 1) {
      if (board[i][j] === 0) {
        for (let k = i - 1; k >= 0; k -= 1) {
          if (board[k][j] != 0) {
            board[i][j] = board[k][j];
            board[k][j] = 0;
            break;
          }
        }
      }
    }
  }
  return board;
}
function solution(m, n, board) {
  let answer = 0;
  board = board.map((data) => data.split(""));
  let removeIndex = checkFourBlock(board);

  while (removeIndex.length > 0) {
    for (const position of removeIndex) {
      const [x, y] = position;
      //제거할 수 있는 위치 검사
      if (board[x][y] != 0) {
        board[x][y] = 0;
        answer += 1;
      }
      if (board[x][y + 1] != 0) {
        board[x][y + 1] = 0;
        answer += 1;
      }
      if (board[x + 1][y] != 0) {
        board[x + 1][y] = 0;
        answer += 1;
      }
      if (board[x + 1][y + 1] != 0) {
        board[x + 1][y + 1] = 0;
        answer += 1;
      }
    }
    //보드 재설정
    board = moveBlock(board);
    removeIndex = checkFourBlock(board);
  }
  return answer;
}
