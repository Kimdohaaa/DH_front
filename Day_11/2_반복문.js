/*
// 반복문과 배열
let 배열변수=[1,2,3,4,5,6,7,8,9,10];
for(let index =0; index <= 배열변수.length -1; index ++){
    배열변수[index];
};
*/

/*
예제. fruiteList  내 모든 원소를 하나씩 출력하시오.

console.log(fruiteList[0]);
console.log(fruiteList[1]);
console.log(fruiteList[2]);

반복 코드 :  console.log(fruiteList[]);
반복되지 않는 코드 : 0 1 2

let fruiteList = ['사과', '포도', '딸기'];

for(let index1 = 0; index1 <= fruiteList.length -1 ; index1++ );{
    console.log(fruiteList[index1]);
};
*/


/*
예제. 3개의 점수를 입력받아 점수배열에 저장하시오.

// 반복문을 사용하지 않을 경우
let sco1 = Number(prompt('점수를 입력하시오.'));
let sco2 = Number(prompt('점수를 입력하시오.'));
let sco2 = Number(prompt('점수를 입력하시오.'));

let ScoList = [];

ScoList.push('sco1');
ScoList.push('sco2');
ScoList.push('sco2');

반복 코드: Number(prompt('점수를 입력하시오.'));
          ScoList.push('추가할 원소');
*/
ScoList = [];       // ScoList : 전역변수

for(let i = 1; i <= 3; i++){                    // i : 지역변수
    let sco = Number(prompt(`점수${i} : `));    // sco : 지역변수
    ScoList.push(sco);
    console.log(ScoList);
};  // for 문 종료 시 지역변수는 자동 삭제됨

// console.log(i);      -> 출력 불가
// console.log(sco);    -> 출력 불가

//console.log(ScoList); -> 지역변수가 전역변수인 ScoList에 
//                         값을 전달 한 뒤 삭제되기 때문에 출력가능


/*
예제. 윗 예제 배열에 입력받은 점수를 <li> 마크업에 출력하시오.

// 반복문을 사용하지 않을 겨우
let outHTML = `<ol>`;
outHTML += `<li> ${ScoList[0]} </li>`;
outHTML += `<li> ${ScoList[1]} </li>`;
outHTML += `<li> ${ScoList[2]} </li>`;
outHTML += `</ol>`;

document.write(outHTML);

반복 코드 : outHTML += `<li> ${ScoList[]} </li>'
반복되지 않는 코드 : let outHTML = `<ol>`;   outHTML += `</ol>`;  document.write(outHTML);
*/
let outHTML = `<ol>`;
for(let index = 0; index <= ScoList.length -1 ; index++ ){
    outHTML += `<li> ${ScoList[index]} </li>`    
};
outHTML = `</ol>`;

document.write(outHTML);