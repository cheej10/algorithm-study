function solution(n, a, b) {
  let cnt = 0;

  // 2로 나누면서 올림한 결과값 같아질 때까지 반복하며 카운트
  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    cnt += 1;
  }

  return cnt;
}
