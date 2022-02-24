function solution(numbers) {
    //숫자를 문자로 바꿔주고 정렬
    numbers = numbers.map((number) => number += '');
    numbers.sort((a, b) => (b + a) - (a + b));
    // 맨 앞이 0이면 "0"으로 반환하고, 그게 아니라면 문자들 이어 붙인 결과값 반환
    return numbers[0] === '0' ? "0" : numbers.reduce((previousValue, currentValue) => previousValue + currentValue, "");
}