function solution(relation) {
    const answer = new Set();
    const row = relation[0].length;

    for (let i = 1; i < 1 << row; i += 1) {
        const tmp = relation.map(data => data.filter((_, index) => i & (1 << index)).join(''))
        const set = new Set(tmp);

        if (set.size === tmp.length) answer.add(i)
    }
    for (const x of answer) {
        for (const y of answer) {
            if (x >= y) continue;
            if ((x & y) === x) answer.delete(y);
        }
    }
    return answer.size;
}