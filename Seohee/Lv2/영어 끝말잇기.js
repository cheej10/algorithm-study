function solution(n, words) {
  for (let index = 1; index < words.length; index += 1) {
    //이미 등장한 단어인경우
    if (index !== words.indexOf(words[index]))
      return [(index % n) + 1, Math.ceil((index + 1) / n)];
    //앞사람이 말한 단어의 마지막 문자로 시작하는 단어가 아닌 경우
    if (
      words[index - 1].lastIndexOf(words[index][0]) !==
      words[index - 1].length - 1
    )
      return [(index % n) + 1, Math.ceil((index + 1) / n)];
  }
  //모든 조건 만족하는 끝말잇기
  return [0, 0];
}
