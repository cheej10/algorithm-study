function solution(N, road, K) {
  const graph = Array.from(Array(N + 1), () => Array());
  const dist = Array(N + 1).fill(Infinity); // 각 마을까지 갈 수 있는 최소비용
  const queue = [];

  // graph에 road의 정보 담기 => [시작마을, 도착마을, 비용]
  for (let i = 0; i < road.length; i += 1) {
    const start = road[i][0];
    const target = road[i][1];
    const cost = road[i][2];

    // 마을 연결
    graph[start].push([target, cost]);
    graph[target].push([start, cost]);
  }

  queue.push([1, 0]); // 1번 마을에서 시작
  dist[1] = 0; // 1번 마을까지의 비용 0으로 초기화

  while (queue.length) {
    const current = queue.shift()[0]; // 현재 마을

    for (let i = 0; i < graph[current].length; i += 1) {
      // 현재 마을에서 갈 수 있는 마을 정보
      const next = graph[current][i][0];
      const nextCost = graph[current][i][1];

      // 최소 비용으로 갱신, queue 다음 마을로 이동
      if (dist[next] > dist[current] + nextCost) {
        dist[next] = dist[current] + nextCost;
        queue.push([next, nextCost]);
      }
    }
  }

  return dist.filter((cost) => cost <= K).length;
}
