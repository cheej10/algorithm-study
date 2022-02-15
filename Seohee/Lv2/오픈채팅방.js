function solution(record) {
    // 중복 키를 가질 수 없는 Map 객체 사용
    let map = new Map();
    // 기록들을 일단 2차원 배열로 변환
    record = record.map((data) => {
        return data.split(' ');
    })
    // 채팅방을 나간 것이 아니면 아이디와 이름이 같이 존재
    record.forEach((data) => {
        if (data[0] != 'Leave') {
            map.set(data[1], data[2]);
        }
    })
    // 이차원 배열 안의 첫번째 요소 값을 기준으로
    // 결과를 저장
    let result = record.map((data) => {
        if (data[0] === 'Enter') {
            return map.get(data[1]) + '님이 들어왔습니다.'
        }
        else if (data[0] === 'Leave') {
            return map.get(data[1]) + '님이 나갔습니다.'
        }
    });
    // 이름 변경은 undefined 값이 저장되므로 이를 제외한 배열을 반환
    return result.filter((data) => data != undefined)
}
