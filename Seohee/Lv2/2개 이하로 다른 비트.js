function solution(numbers) {
  const answer = [];
  function f(x) {
    //짝수는 다음 수가 1개 차이
    if (x % 2 === 0) return x + 1;
    //홀수 체크
    const bit = "0" + x.toString(2);
    const index = bit.lastIndexOf("0");
    return parseInt(`${bit.slice(0, index)}10${bit.slice(index + 2)}`, 2);
  }
  for (const number of numbers) answer.push(f(number));
  return answer;
}
