function getRestDay(progress, speed) {
    let count = 0;
    while (progress < 100) {
        count++;
        progress += speed;
    }
    return count;
}
function solution(progresses, speeds) {
    var answer = [];
    let result = [];

    for (let i = 0; i < progresses.length; i++) {
        result.push(getRestDay(progresses[i], speeds[i]));
    }

    let task_count = 1;
    while (result.length != 0) {
        let task = result.shift();
        while (task >= result[0]) {
            result.shift();
            task_count++;
        }
        answer.push(task_count);
        task_count = 1;
    }
    return answer;
}