function solution(citations) {
    let result = 0;
    const max = Math.max(...citations);
    for (let h = 0; h < max; h += 1) {
        let checkCount = 0;
        for (const citation of citations) {
            if (citation >= h) checkCount += 1;
        }
        if (result <= h && h <= checkCount) result = h;
    }
    return result;
}