function solution(n, a, b) {
    let answer = 0;
    let arr = new Array(n).fill(0).map((_, index) => index + 1);

    function reAnswer(arr, a, b, count) {
        const a_index = arr.indexOf(a);
        const b_index = arr.indexOf(b);

        if (Math.floor(a_index / 2) === Math.floor(b_index / 2)) {
            answer += count;
            return;
        }

        let new_arr = [];

        for (let i = 0; i < arr.length; i += 2) {
            if (Math.floor(i / 2) === Math.floor(a_index / 2)) new_arr.push(a);
            else if (Math.floor(i / 2) === Math.floor(b_index / 2)) new_arr.push(b);
            else new_arr.push(arr[i]);
        }

        reAnswer(new_arr, a, b, count + 1);
    }
    reAnswer(arr, a, b, 1);
    return answer;
}