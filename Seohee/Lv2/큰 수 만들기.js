function solution(number, k) {
  const stack = [];
  //마지막 값만을 비교하면서 큰수부터 차례대로 넣어주기
  for (let i = 0; i < number.length; i += 1) {
    while (k > 0 && stack[stack.length - 1] < number[i]) {
      stack.pop();
      k -= 1;
    }
    stack.push(number[i]);
  }
  //마지막 원소가 반복해서 나온 경우 예외처리시켜서 문자열로 반환
  return stack.slice(0, number.length - k).join("");
}
