let num1="10";
console.log(10);
console.log(num1);

num1 = 20;
num1 = 20 + 10;

console.log(num1);


let int1 = 10;
let int2 = 20;
let sum = int1 + int2;
/* 
명령어 처리 순서
1. 'int1' 변수가 가진 값 호출/반환
2. 'int2' 변수가 가진 값 호출/반환
3. 연산을 통한 결과 반환
4. 변수의 메모리 공간 호출 -> sum 변수 
5. 대입 연산자 -> sum(30)
*/
let name;
console.log(name);          // console 탭에 undefined(초기화 값이 없다.)에러 발생

let name1 = "hello";
console.log(name1);        // 초기화를 했기 때문에 undefined 에러 발생 X
