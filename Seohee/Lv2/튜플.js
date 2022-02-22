function solution(s) {
    let answer = [];
    //맨 앞, 뒤 괄호 없애고, 경우의수로 분리한 뒤 
    // 이에 대한 길이를 기준으로 오름차순 정렬
    s = s.replace("{{", "").replace("}}", "").split("},{").sort((a, b) => a.length - b.length);
    // 문자 숫자를 숫자들로만 바꾸고,
    // 최종 반환할 배열에 그 값이 없으면 넣어주기
    s.forEach((data) => {
        data = data.split(/[^0-9]/).map((strNumber) => parseInt(strNumber));
        answer.push(...data.filter((num) => !answer.includes(num)))
    })
    return answer;
}