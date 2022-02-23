function solution(priorities, location) {
    // 완료된 작업 이름 담는 배열
    const successTaskName = [];
    // 골라내야 하는 문서 구분을 위한 배열
    const taskNames = new Array(priorities.length).fill('*');
    taskNames[location] = 'location'
    // 중요도 다 빌때까지 반복
    while (priorities.length != 0) {
        // 작업할 일의 중요도와 이름 빼고
        const currentTask = priorities.shift();
        const name = taskNames.shift();
        // 최대값과 비교하여 수행
        if (Math.max(...priorities) > currentTask) {
            priorities.push(currentTask);
            taskNames.push(name);
        } else {
            successTaskName.push(name);
        }
    }
    // 최종 인덱스 + 1 해서 반환
    return successTaskName.indexOf('location') + 1
}