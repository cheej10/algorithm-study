function solution(numbers) {
  const answer = numbers
    .map((num) => String(num)) // 각 숫자들을 문자열로 변환
    .sort((a, b) => b + a - (a + b)) // 이어붙였을 때 큰 수 앞으로 오도록 정렬
    .join('');
  // 0이 맨 앞이면 0, 아니면 답 출력
  return answer[0] === '0' ? '0' : answer;
}
