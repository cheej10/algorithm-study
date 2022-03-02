function solution(info, query) {
  const answer = [];
  const infoMap = {};

  function combination(array, score, start) {
    // key: 조건, value: 조건에 맞는 지원자의 코테 점수
    const key = array.join('');
    const value = infoMap[key];

    if (value) {
      infoMap[key].push(score);
    } else {
      infoMap[key] = [score];
    }

    // '-'가 들어가는 모든 조합 구하기
    for (let i = start; i < array.length; i += 1) {
      const tmp = [...array];
      tmp[i] = '-';
      combination(tmp, score, i + 1);
    }
  }

  for (const str of info) {
    const splited = str.split(' '); // 4가지 조건
    const score = Number(splited.pop()); // 코테 점수
    combination(splited, score, 0);
  }

  // infoMap 정렬
  for (const key in infoMap) {
    infoMap[key] = infoMap[key].sort((a, b) => a - b);
  }

  for (const str of query) {
    const splited = str.replace(/ and /g, ' ').split(' '); // and 제거
    const score = Number(splited.pop()); // 조건 코테 점수
    const key = splited.join('');
    const array = infoMap[key]; // 지원자 코테 점수

    // 이진 탐색
    if (array) {
      let start = 0;
      let end = array.length;

      while (start < end) {
        const mid = Math.floor((start + end) / 2);

        if (array[mid] >= score) {
          end = mid;
        } else {
          start = mid + 1;
        }
      }

      answer.push(array.length - start);
    } else {
      answer.push(0);
    }
  }

  return answer;
}
