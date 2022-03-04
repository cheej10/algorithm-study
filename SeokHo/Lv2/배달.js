function solution(N, road, K) {
  function getDirections(idx, k, arr) {
    obj[idx].forEach((el) => {
      const pass = [...arr];
      const time = k - el[2];

      if (!pass.includes(el[1])) pass.push(el[1]);
      else return;
      if (!result.includes(el[1]) && time >= 0) result.push(el[1]);
      if (time > 0) getDirections(String(el[1]), time, pass);
    });
  }

  const obj = {};
  const result = [1];
  const len = road.length;

  for (let i = 1; i <= N; i += 1) obj[i] = [];
  for (let i = 0; i < len; i += 1) {
    road.push([road[i][1], road[i][0], road[i][2]]);
  }
  road.forEach((el) => obj[el[0]].push(el));

  getDirections('1', K, [1]);

  return result.length;
}
