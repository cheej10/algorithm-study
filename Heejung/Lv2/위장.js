function solution(clothes) {
  let answer = 1;
  const clothInfo = {};

  // clothInfo에 종류, 개수 셋팅
  clothes.forEach(([name, type]) => {
    if (type in clothInfo) {
      clothInfo[type] += 1;
    } else {
      clothInfo[type] = 1;
    }
  });

  for (let type in clothInfo) {
    answer *= clothInfo[type] + 1;
  }

  return answer - 1;
}
