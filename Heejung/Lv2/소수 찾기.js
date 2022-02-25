// 에라토스테네스의 체
function makePrimeNums(n) {
  const arr = new Array(n + 1).fill(true);
  arr[0] = false;
  arr[1] = false;

  for (let i = 2; i * i <= n; i += 1) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }
  return arr.map((e, i) => (e ? i : false));
}

function solution(numbers) {
  let answer = 0;
  // numbers 배열로 변환, 내림차순 정렬 => 최댓값
  const max = numbers.split('').sort((a, b) => b - a);
  // 소수 구하기
  const primeNums = makePrimeNums(Number(max.join('')))
    .filter((e) => e)
    .map((e) => String(e));

  for (let primeNum of primeNums) {
    const tmp = primeNum.split('');
    for (let str of max) {
      const idx = tmp.indexOf(str);
      if (idx > -1) tmp.splice(idx, 1); // max, tmp 둘 다에 포함 -> 제거
    }
    // tmp가 다 제거됐다면 max로 만들 수 있는 소수이다.
    if (!tmp.length) answer += 1;
  }

  return answer;
}
