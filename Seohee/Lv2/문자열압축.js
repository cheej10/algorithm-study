function compressionString(count, str) {
    let same_count = 1, compression_str = "";
    let check_word = "";
    // 처음 비교 문자열 만들어 주기 
    for (let i = 0; i < count; i++)
        check_word += str[i];

    // count 지점 부터 반복문 시작
    for (let i = count; i < str.length; i += count) {
        // 처음과 비교할 문자열 가져오기
        const slice_str = str.slice(i, i + count);
        // 앞뒤 단어가 같으면 count값 증가
        if (check_word === slice_str) {
            same_count++;
        } else {
            // 다를때, 1일 경우에는 숫자는 이어붙이지 않음
            if (same_count === 1)
                compression_str += check_word
            else
                compression_str += (same_count + check_word);

            // 초기화 시켜주고, 비교할 문자열 바꿔주기
            same_count = 1;
            check_word = slice_str;
        }
    }
    // 마지막 단어 이어 붙이는 작업
    if (same_count === 1)
        compression_str += check_word
    else
        compression_str += (same_count + check_word);
    // 길이만 반환
    return compression_str.length
}

function solution(s) {
    let min_length = s.length;
    // 문자열의 길이 반만 수행하면 된다
    for (let i = 1; i <= Math.floor(s.length / 2); i++) {
        // 가장 작은 문자열의 길이를 저장해나감
        const result = compressionString(i, s);
        if (min_length > result) {
            min_length = result;
        }
    }
    // 결과값 반환
    return min_length;
}

console.log(solution("aabbaccc"));
console.log(solution("ababcdcdababcdcd"));
console.log(solution("abcabcdede"));