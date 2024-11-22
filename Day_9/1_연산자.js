console.log(10+3);      // 값에 숫자만 있기 때문에 산술 연산자로 작동
console.log(10-3);
console.log(10*3);
console.log(10/3);
console.log(10%3);
// 산술 연산자
console.log(parseInt(10/3));    // 소수점을 버리고 정수로 반환


console.log(`점수 :`+10);       // 값에 문자열이 있기 때문에 연결 연산자로 작동(반환 값:문자열)


/*
예제
1. prompt 함수로 국어, 영어, 수학 점수를 각각 입력받아 각 변수에 저장하고
    총점과 평균을 계산 하여 consloe 탭에 출력하시오.
*/

/*let kor=Number(prompt('국어점수를 입력하시오.'));
let eng=Number(prompt('영어점수를 입력하시오.'));
let math=Number(prompt('수학점수를 입력하시오.'));


let sco= kor + eng + math;
let ave= sco / 3;

console.log(`총점 : ${sco}, 평균 : ${ave}`);

/*
예제
2. prompt 함수로 반지름을 입력받아서 원넓이[반지름*반지름*3.14]를 계산하여 
    console 탭에 출력하시오.
*/
/*let rdi = Number(prompt(`반지름 값을 입력하시오`));
let cir = rdi * rdi * 3.14;

console.log(cir);

/*
예제
3. prompt 함수로 두 실수를 입력 받아서 앞 실수의 값이 뒷 실수의 값의 몇 퍼센트인지를 
    계산하여 console 탭에 출력하시오.
*/
/*let num1 = Number(prompt('실수 1의 값을 입력하시오.'));
let num2 = Number(prompt('실수 2의 값을 입력하시오.')); 

let prc = (num1 /num2) * 100;

console.log(`비율 : ${prc} %`);
*/

// 비교 연산자
console.log(10>3);
console.log(10>=3);
console.log(10<3);
console.log(10<=3);
console.log(10==10);
console.log(10==3);
console.log(10!=3);
console.log(10===3);
console.log(10===10);
console.log(10==="10");
console.log(10!==3);
console.log(10!==10);
console.log(10!=="10");

// 관계 연산자
console.log(10 > 3 && 20 > 10);
console.log(10 > 3 && 20 < 10);
console.log(10 > 3 || 20 > 10);
console.log(10 > 3 || 20 < 10);
console.log(10 < 3 || 20 < 10);
console.log(!(10 > 3));
console.log(!(10 < 3));


/* [예제1] prompt 함수로 정수를 입력받아 입력받은 값이 홀수이면 true 
    / 짝수이면 false 로 console탭에 출력하시오.*/
/*
let num1 = Number(prompt('정수를 입력하시오'));
let ans1 = num1 % 2 == 1;          // 입력 값 / 2 연산 시 나머지가 1이다.

console.log(`결과 ${ans1}`);
// 홀수 판단 : 값 / 1 == % 1
// 짝수 판단 : 값 / 1 == % 0

/* [예제2] prompt 함수로 정수를 입력받아 입력받은 값이 7의 배수이면 true 
    / 아니면 false 로 console탭에 출력하시오. */
/*
let num2 = Number(prompt('정수를 입력하시오.'));
let ans2 = num2 % 7 ==0;

console.log(`결과 ${ans2}`);
// 배수 판단 : 값 / 수 == % 0   -->배수 


/* [예제 3] prompt 함수로 아이디 와 비밀번호를 입력받아서 아이디가 'admin' 이고 
    비밀번호가 1234 와 일치하면 true / 아니면 false 출력하시오.*/
/*
let id = prompt('아이디를 입력하시오');
let password = prompt('비밀번호를 입력하시오');
let login = id == "admin" && password == "1234";

console.log(`${login}`);

/* [예제 4] prompt 함수로 정수를 입력받아 입력받은 값이 홀수 이면서 7배수 이면 true 
    / 아니면 false 로 console탭에 출력하시오.*/
/*
let num3 = Number(prompt('정수를 입력하시오'));
let ans3 = num3 %1 == 1 && num3 % 7 == 0;

console.log(`${ans3}`);

/* [예제 5] prompt 함수로 십만원 단위의 금액을 입력받아 입력받은 
    금액의 지폐수를 console탭에 출력하시오.
    -> 입력 예] 356789 입력시 , 출력 예] 십만원:3장 만원:5장 천원6장*/
/*let money = Number(prompt('금액을 입력하시오'));

let money1 = money - (money - 100000);
let money2 = money - (money - 10000);
let money3 = money - (money - 1000);
if (money > 100000){alert(money1); money1++};
if (money > 10000){alert(money2); money2++};
if (money > 1000){alert(money3); money3++};

console.log(`십만원 : ${money1}장, 만원 : ${money2}장, 천원 : ${money3}장`)


/*let money = Number(prompt('금액을 입력하시오'));
let money1 = parseInt(money / 100000);
money = money -(money1 * 100000);
let money2 = parseInt(money / 10000);
money2 = money -(money2 * 10000);
let money3 = parseInt(money / 1000);

console.log(`십만원 : ${money1}장, 만원 : ${money2}장, 천원 : ${money3}장`)
*/

// (복합)대입 연산자
let num = 10;
num = num +3; console.log(num);  /* == */  num += 3; console.log(num);
num = num -3; console.log(num);  /* == */  num -= 3; console.log(num);

// 증감 연산자
let age = 40;
console.log(age--);                 
console.log(age++);             // 전위 증감 연산자  -> 출력시 원래 값 출력
console.log(age);               // 다시 출력시 증가된 값 출력

let age1 = 40;
console.log(--age1);       
console.log(++age1);            // 후위 증감 연산자
console.log(age1);              // 기존 출력 값과 같은 값 출력

// 삼항 연산자
let sco = 80;
let grd1 = sco >= 80 ? 'pass' : 'nonpass';
let grd2 = sco >= 80 ? 'pass' : sco >= 30 ? retry : nonpass;    // 삼항 중첩 연산자

console.log(grd1);
console.log(grd2);


/*
예제 . 1차 점수와 2차 점수를 prompr 함수로 각 입력을 받아서 총점이 150점 이상이면
    HTML의 <h3> 마크업에 '합격' 또는 '불합격' 출력
*/
let sco1 = Number(prompt('1차 점수를 입력하시오.'));
let sco2 = Number(prompt('2차 점수를 입력하시오.'));

let total = sco1 + sco2;
let panon = total > 150 ? '합격' : '불합격';

document.write(`<h3> ${panon} </h3>`);

/*
예제. 두 사람의 이름을 prompt함수로 각 입력받아 만일 이름이 '유재석'이면 뒤에 (방장)
    이라고 붙이고 아니면 생략 한다. (HTML ol에 표시)
*/

let name1 = prompt('이름을 입력하시오.');
let name2 = prompt('이름을 입력하시오.');

let point1 = name1 == "유재석" ? `${name1}(방장)` : `${name1}` ;
let point2 = name2 == "유재석" ? `${name2}(방장) `: `${name2}`; 

document.write(`<ol> <li>${point1}</li> <li>${point2}</li> </ol>`);












