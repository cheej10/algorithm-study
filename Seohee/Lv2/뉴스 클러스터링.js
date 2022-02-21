// 문자열 가져올 수 있는 조합 반환 함수
function getStringCombinations(str) {
    // 대문자로 변환시키고
    const arr = str.toUpperCase().split('');
    const result = [];
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 0; i < arr.length - 1; i++) {
        if (alphabet.includes(arr[i]) && alphabet.includes(arr[i + 1])) result.push(arr[i] + arr[i + 1])
    }
    // 정렬해서 반환
    return result.sort();
}

function solution(str1, str2) {
    // 조합가져오기
    str1 = getStringCombinations(str1);
    str2 = getStringCombinations(str2);

    // 중복되지않게 일단 교집합과 합집합 원소들 가져오기
    const intersection = [...new Set(str1.filter((str) => str2.includes(str)))];
    const union = [...new Set([...str1, ...str2])];
    let intersectionCount = 0;
    let unionCount = 0;


    //교집합 원소의 수 -> 가장 적게 등장한 횟수를 더해주어야 함
    intersection.forEach((data) => {
        // str1,str2 각각에 대해 교집합 원소 시작 인덱스를 가져오고
        let str1Index = str1.indexOf(data);
        let str2Index = str2.indexOf(data);
        let count1 = 0;
        let count2 = 0;
        // 증가시키면서 몇번 등장하는지 파악
        while (str1[str1Index] === data) {
            count1 += 1;
            str1Index += 1;
        }
        while (str2[str2Index] === data) {
            count2 += 1;
            str2Index += 1;
        }
        // 적게 등장한 수 더해주기
        intersectionCount += count1 < count2 ? count1 : count2;
    })
    // 합집합 -> 가장 많이 등장한 횟수를 더해주어야함
    union.forEach((data) => {
        // str1,str2 각각에 대해 합집합 원소 시작 인덱스를 가져오고
        let str1Index = str1.indexOf(data);
        let str2Index = str2.indexOf(data);
        let count1 = 0;
        let count2 = 0;
        // 증가시키면서 몇번 등장하는지 파악
        while (str1[str1Index] === data) {
            count1 += 1;
            str1Index += 1;
        }
        while (str2[str2Index] === data) {
            count2 += 1;
            str2Index += 1;
        }
        // 많이 등장한 수 더해주기
        unionCount += count1 > count2 ? count1 : count2;
    })

    //공집합이거나 교집합이 없으면 65536반환하고
    // 그외에는 정수부만 출력
    return ((intersectionCount === 0 && unionCount === 0) || unionCount === 0) ? 65536 : Math.floor(intersectionCount / unionCount * 65536);
}