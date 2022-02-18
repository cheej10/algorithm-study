function solution(progresses, speeds) {
  const answer = [0];
  // 남은 작업기간 배열 생성
  const term = progresses.map((progress, i) =>
    Math.ceil((100 - progress) / speeds[i])
  );
  let maxTerm = term[0];

  for (let i = 0, j = 0; i < term.length; i++) {
    // 현재 작업기간이 짧거나 같으면 배포 기능 개수 누적
    if (term[i] <= maxTerm) {
      answer[j] += 1;
      // 현재 작업기간이 길면 maxTerm 변경, 다음 배포로 넘겨서 카운트
    } else {
      maxTerm = term[i];
      answer[++j] = 1;
    }
  }
  return answer;
}
