function solution(s) {
    const checkStack = [];
    // 주어진 문자열 길이동안 반복하면서
    //checkStack의 마지막 원소와 문자열 s[i]가 가리키는 문자가 같으면 스택에서 제거하고
    // 다르다면 스택에 넣어주기
    for (let i = 0; i < s.length; i++) {
        if (checkStack[checkStack.length - 1] === s[i]) {
            checkStack.pop();
        } else {
            checkStack.push(s[i]);
        }
    }
    // 스택의 첫번째, 두번째 원소가 같으면 문자열이 모두 제거 되지만,
    // 그게아니라면 짝지어 제거하기 실패
    if (checkStack[0] === checkStack[1]) {
        return 1;
    } else {
        return 0;
    }
}