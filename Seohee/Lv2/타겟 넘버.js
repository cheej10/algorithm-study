function solution(numbers, target) {
    let count = 0;
    // 인자로 숫자 배열과 더한 값을 재귀로 넘겨받음
    function dfs(arrs, sum) {
        // 빈배열이면 깊이탐색이 끝난 것임을 의미
        if (arrs.length === 0) {
            // 더한 값이 target 과 같으면 count에 1을 더해줌
            if (target === sum)
                count++;
            // 재귀 종료
            return;
        }
        // 부호 바꿔가면서 깊이탐색 !!
        dfs(arrs.slice(1, arrs.length), sum + arrs[0]);
        dfs(arrs.slice(1, arrs.length), sum + (-1) * arrs[0]);
    }
    // 깊이 탐색 호출
    dfs(numbers, 0)
    // 결과값 반환
    return count;
}