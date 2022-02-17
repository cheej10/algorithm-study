function solution(rows, columns, queries) {
    const answer = [];
    // 행렬 생성 및 초기화
    const board = new Array(rows)
        .fill(0)
        .map(() => new Array(columns))

    let num = 1;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            board[i][j] = num;
            num += 1;
        }
    }
    // 쿼리 실행
    queries.forEach((query) => {
        // 각 좌표들은 query가 가진 data -1 의 인덱스로 변환시켜주기
        const [x1, y1, x2, y2] = query.map(data => data - 1);
        const moveBoard = [];
        // 이동해야할 행렬의 데이터들 담아오기 상단 -> 우변 -> 하단 -> 좌변
        for (let y = y1; y <= y2; y++) moveBoard.push(board[x1][y]);
        for (let x = x1 + 1; x <= x2; x++) moveBoard.push(board[x][y2]);
        for (let y = y2 - 1; y >= y1; y--) moveBoard.push(board[x2][y]);
        for (let x = x2 - 1; x > x1; x--) moveBoard.push(board[x][y1]);
        // 마지막 값을 맨 앞으로 이동
        const lastData = moveBoard.pop();
        moveBoard.unshift(lastData);
        // 이동하는 데이터들 중 가장 작은값을 결과에 넣어주고
        answer.push(Math.min(...moveBoard))
        // 행렬의 값 변경
        for (let y = y1; y <= y2; y++) board[x1][y] = moveBoard.shift();
        for (let x = x1 + 1; x <= x2; x++) board[x][y2] = moveBoard.shift();
        for (let y = y2 - 1; y >= y1; y--)board[x2][y] = moveBoard.shift();
        for (let x = x2 - 1; x > x1; x--) board[x][y1] = moveBoard.shift();
    })
    return answer;
}