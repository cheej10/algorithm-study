function solution(numbers, target) {
  let answer = 0;

  function dfs(depth, sum) {
    // numbers 길이만큼 연산 다 하면 재귀 탈출
    if (depth === numbers.length) {
      if (sum === target) answer += 1;
      return;
    }

    dfs(depth + 1, sum - numbers[depth]); // 부호 -
    dfs(depth + 1, sum + numbers[depth]); // 부호 +

    return answer;
  }

  return dfs(0, 0);
}
