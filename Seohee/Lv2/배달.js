function solution(N, road, K) {
    let answer = [];

    road.sort((a, b) => a[0] - b[0] || a[1] - b[1])
    function reRoad(roads, start, length) {
        if (length > K) return;
        else answer.push(start);
        roads.forEach((road, index) => {
            if (road[0] === start) {
                const copyRoads = [...roads]
                copyRoads.splice(index, 1);
                reRoad(copyRoads, road[1], length + road[2]);
            }
            if (road[1] === start) {
                const copyRoads = [...roads]
                copyRoads.splice(index, 1);
                reRoad(copyRoads, road[0], length + road[2]);
            }
        })
    }
    reRoad(road, 1, 0);
    return new Set(answer).size;
}