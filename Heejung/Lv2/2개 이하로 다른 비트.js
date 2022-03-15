function solution(numbers) {
  const answer = [];
  for (const number of numbers) {
    const binary = '0' + number.toString(2);

    // 마지막이 0이면(짝수면) 1을 더해준다.
    if (binary[binary.length - 1] === '0') {
      answer.push(number + 1);
      continue;
    }

    // 홀수면 뒤에서 첫번째 01을 찾아서 10으로 바꿔준다.
    for (let i = binary.length - 1; i >= 0; i -= 1) {
      if (binary[i] === '0') {
        answer.push(
          parseInt(`${binary.substring(0, i)}10${binary.substring(i + 2)}`, 2)
        );
        break;
      }
    }
  }

  return answer;
}
