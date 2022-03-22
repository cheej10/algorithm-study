function solution(people, limit) {
  let answer = 0;
  let [front, end] = [0, people.length - 1];
  // 오름차순으로 정리
  people.sort((a, b) => a - b);
  // 시작과 끝이 엇갈리면 종료
  while (front <= end) {
    if (people[front] + people[end] <= limit) {
      front += 1;
      end -= 1;
    } else {
      end -= 1;
    }
    answer += 1;
  }
  return answer;
}
