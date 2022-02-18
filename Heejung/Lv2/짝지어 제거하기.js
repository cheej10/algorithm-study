function solution(s) {
  const stack = [];
  for (let x of s) {
    // stack 마지막 원소와 같으면 pop하고 다르면 넣어준다.
    if (x === stack[stack.length - 1]) stack.pop();
    else stack.push(x);
  }
  return stack.length ? 0 : 1;
}
