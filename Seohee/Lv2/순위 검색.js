function solution(info, query) {
    const answer = [];
    const infoMap = {};
    // 조합 만드는 함수
    function combination(array, score, start) {
        const key = array.join("");
        const value = infoMap[key];

        if (value) infoMap[key].push(score);
        else infoMap[key] = [score];

        for (let i = start; i < array.length; i++) {
            const temp = [...array];
            temp[i] = "-";
            combination(temp, score, i + 1);
        }
    }
    // 입력에 대한 문자열 처리
    for (const elem of info) {
        const splited = elem.split(" ");
        // 마지막 인자는 점수
        const score = Number(splited.pop());
        // 분리해서 넣어주기
        combination(splited, score, 0);
    }

    for (const key in infoMap) {
        infoMap[key] = infoMap[key].sort((a, b) => a - b);
    }
    //쿼리에 대한 분석
    for (const elem of query) {
        const splited = elem.replace(/ and /g, " ").split(" ");
        // 점수 가져오기
        const score = Number(splited.pop());
        const key = splited.join("");
        const array = infoMap[key];

        if (array) {
            let start = 0;
            let end = array.length;
            while (start < end) {
                const mid = Math.floor((start + end) / 2);

                if (array[mid] >= score) end = mid;
                else if (array[mid] < score) start = mid + 1;

            }
            const result = array.length - start;
            answer.push(result);
        } else {
            answer.push(0);
        }
    }
    return answer;
}