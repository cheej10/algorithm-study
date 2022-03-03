//올바른 괄호 인지 검사
function isBracket(arr) {
    const stack = [];
    while (arr.length !== 0) {
        // 맨앞 요소 사져오기
        const data = arr.shift();
        // 여는 괄호라면 스택에 넣어줌
        if (data === '(' || data === '{' || data === '[') stack.push(data);

        // 닫는 괄호 종류에 따라 분류 처리
        if (data === ')') {
            //닫는 괄호 바로 직전에 여는 괄호 있으면 제거
            if (stack[stack.length - 1] === '(') stack.pop();
            //아니라면 스택에 넣기
            else stack.push(data);
        } else if (data === '}') {
            if (stack[stack.length - 1] === '{') stack.pop();
            else stack.push(data);
        } else if (data === ']') {
            if (stack[stack.length - 1] === '[') stack.pop();
            else stack.push(data);
        }
    }
    //스택이 모두 비어있으면 올바른 괄호 문자열
    return stack.length === 0 ? true : false;
}
function solution(s) {
    let answer = 0;
    s = s.split('');
    //s 이동해가면서 검사
    for (let i = 0; i < s.length; i += 1) {
        if (isBracket([...s])) answer += 1;
        s.push(s.shift());
    }
    return answer;
}