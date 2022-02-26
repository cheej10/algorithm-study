function solution(maps) {
  const resultArr = [];
  const xLen = maps.length - 1;
  const yLen = maps[0].length - 1;

  function map(x, y, c, m) {
    if (x < 0 || y < 0) return;
    if (x > xLen || y > yLen) return;
    if (m[x][y] === 0) return;
    if (x === xLen && y === yLen) {
      c += 1;
      resultArr.push(c);
      return;
    }

    const myMap = m.map((m1) => m1.map((m2) => m2));

    myMap[x][y] = 0;
    c += 1;

    map(x + 1, y, c, myMap);
    map(x, y + 1, c, myMap);
    map(x - 1, y, c, myMap);
    map(x, y - 1, c, myMap);
  }

  map(0, 0, 0, maps);

  return resultArr.length === 0 ? -1 : Math.min(...resultArr);
}
