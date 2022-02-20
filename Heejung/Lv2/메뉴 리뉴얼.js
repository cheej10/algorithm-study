function solution(orders, course) {
  let answer = [];
  for (let amount of course) {
    let tmp = {};
    for (let i = 0; i < orders.length; i++) {
      // 모든 요소들을 문자열의 오름차순으로 정렬
      for (let j of combination(orders[i], amount).map((v) =>
        [...v].sort().join('')
      )) {
        tmp[j] = tmp[j] ? tmp[j] + 1 : 1; // 각 조합이 몇번 등장했는지
      }
    }
    // amount에서 기록된 모든 조합 -> 등장횟수의 내림차순 정렬
    tmp = Object.entries(tmp).sort((a, b) => -a[1] + b[1]);
    // [[조합, 등장횟수], [조합, 등장횟수], ...] => [조합, 조합, 조합]
    // 가장 많이 등장한 조합 answer에 담기
    answer.push(
      ...tmp.reduce((acc, cur, index, ori) => {
        if (cur[1] > 1 && cur[1] === ori[0][1]) acc.push(cur[0]);
        return acc;
      }, [])
    );
  }
  return answer.sort();
}

// 조합 구하는 함수
function combination(word, num) {
  let tmp = [];
  if (num === 1) return [...word];
  else if (word.length < num) return [];
  for (let i = 0; i < word.length; i++) {
    tmp.push(
      ...combination(word.slice(i + 1), num - 1).map((v) => word[i] + v)
    );
  }
  return tmp;
}
