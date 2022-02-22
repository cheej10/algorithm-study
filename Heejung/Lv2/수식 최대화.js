// 계산
function calculator(a, operator, b) {
  if (operator === '*') return a * b;
  if (operator === '+') return a + b;
  if (operator === '-') return a - b;
}

function solution(expression) {
  const answer = [];
  // 연산자 우선순위 셋팅
  const priority = [
    ['*', '+', '-'],
    ['*', '-', '+'],
    ['+', '*', '-'],
    ['+', '-', '*'],
    ['-', '*', '+'],
    ['-', '+', '*'],
  ];

  // 우선순위별 연산
  for (let opers of priority) {
    const exp = expression.split(/([^0-9])/); // 숫자, 연산자 분리
    for (let oper of opers) {
      let idx = exp.indexOf(oper);
      while (idx !== -1) {
        // 연산 후 연산자와 피연산자 제거, 그 자리에 연산결과 넣어주기
        const result = calculator(+exp[idx - 1], oper, +exp[idx + 1]);
        exp.splice(idx - 1, 3, String(result));
        idx = exp.indexOf(oper);
      }
    }
    answer.push(Math.abs(exp));
  }

  return Math.max(...answer);
}
