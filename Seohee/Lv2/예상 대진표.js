function solution(n, a, b) {
    let answer = 0;
    //배열 초기화
    const arr = new Array(n).fill(0).map((_, index) => index + 1);

    function reAnswer(arr, a, b, count) {
        const aIndex = arr.indexOf(a);
        const bIndex = arr.indexOf(b);
        // 중간 지점이면 종료
        if (Math.floor(aIndex / 2) === Math.floor(bIndex / 2)) {
            answer += count;
            return;
        }

        const newArr = [];
        // 대진표 새로짜기
        for (let i = 0; i < arr.length; i += 2) {
            if (Math.floor(i / 2) === Math.floor(aIndex / 2)) newArr.push(a);
            else if (Math.floor(i / 2) === Math.floor(bIndex / 2)) newArr.push(b);
            else newArr.push(arr[i]);
        }
        reAnswer(newArr, a, b, count + 1);
    }
    //처음부터 시작
    reAnswer(arr, a, b, 1);
    return answer;
}