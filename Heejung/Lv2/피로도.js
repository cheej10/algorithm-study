function solution(k, dungeons) {
  const visited = new Array(dungeons.length).fill(0); // 던전 방문 여부 체크
  let answer = 0;

  // (깊이, 현재 피로도)
  function dfs(count, k) {
    if (answer < count) answer = count;

    for (let i = 0; i < dungeons.length; i += 1) {
      const [need, used] = dungeons[i]; // 현재 던전

      // 최소 필요 피로도 이상, 방문하지 않은 던전이면
      if (!visited[i] && k >= need) {
        visited[i] = 1;
        dfs(count + 1, k - used);
        visited[i] = 0;
      }
    }
  }

  dfs(0, k);

  return answer;
}
