/*
interval(간격) : 특정시간에 따라 특정 함수 반복 호출(인증코드 입력 시 시간제한 등에 사용)
    1. setInterval(함수, 주기);
        -> 함수 : 주기에 따라 실행할 함수
        -> 주기 : 밀리초(1/1000초)단위 사용( 1000 : 1초 / 10000 : 10초 )
        => 설정 주기마다 지정한 함수 실행
    2. clearInterval(종료할인터벌변수) : 인터벌 종료
*/


// 변수 값 증가
let value = 0;
function incF(){
    value++;
    document.querySelector('.box1').innerHTML = value; // HTML에 value 대입
};
setInterval(incF,1000); // 1000밀리초(= 1초)마다 1씩 증가


// 시계 값 증가
function clockF(){
    // 날짜 , 시간 객체 
    let today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();    // 현재 시스템의 시,분,초

    document.querySelector('.box2').innerHTML =`${hour} : ${minute} : ${second}`
}; 
setInterval(clockF,1000);


// 타이머 값 증가
let time = 0;       // 초깃값 설정(누적을 위해 설정)
let timerId;        // 타이머 변수 선언(공통으로 사용하기 위해 전역변수로 선언)

// 타이머 시작 함수
function timerF(){
    time++;
    document.querySelector('.box3').innerHTML = time;
};

// 타이머 함수
function timerS(){
    timerId = setInterval(timerF, 1000);
};

// 타이머 종료 함수
function timerE(){
    clearInterval(timerId);
};
