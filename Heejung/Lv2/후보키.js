function solution(relation) {
  var answer = 0;
  const result = [];

  function combination(arr, len, start) {
    // 구하는 길이의 조합 완성되면
    if (arr.length === len) {
      const set = new Set();
      let only = true; // 유일성 판별

      // 모든 행 돌면서 중복되는 값 찾기
      for (let i = 0; i < relation.length; i += 1) {
        const row = relation[i]
          .filter((_, idx) => {
            // idx: 속성 인덱스
            return arr.indexOf(idx) !== -1;
          })
          .join(' ');

        // 같은 값이 한 속성에 존재 => 유일성 X
        if (set.has(row)) {
          only = false;
          break;
        }

        set.add(row); // 아니면 유일성 O
      }

      // 유일성 O => 최소성 판별
      if (only) {
        let min = true; // 최소성 판별

        for (let value of result) {
          let isContain = true; // 포함 여부

          for (let i = 0; i < value.length; i += 1) {
            if (arr.indexOf(value[i]) === -1) {
              isContain = false; // 한 원소라도 다르다면 포함관계 X => 현재 조합이 최소키
              break;
            }
          }

          // 포함관계 => 최소성 X
          if (isContain) {
            min = false;
            break;
          }
        }

        // 최소성 O => 후보키
        if (min) {
          result.push(arr);
          answer += 1;
        }
      }
    }

    for (let i = start; i < relation[0].length; i += 1) {
      combination([...arr, i], len, i + 1);
    }
  }

  // 후보키 조합 구하기
  for (let i = 1; i <= relation[0].length; i += 1) {
    combination([], i, 0); // (속성 인덱스 담을 배열, 구하는 길이, 시작점)
  }

  return answer;
}
