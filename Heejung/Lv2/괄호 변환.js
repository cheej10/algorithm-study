// u, v로 쪼개기
function divide(p) {
  let u = '';
  let v = '';
  let isCorrect = true; // 올바른 괄호인지

  for (let i = 0, tmp = 0; i < p.length; i += 1) {
    tmp += p[i] === '(' ? 1 : -1;
    if (tmp < 0) isCorrect = false;
    if (tmp === 0) {
      u = p.substring(0, i + 1);
      v = p.substring(i + 1);
      break;
    }
  }
  return [u, v, isCorrect];
}

function solution(p) {
  // 빈문자열은 빈문자열로 반환
  if (p === '') return p;

  let [u, v, isCorrect] = divide(p);

  // 잘못된 괄호
  if (!isCorrect) {
    return (
      '(' +
      solution(v) +
      ')' +
      u
        .slice(1, -1)
        .split('')
        .map((str) => (str === '(' ? ')' : '('))
        .join('')
    );

    // 올바른 괄호
  } else {
    return u + solution(v);
  }
}
