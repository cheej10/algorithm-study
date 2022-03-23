function solution(n, wires) {
  const answer = [];
  const tree = {};

  // 트리 연결 정보 저장
  for (const [v1, v2] of wires) {
    if (!tree[v1]) tree[v1] = [];
    if (!tree[v2]) tree[v2] = [];

    tree[v1].push(v2);
    tree[v2].push(v1);
  }

  // 트리 탐색
  const searchTree = (v1, v2) => {
    const visited = { [v1]: true };
    const queue = [v1];
    let count = 0;

    while (queue.length) {
      const cur = queue.pop();

      tree[cur].map((node) => {
        if (node !== v2 && !visited[node]) {
          queue.push(node);
          visited[node] = true;
        }
      });

      count++;
    }

    return count;
  };

  // v1, v2 각각의 연결 노드 개수 차이
  for (const [v1, v2] of wires) {
    answer.push(Math.abs(searchTree(v1, v2) - searchTree(v2, v1)));
  }

  return Math.min(...answer);
}
