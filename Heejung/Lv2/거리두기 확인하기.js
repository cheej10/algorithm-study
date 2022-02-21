function solution(places) {
  // P 사람 O 빈자리 X 파티션
  const answer = [];
  // 대기실별 탐색
  for (let place of places) {
    answer.push(check(place));
  }
  return answer;
}

function check(arr) {
  const arr1 = arr.map((e) => e.split('')); // 배열로 변환
  // 상하좌우 탐색 위해 좌표 셋팅
  const dx = [1, 0, -1, 0];
  const dy = [0, -1, 0, 1];

  // 대기실 탐색
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      // P: 응시자
      if (arr1[i][j] === 'P') {
        // 상하좌우 탐색 => P 있으면 거리두기 X
        for (let k = 0; k < 4; k++) {
          const x = i + dx[k];
          const y = j + dy[k];
          if (
            x >= 0 &&
            x < 5 &&
            y >= 0 &&
            y < 5 &&
            arr1[i + dx[k]][j + dy[k]] === 'P'
          )
            return 0;
        }
      }

      // O: 빈 테이블
      if (arr1[i][j] === 'O') {
        let cnt = 0;
        // 상하좌우 탐색 => P >= 2 이면 거리두기 X
        for (let k = 0; k < 4; k++) {
          const x = i + dx[k];
          const y = j + dy[k];
          if (
            x >= 0 &&
            x < 5 &&
            y >= 0 &&
            y < 5 &&
            arr1[i + dx[k]][j + dy[k]] === 'P'
          )
            cnt += 1;
          if (cnt >= 2) return 0;
        }
      }
    }
  }

  return 1;
}
