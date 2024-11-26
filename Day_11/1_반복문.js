// 반복문을 사용하지 않을 시
console.log('안녕하세요.');
console.log('안녕하세요.');
console.log('안녕하세요.');
console.log('안녕하세요.');
console.log('안녕하세요.');

console.log('1');
console.log('2');
console.log('3');
console.log('4');
console.log('5');


/*
// 반복문을 사용할 경우
중복되는 코드 : console.log();
중복되지 않는 코드 : 1 2 3 4 5
-> 패턴 : 1 ~ 5 까지 1 씩 증가됨

초기화 : 1;
조건문 : 초기화 <= 5;
증감식 : ++
반복할 실행 문장 : console.log();

for(let i = 1; i <= 5; 1++){
    console.log(i);
};
*/



/*
예제. 유재석이 계단 1칸 부터 10칸 까지 1칸 씩 오른다.

for(let 유재석 = 1; 유재석 <=10; 1++){
    오른다.
};
*/



/*
예제. 1부터 10까지 누적합계를 계산하시오.

반복문을 사용하지 않을 경우
let total = 0;
total = total +1;   or  total += 1;
total = total +2;       total += 2;
total = total +3;       total += 3;
total = total +4;       total += 4;
total = total +5;       total += 5;
total = total +6;       total += 6;
total = total +7;       total += 7;
total = total +8;       total += 8;
total = total +9;       total += 9;
total = total +10;      total += 10;

반복문을 사용할 경우
반복 코드 : total = total +
반복되지 않는 코드 : let total =0; 1 2 3 4 5 6 7 8 9 10
=> 패턴 : 1 ~ 10까지 1씩 증가
*/
let total =0;

for(let num = 1; num <= 10; num++){
    total += num;
    console.log(total);
};  // for end


/*
예제. 2단 구구단을 출력하시오.

반복 코드 : num2 * 2
반복되지 않는 코드 : 1 2 3 4 5 6 7 8 9
=> 패턴 : 1 ~ 9까지 1씩 증가 
*/
let two = 0;

for( let num2 = 1; num2 <= 9; num2++){
    two = num2 * 2;
    console.log(`2 * ${two} = ${two}`);
};
