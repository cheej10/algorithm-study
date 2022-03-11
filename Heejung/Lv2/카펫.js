function solution(brown, yellow) {
  let area = brown + yellow;

  for (let i = 1; i * i <= area; i += 1) {
    // 넓이의 약수일 때
    if (area % i === 0) {
      // 테두리 제외한 넓이 = 노란색 개수라면
      if ((i - 2) * (area / i - 2) === yellow) {
        return [area / i, i];
      }
    }
  }
}
