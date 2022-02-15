function solution(s) {
    let answer = s.length;    //최솟값 구하기 -> 큰 수로 초기화
    
    /* 최대 압축 길이는 문자열 절반 길이까지. 그 이상으로 자르는 건 의미x
    압축률 높여가며 확인 */
    for (let i = 1; i <= parseInt(s.length / 2); i++) {
        let pattern = s.substr(0, i);   //반복 패턴 문자열
        let cnt = 1;    //반복 개수 카운트
        let string = '';

        for (let j = i; j < s.length; j += i) {
            let current = s.substr(j, i);
            if (pattern === current) cnt++; //패턴과 일치
            else {
                cnt = cnt > 1 ? String(cnt) : '';   //문자열 앞에 붙여줄 cnt -> 숫자 or 공백
                string += cnt + pattern;
                cnt = 1;    // cnt 초기화
                pattern = current;  // 다음 패턴으로 변경
            }
        }
        //끝에 나머지 문자열 처리
        cnt = cnt > 1 ? String(cnt) : '';
        string += cnt + pattern;
        
        answer = Math.min(answer, string.length);
    }
    return answer;
}