function solution(str1, str2) {
  // 입력받은 문자 소문자로 통일
  const strA = str1.toLowerCase();
  const strB = str2.toLowerCase();

  let setA = [];
  let setB = [];

  // 두글자씩 자르기
  for (let i = 0; i < strA.length - 1; i++) {
    const tmp = strA[i] + strA[i + 1];
    setA.push(tmp);
  }

  for (let i = 0; i < strB.length - 1; i++) {
    const tmp = strB[i] + strB[i + 1];
    setB.push(tmp);
  }

  // 영문자만 남기기
  const regEx = /[a-z]/;

  setA = setA.filter((str) => regEx.test(str[0]) && regEx.test(str[1]));
  setB = setB.filter((str) => regEx.test(str[0]) && regEx.test(str[1]));

  // 두 집합 다 공집합이면
  if (!setA.length && !setB.length) return 65536;

  // 교집합, 합집합 구하기
  const intersection = [];
  const union = [];

  for (let i = 0; i < setB.length; i++) {
    if (setA.includes(setB[i])) {
      intersection.push(setA.splice(setA.indexOf(setB[i]), 1));
    }
    union.push(setB[i]);
  }

  for (let i = 0; i < setA.length; i++) {
    union.push(setA[i]);
  }

  return parseInt((intersection.length / union.length) * 65536);
}
