function solution(k, dungeons) {
  const answer = [];
  //가능한 던전 탐색 순서 탐색
  function exploreDungeon(currentK, dungeons, count) {
    dungeons.forEach((dungeon, index, origin) => {
      //맨처음의 던전 예외처리
      if (currentK < dungeon[0]) {
        answer.push(count);
        return;
      }
      //맨앞 던전 탐색 후 다음 던전들 정리
      const next = [...origin];
      next.splice(index, 1);
      exploreDungeon(currentK - dungeon[1], next, count + 1);
    });
    // 던전이 남은곳이 없다면 위의 반복문 수행불가하므로 예외처리
    answer.push(count);
    return;
  }
  exploreDungeon(k, dungeons, 0);
  return Math.max(...answer);
}
