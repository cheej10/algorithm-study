function solution(N, road, K) {
  const arr = new Array(N + 1).fill(Infinity);
  const roads = new Array(N + 1).fill(0).map(() => Array());
  // 현재 마을의 배열에 이동할 마을과 시간 저장
  for (const [a, b, time] of road) {
    roads[a].push({ to: b, time: time });
    roads[b].push({ to: a, time: time });
  }
  // 시작점은 항상 1이고 시간은 0
  const startRoad = [{ to: 1, time: 0 }];
  arr[1] = 0;

  while (startRoad.length) {
    const { to, time } = startRoad.pop();

    roads[to].forEach((next) => {
      if (arr[next.to] > arr[to] + next.time) {
        arr[next.to] = arr[to] + next.time;
        startRoad.push(next);
      }
    });
  }
  //K와 같거나 작은 시간을 가진 요소의 수 반환
  return arr.filter((time) => time <= K).length;
}
