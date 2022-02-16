function solution(w, h) {
  const answer = w * h;
  /* 빼야할 사각형 개수
    최대공약수 존재x -> w + h - 1
    최대공약수 존재o -> w + h - (w, h의 최대공약수) */
  return answer - (w + h - gcd(w, h));
}

function gcd(w, h) {
  // 유클리드 호제법 이용 -> 최대공약수 구하기
  return w % h ? gcd(h, w % h) : h;
}
