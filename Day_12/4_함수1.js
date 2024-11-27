// 변수의 유효범위
let  전역변수 = 'korea';

if(true){
    let 지역변수1 = 'incheon';
    console.log(전역변수);       // 전역변수기 때문에 출력가능
    console.log(지역변수1);      // 지역변수 블록 안이기 때문에 출력 가능

    for(let i = 0; i < 1; i++){
        let 지역변수2 = 'bupyeong'
        console.log(전역변수);
        console.log(지역변수1);  // 지역변수가 선언된 블록의 하위 블록에서도 지역변수 출력 가능
        console.log(지역변수2);  // 지역변수 블록 안이기 때문에 출력 가능
    };
    //console.log(지역변수2);    // 지역변수 블록 밖이기 때문에 출력 가능
};
console.log(전역변수);            // 전역변수기 때문에 출력가능  
//console.log(지역변수1);         // 지역변수 블록이 종료되었기 때문에 출력 불가
//console.log(지역변수2);         // 지역변수 블록이 종료되었기 때문에 출력


// 변수 유효범위 사용 예시
for(let i = 1 ; i <=10; i++){
    let star = ''
    star = '*';
};
//console.log(star); // star을 for문의 지역변수로 선언했기 때문에 출력 불가

let star =  '';      // star을 전역변수로 선언
for(let i = 1 ; i <=10; i++){
    star += '*';
};
console.log(star);  // star을 전역변수로 선언했기 때문에 출력 가능


// 예시 . 사람의 이름을 입력받아 배열에 모두 저장하시오.
/*
변수의 유효범위 잘못 사용 예시.
function 등록함수(){
    let nameArr = [];            // 지역변수이기때문에 배열을 누적 사용 불가
    let name = prompt( `이름`);
};
-> 등록함수가 종료되는 순간 배열도 사라짐
*/
let nameArr = [];

function 등록함수(){
    let name = prompt( `이름`);
    nameArr.push(이름);
};
/* 지역변수 name이 전역변수 nameArr에 데이터를 저장한 뒤 메모리를 반환하기 때문에
   지역변수 name은 사라지지만 name이 nameArr에 저장한 이름은 남아있다. -> 메모리 관리가 효율적 */
