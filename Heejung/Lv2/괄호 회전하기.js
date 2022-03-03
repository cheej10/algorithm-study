function solution(s) {
  // 괄호 홀수개 => 바로 리턴
  if (s.length % 2) return 0;

  let answer = 0;
  const bracket = s.split('');
  const match = { ']': '[', '}': '{', ')': '(' };
  const stack = [];

  for (let j = 0; j < bracket.length; j += 1) {
    let isCorrect = true;

    // 올바른 괄호인지 판별
    for (let i = 0; i < bracket.length; i += 1) {
      // 여는 괄호면 push
      if (Object.values(match).includes(bracket[i])) {
        stack.push(bracket[i]);
        continue;
      }

      // 닫는 괄호일 때 바로 앞이 짝이면 pop
      if (stack[stack.length - 1] === match[bracket[i]]) {
        stack.pop();
        continue;
      }

      // 짝이 안 맞으면
      isCorrect = false;
      break;
    }

    if (isCorrect) answer += 1;
    bracket.push(bracket.shift()); // 괄호 회전
  }

  return answer;
}
