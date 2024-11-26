// for 문의 중첩 형형식
for(let i = 1; i <= 3; i++){
    console.log(i);
    for(let j = 1 ; j <= 5; j++ ){
        console.log(`---> ${j}`)
    };
};  
/* 
i가 반복을 한 번할 때 j가 5번 반복 
=> 총 반복 횟수 : i = 3번 j = 15번

상위 for문이 1회 반복할 때마다 하위 for문은 전체 반복한다.
*/


/*
예제. 구구단 2 ~ 9 단

단 안에 곱 존재 
for 문 작성 순서 : 단 -> 곱
*/
for( let 단 = 2; 단 <= 9; 단++){
    for(let 곱 = 1; 곱 <= 9 ; 곱++){
        console.log(`${단} X ${곱} = ${단 * 곱}`);
    };  // for문 2 end
};  // for문 1 end


/*
예제.
*
**
***
****
*****  출력

줄 패턴 : 줄 수 1씩 증가
별 패턴 
        1열 2열 3열 4열 5열
    1행  *                      1부터 1까지
    2행  *   *                  1부터 2까지
    3행  *   *   *              1부터 3까지
    4행  *   *   *   *          1부터 4까지
    5행  *   *   *   *   *      1부터 5까지
    => 1부터 현재 줄 수까지 1씩 증가

줄 안에 별 존재 
for 문 작성 순서 : 줄 -> 곱
*/
let line = Number(prompt('줄 수 : '));
let out = '';   // 출력한 데이터를 갖는 변수
                // console.log()에 자동으로 줄 바꿈이 들어가기 때문에 공백 변수를 만들어 사용
for(let line1 = 1; line1 <= line; line1 ++){
    for( let star = 1; star <= line1; star++){
        out += '*';
    }; // for문 1 end
        out += '\n'       // \n : 이스케이프 제어문자(줄 바꿈)
};  // for문 2 end
console.log(out);



