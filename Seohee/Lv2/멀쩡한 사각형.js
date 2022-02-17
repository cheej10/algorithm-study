function solution(w, h) {
    var answer = 0;
    let dots = [];
    function solution(w, h) {
        let answer = 0;

        for (let x = 1; x <= w; x++) {
            const front_y = (-1) * (h) * (x - 1) / w + h;
            const end_y = (-1) * (h) * x / w + h;
            answer += (Math.ceil(front_y) - Math.floor(end_y));
        }
        return w * h - answer;
    }
