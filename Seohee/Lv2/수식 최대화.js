function solution(expression) {
    let result = 0;
    // 수식 6가지의 경우의 수만 존재
    const orders = [
        ['+', '-', '*'],
        ['+', '*', '-'],
        ['-', '*', '+'],
        ['-', '+', '*'],
        ['*', '-', '+'],
        ['*', '+', '-'],
    ];
    // 숫자들과 연산자들 배열 따로 생성
    const numbers = expression.split(/[^0-9]/).map((strNumber) => parseInt(strNumber));
    const operators = expression.split('').filter((data) => "*-+".includes(data));
    // 경우의수에 대해 반복문
    orders.forEach((order) => {
        // 원본 숫자, 연산자 배열을 수정하면 안되므로
        // 복사본 생성
        const copyNumbers = [...numbers];
        const copyOperators = [...operators];
        order.forEach((operator) => {
            // 해당 연산자가 존재하면 계산 실행
            while (copyOperators.includes(operator)) {
                const operatorIndex = copyOperators.indexOf(operator);
                const cal = eval(copyNumbers[operatorIndex] + operator + copyNumbers[operatorIndex + 1]);
                // 연산자 위치의 인덱스의 원소를 숫자, 연산자 배열에서 삭제하고 
                //숫자 배열에는 계산된 결과값을 넣어줌
                copyNumbers.splice(operatorIndex, 2, cal);
                copyOperators.splice(operatorIndex, 1);
            }
        })
        // 최종적으로 계산된 결과의 절대값
        if (result < Math.abs(copyNumbers[0])) result = Math.abs(copyNumbers[0]);

    })
    return result;
}