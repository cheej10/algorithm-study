function solution(number, k) {
  const stack = [];

  for (let i = 0; i < number.length; i += 1) {
    // stack 마지막 요소가 현재 요소보다 작으면 계속 빼준다.
    while (k > 0 && stack[stack.length - 1] < number[i]) {
      stack.pop();
      k -= 1;
    }

    if (stack.length < number.length - k) stack.push(number[i]);
  }

  return stack.join('');
}
