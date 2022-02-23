function solution(priorities, location) {
  let answer = 0;
  let myDoc = location; // 내가 요청한 문서 위치

  // 다 출력되면 반복문 탈출
  while (priorities.length > 0) {
    let shiftDoc = priorities.shift(); // 맨 앞 문서

    // 맨 앞 문서보다 우선순위 높은 문서 있으면 자리 변경
    if (priorities.filter((priority) => priority > shiftDoc).length) {
      priorities.push(shiftDoc);
      // 맨 앞 문서가 요청한 문서 => myDoc도 맨 뒤 위치로 변경
      if (myDoc === 0) myDoc = priorities.length - 1;
      // 아니면 앞으로 이동
      else myDoc -= 1;

      // 맨 앞 문서보다 우선순위 높은 문서 없으면 출력
    } else {
      answer += 1;
      // 맨 앞 문서가 요청 문서라면
      if (myDoc === 0) break;
      else myDoc -= 1;
    }
  }
  return answer;
}
