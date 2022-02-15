function solution(record) {
  let answer = [];
  let user = {}; // { id: nickname }
  let recordArr = record.map((v) => v.split(' '));

  // Enter, Change일 때 user 셋팅
  for (let x of recordArr) {
    if (x[0] !== 'Leave') user[x[1]] = x[2];
  }

  for (let x of recordArr) {
    if (x[0] === 'Enter') answer.push(user[x[1]] + '님이 들어왔습니다.');
    if (x[0] === 'Leave') answer.push(user[x[1]] + '님이 나갔습니다.');
  }

  return answer;
}