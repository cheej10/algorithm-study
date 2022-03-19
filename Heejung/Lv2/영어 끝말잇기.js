function solution(n, words) {
  const obj = {};

  for (let i = 0; i < words.length; i += 1) {
    // obj에 번호, 차례 셋팅
    if (obj[(i % n) + 1]) obj[(i % n) + 1] += 1;
    else obj[(i % n) + 1] = 1;

    if (i === 0) continue;

    // 앞 문자의 마지막 글자로 시작하지 않으면
    if (words[i - 1].slice(-1) !== words[i][0])
      return [(i % n) + 1, obj[(i % n) + 1]];

    // 이전에 등장했던 단어라면
    if (words.indexOf(words[i]) !== i) return [(i % n) + 1, obj[(i % n) + 1]];
  }

  return [0, 0];
}
