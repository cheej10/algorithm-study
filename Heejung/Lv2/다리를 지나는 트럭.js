function solution(bridge_length, weight, truck_weights) {
  const running = new Array(bridge_length).fill(0); // 건너는 중인 트럭
  const waiting = [...truck_weights]; // 대기 중인 트럭
  let weightSum = 0;
  let time = 0;

  while (running.length > 0) {
    time += 1;
    running.shift();

    // 대기 중인 트럭 남아있으면
    if (waiting.length > 0) {
      weightSum = running.reduce((arr, cur) => arr + cur, 0);

      // 다음 트럭 다리에 올릴 수 있으면
      if (weightSum + waiting[0] <= weight) {
        running.push(waiting.shift());
      } else {
        running.push(0);
      }
    }
  }

  return time;
}
