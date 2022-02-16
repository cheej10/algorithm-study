function solution(n) {
  let answer = '';
  /* 나머지 0,1,2일 때 1,2,4로 변환.
    배열 [4, 1, 2]로 생성해서 나머지를 인덱스로 이용 */
  const num = [4, 1, 2];

  // n을 3으로 계속 나누다가 몫이 0 되면 탈출
  while (n) {
    answer = num[n % 3] + answer;
    if (n % 3 === 0) n -= 1; // 나눠떨어지는 수는 몫-1 해줘야함
    n = parseInt(n / 3);
  }
  return answer;
}
