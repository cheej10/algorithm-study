function solution(grid) {
    const answer = [];
    // 방문 기록 담을 배열 초기화 
    const visit = new Array(grid.length).fill(0)
        .map(() => new Array(grid[0].length).fill(0).
            map(() => new Array(4).fill(false)));
    //x, y 방향 참조
    const directionX = [1, -1, 0, 0];
    const directionY = [0, 0, 1, -1];
    // S, L, R  순으로 경우의 수 반환
    const possibilities = [
        [0, 3, 2],
        [1, 2, 3],
        [2, 0, 1],
        [3, 1, 0],
    ];

    visit.forEach((data, currentX) => {
        data.forEach((_, currentY) => {
            for (let k = 0; k < 4; k++) {
                // 방문했던 곳이면 넘기기
                if (visit[currentX][currentY][k]) continue;

                let dir = k;
                let count = 0;
                while (!visit[currentX][currentY][dir]) {
                    count++;
                    visit[currentX][currentY][dir] = true;
                    switch (grid[currentX][currentY]) {
                        case "S":
                            dir = possibilities[dir][0];
                            break;
                        case "L":
                            dir = possibilities[dir][1];
                            break;
                        case "R":
                            dir = possibilities[dir][2];
                            break;
                    }
                    currentX += directionX[dir];
                    currentY += directionY[dir];

                    currentX = currentX === grid.length ? 0 : currentX < 0 ? grid.length - 1 : currentX;
                    currentY = currentY === grid[0].length ? 0 : currentY < 0 ? grid[0].length - 1 : currentY;
                }

                answer.push(count);

            }
        })
    })
    //오름차순으로 정렬하여 반환
    return answer.sort((a, b) => a - b);
}