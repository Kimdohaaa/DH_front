let pointArray = [100, 50, 30];      // 배열 변수 초기화

pointArray;                          // 배열 변수 pointArray 호출

console.log(pointArray[0]);         
console.log(pointArray[1]); 
console.log(pointArray[2]);         // 변수 pointArray 원소를 인덱스로 출력

console.log(pointArray);            // 배열 변수 pointArray 출력
/*
    변수 개수 : 1개
    리터럴 개수 : 3개
    타입 개수 : 2개 ( 정수 / 배열 )
    변수에 저장된 데이터 개수 : 1개 ( 배열 ) -> 변수는 무조건 1개의 데이터만 저장 가능
*/


// 배열 원소 변경
pointArray = ['유재석','강호동'];   // 배열의 전체 값 변경
console.log(pointArray);

pointArray[0] = '신동엽';           // 배열의 특정 위치의 값 변경 
console.log(pointArray);
/*
    기존 pointArray 배열의 원소(3개)인 리터럴[100, 50, 30]은 존재하지만 
    리터럴[100, 50, 30]을 나열하고 있던 배열(1개)은 사라진다. 
*/

// 배열 원소 추가
pointArray.push('서장훈');          // 배열에 원소 추가
console.log(pointArray);


// 배열 원소 삭제
pointArray.splice(0,1);            // pointArray 변수의 0번 인덱스부터 , 1개 삭제
console.log(pointArray);
// 배열 원소 삭제 / 대입
pointArray.splice(1, 0, '하하');    /* pointArrray 변수 1번 인데스에,
                                       삭제할 인덱스 개수, '하하'대입 */
console.log(pointArray);


// 배열의 특정 데이터 탐색
console.log(pointArray.indexOf('서장훈'));       /* 탐색할 원소 선언 
                                                    -> 해당 원소의 인덱스 값 출력 */
console.log(pointArray.indexOf('유재석'));       /* 탐색할 원소가 배열에 존재하지 
                                                     않을 경우 -1 출력*/
let num = (pointArray.indexOf('하하'));        // 변수 num을 '하하' 인덱스 값으로 초기화 
console.log(num)                               // '하하'의 인덱스 값 출력



