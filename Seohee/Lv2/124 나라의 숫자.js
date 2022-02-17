function solution(n) {
    var answer = '';
    let number124 = [4, 1, 2];

    while (n) {
        answer = number124[n % 3] + answer;
        n = (n % 3 == 0) ? Math.floor(n / 3) - 1 : Math.floor(n / 3);
    }
    return answer;
}