function getResult(place) {
    // 라인 예외처리를 위한 상수 선언
    const isLine = (index) => -1 < index && index < 5;
    // 각각의 대기실에 대한 배열 만들기
    place = place.map((state) => state.split(''))
    // 중간에 반환값으로 종료할수 있게 every로 구현
    const result = place.every((line, lineIndex) =>
        line.every((data, dataIndex) => {
            if (data === 'P') {
                // 이전 줄
                if (isLine(lineIndex - 1)) {
                    // 바로 사람이면 안됨
                    if (place[lineIndex - 1][dataIndex] === 'P') return 0;
                    // 빈자리라면, 앞뒤칸 전줄 확인 (모든 반복문 로직 똑같음)
                    if (place[lineIndex - 1][dataIndex] === 'O') {
                        if (isLine(dataIndex + 1) && place[lineIndex - 1][dataIndex + 1] === 'P') return 0;
                        if (isLine(dataIndex - 1) && place[lineIndex - 1][dataIndex - 1] === 'P') return 0;
                        if (isLine(lineIndex - 2) && place[lineIndex - 2][dataIndex] === 'P') return 0;
                    }
                }
                // 다음 줄
                if (isLine(lineIndex + 1)) {
                    if (place[lineIndex + 1][dataIndex] === 'P') return 0;
                    if (place[lineIndex + 1][dataIndex] === 'O') {
                        if (isLine(dataIndex + 1) && place[lineIndex + 1][dataIndex + 1] === 'P') return 0;
                        if (isLine(dataIndex - 1) && place[lineIndex + 1][dataIndex - 1] === 'P') return 0;
                        if (isLine(lineIndex + 2) && place[lineIndex + 2][dataIndex] === 'P') return 0;
                    }
                }
                // 이전 칸
                if (isLine(dataIndex - 1)) {
                    if (place[lineIndex][dataIndex - 1] === 'P') return 0;
                    if (place[lineIndex][dataIndex - 1] === 'O') {
                        if (isLine(dataIndex - 2) && place[lineIndex][dataIndex - 2] === 'P') return 0;

                    }
                }
                // 다음 칸
                if (isLine(dataIndex + 1)) {
                    if (place[lineIndex][dataIndex + 1] === 'P') return 0;
                    if (place[lineIndex][dataIndex + 1] === 'O') {
                        if (isLine(dataIndex + 2) && place[lineIndex][dataIndex + 2] === 'P') return 0;
                    }
                }
            }
            return 1;
        })
    )

    return result;
}
function solution(places) {
    const answer = [];
    places.forEach((place) => {
        answer.push(getResult(place) ? 1 : 0);
    })
    return answer;
}
console.log(solution([["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"], ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"], ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"], ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"], ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]]))