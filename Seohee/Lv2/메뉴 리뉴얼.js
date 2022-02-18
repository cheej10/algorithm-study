// 배열과 조합의 수를 인자로 전달받으며
function getCombinations(arr, selectNumber) {
    let results = [];
    // 만약, 조합의 수가 1이라면 재귀함수를 종료하게 되어있다
    if (selectNumber === 1) return arr;

    // 배열 각각에 대한 원소를 순회한다
    arr.forEach((elem, index, origin) => {
        const rest = origin.slice(index + 1);
        // 그 나머지 배열과 조합의수 -1의 값을 다시 재귀함수로 호출
        const combinations = getCombinations(rest, selectNumber - 1);
        const attached = combinations.map((combination) => [elem, ...combination]);
        results.push(...attached);
    })
    results = results.map(result => {
        result.sort();
        return result.join('');
    })
    return results;
}

function solution(orders, course) {
    let answer = [];
    // 주문으로 들어온 string을 모두 배열로 바꿔주고, 알파벳 순으로 정렬
    orders = orders.map(order => order.split('').sort())
    // 배열의 길이에 대해 오름차순으로 정렬
    orders.sort((a, b) => a.length - b.length)

    for (const length of course) {
        // 원하는 길이와 같거나 큰 배열만을 후보로 가질 수 있음    
        let arr = orders.filter((order) => order.length >= length);

        // 조합들을 담을 배열 초기화
        let combinations = [];

        // 배열의 후보가 1개라도 존재하면 실행
        if (arr.length != 0) {
            for (const data of arr) {
                combinations.push(getCombinations(data, length));
            }
        }

        // 각각의 조합들을 모두 모아 오름차순으로 정렬
        combinations = combinations.flat().sort();

        // 가장 많이 나오는 메뉴의 등장 횟수를 가져옴
        let max = 0;
        let count = 1;
        for (let i = 1; i < combinations.length; i++) {
            if (combinations[i - 1] === combinations[i]) count += 1;
            else count = 1

            if (max < count) max = count;
        }
        // 초기화
        count = 1;

        // 많이 나오는 메뉴를 답안에 저장
        for (let i = 1; i < combinations.length; i++) {
            if (combinations[i - 1] === combinations[i]) count += 1;
            else count = 1

            if (count === max && count !== 1) answer.push(combinations[i - 1]);
        }
    }
    // 이에대해 오름차순으로 정렬하여 문제 해결
    return answer.sort();
}