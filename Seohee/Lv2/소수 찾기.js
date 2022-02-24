//소수 구별 함수
function isPrimeNumber(number) {
    if (number === 0 || number === 1) return false;

    for (let i = 2; i < number; i += 1) {
        if (number % i === 0) return false;
    }
    return true;
}
function solution(numbers) {
    let primeNumber = [];
    // 숫자 조합들 구하는 재귀함수
    function getNumber(numbers, strNumber) {
        if (numbers.length === 0) {
            if (isPrimeNumber(Number(strNumber))) primeNumber.push(Number(strNumber))
            return;
        }
        // 각각의 원소들을 선택하면서 재귀 호출
        numbers.forEach((number, index) => {
            let tmp = [...numbers];
            tmp.splice(index, 1)
            getNumber(tmp, strNumber + number);
            getNumber(tmp, strNumber);
        })
    }
    getNumber(numbers.split(''), "");

    // 중복원소 없애고 길이 결과값 반환
    return [...new Set(primeNumber)].length;
}