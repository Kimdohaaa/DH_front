// for문 if문 중첩 : continue
for(let i =1; i <=5; i++){
    if(i == 3){continue};       // i == 3 이면 가장 가까운 for문의 증감식으로 코드 흐름 이동
};  // 3은 출력되지 않음

// for문 if문 중첩 : break
for(let i = 1; i <=10; i++){
    if(i == 5){break};          // i == 5이면 가장 가까운 for문 종료
};  // 4까지만 출력됨

// 무한 루프
for( ; ; ){
   // prompt(`무한 입력 : `)
}

/*
예제. 6개의 정수를 입력받아 하나의 배열에 저장하시오.
    조건 1 : 배열 내 중복 배제
    조건 2 : 배열 내 개수가 6개가 되면 프로그램 종료

입력받은 배열을 저장하는 배열
배열 저장
중복검사
개수 체크
*/
// 무한 루프 사용
let numArray = [];      // 입력받은 배열을 저장하는 배열 선언
for( ; ; ){
    if( numArray.indexOf(num != 1)){
        alert('중복');   // alert : HTML 알람 메세지
        continue;
    };
    numArray.push(num);
    if(numArray.length >= 6){
        break;
    };
};
console.log(numArray);

