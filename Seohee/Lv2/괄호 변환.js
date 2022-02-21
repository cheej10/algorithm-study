// 올바른 괄호 문자열인지 체크
function isCorrectBracket(str) {
    const stack = [];
    let open = 0;
    let close = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            stack.push('(');
            open++;
        } else {
            stack.pop();
            close++;
        }
    }
    if (stack.length === 0 && open === close)
        return true;
    else
        return false;
}
function solution(p) {
    // 괄호 열고, 닫기 구분
    let open = 0;
    let close = 0;
    // 빈 문자열 -> 재귀 종료 1
    if (!p) {
        return '';
    }

    for (let i = 0; i < p.length; i++) {
        // 괄호 개수 파악하기
        if (p[i] === '(') open += 1;
        else close += 1;
        // 열고 닫는 괄호가 같은 횟수로 등장했을때, 
        if (open === close) {
            // u가 올바른 괄호 문자열 일때, 3
            if (isCorrectBracket(p.slice(0, i + 1))) {
                // 3 - 1
                return p.slice(0, i + 1) + solution(p.slice(i + 1));
            } else {
                // u가 올바른 괄호 문자열이 아닐때,
                // 4 -1 ~ 3
                let answer = '(' + solution(p.slice(i + 1)) + ')';
                // 4 - 4
                for (let j = 1; j < i; j++) {
                    if (p[j] === '(') answer += ')';
                    else answer += '(';
                }
                // 4-5
                return answer;
            }
        }
    }

}