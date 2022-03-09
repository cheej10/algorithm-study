function solution(bridge_length, weight, truck_weights) {
    // 다리위의 트럭
    let onBridge = [];
    let onBridgeTime = [];
    //총시간
    let time = 1;
    // 무게 합산
    let sum = truck_weights[0];
    //맨처음 트럭 가져오고 시간 초기화
    onBridge.push(truck_weights.shift())
    onBridgeTime.push(1);
    // 다리 위가 빌때까지 실행
    while (onBridge.length != 0) {
        //맨앞에 있는 트럭이 다리를 지나면 무게를 빼주고, 다리위에서 트럭을 제거
        if (onBridgeTime[0] === bridge_length) {
            sum -= onBridge[0];
            onBridge.shift();
            onBridgeTime.shift();
        }
        // 다리 위에 있는 각각의 트럭에 대해 시간 1씩 증가
        onBridgeTime = onBridgeTime.map((data) => data + 1);
        // 총 시간도 증가
        time += 1;
        // 다리에 남은 트럭들중 맨 앞에 있는 트럭이 올라갈 수 있으면 실행
        if (sum + truck_weights[0] <= weight
            && onBridge.length < bridge_length) {
            sum += truck_weights[0];
            onBridge.push(truck_weights.shift())
            onBridgeTime.push(1);
        }
    }
    return time;
}