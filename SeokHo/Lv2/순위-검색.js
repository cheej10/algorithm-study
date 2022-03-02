function solution(info, query) {
  const result = Array(query.length).fill(0);
  let start = 0;

  for (let i = 0; i < info.length; i += 1) {
    info[i] = info[i].split(' ');
  }
  for (let i = 0; i < query.length; i += 1) {
    query[i] = query[i].replace(/ and/g, '');
    query[i] = query[i].split(' ');
    query[i].push(i);
  }

  info.sort((a, b) => a[4] - b[4]);
  query.sort((a, b) => a[4] - b[4]);

  for (let i = 0; i < query.length; i += 1) {
    for (let j = start; j < info.length; j += 1) {
      let pass = 0;

      if (Number(info[j][4]) < Number(query[i][4])) {
        start = j;
        continue;
      }

      for (let k = 0; k < 4; k += 1) {
        if (query[i][k] === '-' || query[i][k] === info[j][k]) pass += 1;
      }

      if (pass === 4) result[query[i][5]] += 1;
    }
  }

  return result;
}
