function getCarpets(size) {
    let rows = [];
    // 가로 길이들 담기
    for (let i = 1; i <= size; i += 1) {
        if (size % i === 0) rows.push(i);
    }
    rows.reverse();

    let carpets = [];
    const mid = Math.floor(rows.length / 2);
    //카펫의 경우의 수 담기
    for (let i = 0; i < mid; i++) {
        carpets.push([rows[i], rows[rows.length - 1 - i]]);
    }
    if (rows.length % 2 === 1) carpets.push([rows[mid], rows[mid]]);

    return carpets;
}
function solution(brown, yellow) {
    var answer = [];
    let carpets = getCarpets(brown + yellow);
    // 모든 경우의 수중 만족하는 배열을 반환
    for (const carpet of carpets) {
        if (carpet[0] * 2 + carpet[1] * 2 - 4 === brown)
            return carpet;
    }
}