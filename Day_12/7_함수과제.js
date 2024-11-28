/*
중간과제7 : 회원가입 과 로그인 구현 페이지 구현하기
[요구사항] 
1. (회원가입 구역 에서 ) 아이디 와 비밀번호를 입력받아 회원가입 처리 해주세요.
2. (로그인 구역 에서 ) 아이디 와 비밀번호가 회원가입에 등록된 데이터정보와 일치하면 '로그인 성공' 아니면 '로그인실패' 출력해주세요.
[제출]
강의 카카오톡방에 ip 링크 제출
*/
let joinArr = [];

function infunc(){
    console.log('infunc 출력');

    let joinId = document.querySelector('.joinId').value;
    let joinPw = document.querySelector('.joinPw').value;

    joinArr.push(joinId);
    joinArr.push(joinPw);

    console.log(joinArr);

};

let logArr = [];

function logfunc(){
    let logId = document.querySelector('.logId').value;
    let logPw = document.querySelector('.logPw').value;
    
    logArr.push(logId);
    logArr.push(logPw);

    console.log(logArr);

    for(let index = 0 ; index <= joinArr.length -1; index++){
        if(JSON.stringify(logArr) === JSON.stringify(joinArr)){
            // JSON.stringify(배열명) : 배열의 원소 비교
            console.log('로그인 성공');
            alert('로그인 성공');  
            joinArr.splice(0, joinArr.length);
            logArr.splice(0, logArr.length);  
        }else{
            console.log('로그인 실패');
            alert('로그인 실패');    
            joinArr.splice(0, joinArr.length);
            logArr.splice(0, logArr.length);
        };
    };
};
