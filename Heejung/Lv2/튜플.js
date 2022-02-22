function solution(s) {
  const answer = [];

  // 맨앞 {{, 맨뒤 }} 제외하고 },{ 기준으로 나누어 배열 생성
  s = s.slice(2, s.length - 2).split('},{');

  // 배열의 길이에 맞추어 정렬, 쉼표 기준으로 split
  const tmp = s
    .sort((a, b) => a.length - b.length)
    .map((elem) => (elem = elem.split(',')));

  // 숫자로 변환 후 answer에 담기
  tmp.forEach((elem) => elem.forEach((el) => answer.push(Number(el))));

  return [...new Set(answer)]; // 중복 제거
}
