function solution(citations) {
  for (let h = citations.length; h >= 0; h -= 1) {
    // h번 이상 인용된 논문 개수
    const cnt = citations.filter((citation) => citation >= h).length;
    // h번 이상 인용된 논문 h편 이상
    if (cnt >= h) return h;
  }
}
