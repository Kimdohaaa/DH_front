// 함수 선언
function myFunc(){
    console.log('my function');
};

// 함수 호출
myFunc();       // 함수 선언 시 매개 변수를 설정하지 않았기 때문에 호출 시에도 매개변수를 비워둔다.

// 1차 함수 컴퓨터 함수로 구현 (y = ax + b)
function 일차함수(a, x, b){     // a, x, b는 일차함수라는 함수의 매개변수
    console.log(a);
    console.log(x);
    console.log(b);

    let y = (a*x) + b;

    return y;    
}
// 함수 호출 / 변수의 함수 리턴값 대입
let y1 = 일차함수(3, 7, 9);
let y2 = 일차함수(10, 20, 5);
// 변수에 대입된 함수의 리턴값 출력 (console에서 확인)
console.log(y1);
console.log(y2);

/*
함수 예시 . 믹서기

fountion 믹서기함수(과일){
    let 처리 = 과일 + '주스'
    return 결과;
};

let 컵1 = 믹서기함수(사과);     -> 사과주스
let 컵2 = 믹서기함수(딸기);     -> 딸기주스
*/
