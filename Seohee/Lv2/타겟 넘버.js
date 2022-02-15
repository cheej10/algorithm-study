function solution(numbers, target) {
    let count = 0;
    function dfs(arrs, sum) {
        if (arrs.length === 0) {
            if (target === sum)
                count++;
            return;
        }
        dfs(arrs.slice(1, arrs.length), sum + arrs[0]);
        dfs(arrs.slice(1, arrs.length), sum + (-1) * arrs[0]);
    }
    dfs(numbers, 0)
    return count;
}