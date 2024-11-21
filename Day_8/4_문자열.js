//console.log(유재석);    
/* error 유재석은 js에서 미리 정의해놓지 않은 
   문자열이기 때문에 문자열 처리를 해야함*/

console.log('유재석');
console.log("유재석");
console.log(`유재석`);



console.log("'유재석'");    // 작은 따옴표 출력 가능
console.log('"유재석"');    // 큰 따옴표 출력 가능
console.log(`'"유재석"'`);  // 작은 따옴표, 큰 따옴표 둘 다 출력 가능


// 이스케이프 / 제어문자
console.log('유재석 \n \'반장\'');
console.log('유재석 \n 반장');
console.log('유재석 \" 반장');
console.log('유재석 \'반장');
console.log('유재석 \\반장');
console.log('유재석 \t 반장');


console.log('유재석'+'강호동');     /* 문자열 + 문자열 = 하나의 문자열  로 출력
                                      + 연산자가 연결 연산자로 사용된 */

console.log('유재석'+ 40);         /* 문자열 + 정수 = 하나의 문자열  로 출력
                                      정수가 문자로 자동형변환돼서 40이 문자형으로 출력 */
                           
console.log('40'+'10');           /* 문자열을 나타내는 ''안에 숫자를 선언했기 때문에 문자타입으로 
                                     컴파일 되어 더하기 연산이 아니라 연결 연산이 실행됨  */

      
let age = 40;   
console.log('유재석' + age);       // 유재석변수값  으로 출력

// 백틱 템플릿
console.log(`유재석${age}강호동`);         // 백틱 템플랫 
console.log(`평균 ${100+50}`)             // 평균 150으로 출력됨


//let 직원명1='유재석';
let 직원명1 = '신동엽';
let 직원명2 = '강호동';

let nameHTML='<ol> <li> 유재석 </li> <li> 강호동 </li> </ol>'
document.write(nameHTML);


let nameHTML1=`<ol> <li> ${직원명1} </li> <li> ${직원명2} </li> </ol>`;
document.write(nameHTML);
/* 백틱 사용 시 변수 사용 가능 (변수를 새로운 값으로 초기화 시 한번에 변경 가능) */


// 입력 함수
let input = prompt('[안내문구] 데이터를 입력하세요.');   
// 페이지에서 사용자가 입력한 값이 변수 input에 초기화됨
console.log(input);
// 사용자가 입력한 값 출력

let inputHTML =`<h3> 입력받은 데이터 :${input} </h3>`;   
document.write(inputHTML);
// 변수 input에 초기화 된 값이 페이지에 출력됨

let addval = 10+5;
console.log(addval);


/*
예제 : 사원 2명의 이름 입력 -> HTML 테이블 형식으로 출력하시오.
*/
let nameinput1 = prompt(`사원명을 입력하세요.`);
let nameinput2 = prompt(`사원명을 입력하세요.`);

let table1 = `<table> <tr> <th>사원1</th> <th>사원2</th> </tr> </table>`; 
let table2 = `<table> <tr> <td> ${nameinput1} </td> <td> ${nameinput2} </td> </tr> </table>`;
document.write(table1);
document.write(table2);
