function solution(clothes) {
    let result = 1;
    const clothesType = {};
  	// 배열에 대한 forEach문 실행
    clothes.forEach((clothes)=> {
         // 처음 들어온 옷의 종류면 배열을 생성하면서 값을 넣어줌
        if(!clothesType[clothes[1]]) clothesType[clothes[1]] = [clothes[0]];          
        // 그게 아니라면 존재하는 배열에 밀어넣어주면 됨        
        else clothesType[clothes[1]].push(clothes[0])
        
    })
    
 	// 옷의 종류 키 가져오기
    const clothesTypeKeys =  Object.keys(clothesType)
	// 키 길이만큼 순회
    for(let i = 0 ; i < clothesTypeKeys.length ; i+=1) result *= (clothesType[clothesTypeKeys[i]].length +1)
    
    return result - 1;
}
