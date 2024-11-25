//1. 3개의 점수를 각 입력받아 총점 계산 하여 총점이 90 이상이면 '성공' 아니면 '실패' 출력하시오.
let num1 = Number(prompt(`점수 1을 입력하시오.`));
let num2 = Number(prompt(`점수 2을 입력하시오.`));
let num3 = Number(prompt(`점수 3을 입력하시오.`));

let total = num1 + num2 + num3

if (total >= 90){
    console.log('성공');
}else{console.log('실패')};


//2. 2개의 정수를 각 입력받아 더 큰수를 출력 하시오.
let num4 = Number(prompt(`정수 1을 입력하시오.`));
let num5 = Number(prompt(`정수 2을 입력하시오.`));

if(num4 > num5){
    console.log(num4);
}else{console.log(num5)};

//3. 3개의 정수를 각 입력받아 가장 큰수를 출력 하시오.
let num6 = Number(prompt(`정수 1을 입력하시오.`));
let num7 = Number(prompt(`정수 2을 입력하시오.`));
let num8 = Number(prompt(`정수 3을 입력하시오.`));

if(num6 > num7){
    if(num6 > num8){
        console.log(num6);
    }else{
        console.log(num8);
    }
};
if(num6 < num7){
    if(num7 > num8){
    console.log(num7)
    }else{console.log(num8)};
};


/*
let max = num6;
if (max < num7){max = num7};
if (max < num8){max = num8};
*/


//4. 3개의 정수를 각 입력받아 오름차순 또는 내림차순 하여 정렬해서 출력하시오. 
/*
정렬(=비교) 
    - 오름차순 : A와 B를 비교해서 B가 더 작으면 B의 값을 A 값으로 교체 => 반복
    - 내림차순 : A와 B를 비교해서 B가 더 크면 B의 값을 A 값으로 교체 => 반복
★ A = B ; 연산 시 기존 A의 값은 사라짐
swap(정렬(=비교)) 방법 
    - 임시변수를 사용해 A의 값을 임시변수에 임시로 저장해놓은 후 A = B; 연산을 진행
    ex . temp = A;
         A = B;
         B = temp;      => A와 B의 변수값 교환
*/
let num9 = Number(prompt(`정수 1을 입력하시오.`));
let num10 = Number(prompt(`정수 2을 입력하시오.`));
let num11 = Number(prompt(`정수 3을 입력하시오.`));

// 내림차순
if(num9 < num10){
    let temp1 = num9;
    num9 = num10;
    num10 = temp1;       // 조건 충족 시 num9과 num10의 변수 값 교환
};
if(num9 < num11){
    temp1 = num9;
    num9 = num11;
    num11 = temp1;       // 조건 충족 시 num9과 num11의 변수 값 교환
};
if(num10 < num11){
    temp1 = num10;
    num10 = num11;
    num11 = temp1;       // 조건 충족 시 num10과 num11의 변수 값 교환
};

console.log(`결과 ${num9} ${num10} ${num11}`);

// 오름차순
if(num9 > num10){
    let temp2 = num9;
    num9 = num10;
    num10 = temp2;       // 조건 충족 시 num9과 num10의 변수 값 교환
};
if(num9 > num11){
    temp2 = num9;
    num9 = num11;
    num11 = temp2;       // 조건 충족 시 num9과 num11의 변수 값 교환
};
if(num10 > num11){
    temp2 = num10;
    num10 = num11;
    num11 = temp2;       // 조건 충족 시 num10과 num11의 변수 값 교환
};

console.log(`결과 ${num9} ${num10} ${num11}`);


/*
5. 1개의 점수를 입력받아 90점 이상이면 'A등급' 80점이상이면 'B등급' 
    70점이상 'C등급' 그외 '재시험' 출력하시오.
    */
let num12 = (prompt(`점수를 입력하시오.`));

let test = num12 > 90 ? `A등급` : num12 > 80 ? `B등급` : num12 > 70  ? `C등급` : `재시험`;

console.log(test);


/*6. 아이디와 비밀번호 입력받아 아이디가 'admin' 이고 비밀번호가 '1234' 이면 
    '로그인 성공' 아니면 '로그인실패' 출력하시오.*/
let id = (prompt(`아이디를 입력하시오.`));
let password = Number(prompt(`비밀번호를 입력하시오.`));

if(id == `admin`){
    if(password == 1234){
    console.log(`로그인성공`)
    }
}else{console.log(`로그인 실패`)};


/*7. 과일 배열 선언하고 let fruitList = [ '바나나' , '사과' ]
하나의 과일명을 입력받아 fruitList 에 존재하는 과일이면 '이미 존재하는 과일입니다' 출력 
아니면 배열에 입력받은 과일명 저장 하고 현재 배열을 출력하시오.
*/
let fruitList =['바나나', '사과'];
let fruit = prompt('과일을 입력하시오.');
let exist = fruitList.indexOf(fruit);

if(exist != -1){            // 존재 여부가 -1이 아니면(존재하지 않으면)
    console.log('이미 존재하는 과일입니다.');
}else{
    fruitList.push(fruit);      // fruitList 배열 내 추가
    console.log('List에 추가됐습니다.')
};


/*
8. 주민등록번호를 입력받아서 성별이 남자이면 색상변수에 'blue' 을 여자이면 
    'red' 을 대입 하고 색상변수 출력하시오.
*/
/*
문자여러개 작성 = 문자열(문자배열)
ex) 1[0]2[1]3[2]4[3]5[4]6[5] -[6] 1[7]2[8]3[9]4[10]5[11]6[17]
*/
let idcard = Number(prompt(`주민등록번호를 입력하시오.`));
let color = 'black'

//console.log(idcard[7]);   -->   입력된 문자열(=문자배열)중 7번째 인덱스에 포함되는 원소
if(idcard[7] == 1 || idcard[7] ==3){    // 7번째 인덱스의 값이 1 또는 3 이면
    color = 'blue'
}else{ color = 'red' };

console.log(`결과 : ${color}`);


/*
9. 가위바위보 게임 
조건1 : 가위 0 , 바위 1 , 보 2 입니다.
조건2 : 플레이어 2 명 입니다.
실행조건 : 각 플레이어가 가위바위보 중에 한번씩 입력받기 
출력조건 : 
플레이어1 이겼을때 '플레이어1 승리' 출력 하시오.
플레이어2 이겼을때 '플레이어2 승리' 출력 하시오.
비겼을경우 '무승부' 출력 하시오.
*/
/*
경우의 수
1. p1 승리 : 가위(보) / 바위(가위) / 보(바위)
2. p2 승리 : 가위(보) / 바위(가위) / 보(바위)
3. 무승부 : 가위(가위) / 바위(바위) / 보(보)    ==> 총 9개의 경우의 수 존재
(player1 == 1 && player2 == 2)
(player1 == 1 && player2 == 0)
(player1 == 2 && player2 == 1)      // player1 승리 경우의 수

(player1 == 2 && player2 == 1)
(player1 == 0 && player2 == 1)
(player1 == 1 && player2 == 2)      // player2 승리 경우의 수

(player1 == 0 && player2 == 0)
(player1 == 1 && player2 == 1)
(player1 == 2 && player2 == 2)      // 무승부 경우의 수

패턴 
1. 두 수가 같으면 무승부 player1 == player2
2. player1 == (player2 + 1) % 3 -> 나머지 값이 player1과 같으면 player1 승리
3. 나머지 값이 player1과 다르면 player2 승리
==> 패턴 사용 시 코드를 줄일 수 있음
*/
let player1 = Number(prompt(`가위(0), 바위(1), 보(2)를 입력하시오.`));
let player2 = Number(prompt(`가위(0), 바위(1), 보(2)를 입력하시오.`));

if(player1 == 0 && player2 == 2||(player1 == 1 && player2 == 0)||(player1 == 2 && player2 == 1))
{console.log('player1 승리');}
else if(player1 == player2){
    console.log('무승부')
}else{
    console.log('player2 승리')
}


/*
10. 좌석 3개의 상태를 가지는 배열 선언하고 let sheetList = [ 'O' , 'X' , 'O' ]
    하나의 좌석 순서번호를 입력받아 빈좌석 이면 '예약성공' 아니면 '예약불가' 출력하시오.
    빈좌석 : 'X'  사용중인좌석 : 'O'
*/
let sheetList = [ 'O' , 'X' , 'O' ];

let choice = Number(prompt('좌석번호를 선택하시오 (0~2)'));

if( choice == 1){
    console.log('예약불가');
}else{
    console.log('예약성공');
};

/*
11 : 주차장 차량 검색대
    조건1 : let carArray = [ '250어7142' , '142가7415' ]  : 차량번호
    조건2 : let locationArray = [ 'A1' , 'B3' ]           : 주차위치
    조건3 : carArray, locationArray 인덱스가 같은 정보의 차량
    조건4 : 차량번호 입력받아 내 차량 위치 찾기 
*/
let carArray = [ '250어7142' , '142가7415' ]; 
let locationArray = [ 'A1' , 'B3' ];   

let carnum = prompt(`차량번호를 입력하시오.`);

let findcar1 = carnum == carArray[0] ? console.log(locationArray.indexOf('0')) : '차량번호가 존재하지 않습니다.';
let findcar2 = carnum == carArray[1] ? console.log(locationArray.indexOf('1')) : '차량번호가 존재하지 않습니다.';
/*
let carArray = [ '250어7142' , '142가7415' ]; 
let locationArray = [ 'A1' , 'B3' ]; 
let carnum = prompt(`차량번호를 입력하시오.`);
let findindex = carArray.indexOf(carnum);
if (findindex == -1){
    console.log('입력한 차량번호는 주차내역에 없습니다.');
}else {
    console.log('입력한 차량번호릐 주차위치${locationArray[findindex]}');
}
*/



/*
응용 : 서로 다른 속성의 값들을 하나로 표현하는 방법
1. CSV(쉼표로 구분된 텍스트) : 문자열1 ,(쉼표) 문자열2 로 표현
    -> ex . '250어7142,A1'
2. 객체 : 객체 하나에 여러 속성을 작성해서 표현 
    -> ex . 객체이름: {차량번호 : '250어7142' 위치 : 'A1'};
*/