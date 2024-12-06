/*
세션을 이용한 회원가입 / 로그인 구현
- 회원목록정보를 전역변수에 선언하지 않고 세션 / 쿠키에 저장 
    => 브라우저에 저장시 JS에 변화(ex . 새로고침)가 있어도 저장 유지 가능
*/



// 회원가입 함수 선언
    // 함수의 실행조건 : 회원가입 버튼 클릭 시
    // 함수의 인자값(매개변수) : X
    // 함수의 반환값(return 값) : X
function joinF(){
    
    // 입력
    let id = document.querySelector('.signId').value;
    let pw = document.querySelector('.signPw').value;
    
    // 처리(세션에 입력 값 저장)
    let member = {'id' : id, 'pw' : pw};    // 입력 받은 값으로 객체 생성

    let memberList = userInfF(); // 공통된 부분을 처리하는 함수 호출
        /*
        // 1. 현재 회원정보를 저장하기 위한 회원정보목록을 세션에서 가져오기
        let memberList = sessionStorage.getItem('memberList');
        console.log(memberList);

        // 2. 회원정보목록에 존재 O or 존재 X
        if(memberList == null){ // memberList가 null이면
            memberList = [];     // 빈 배열을 생성해 변수에 대입
        }else{  // memberList가 존재하면
                // 문자열 ---> 객체로 변환
            memberList = JSON.parse(memberList);
        };
        */
        console.log(memberList);

        // 3. 배열에 입력받은 값 저장
        memberList.push(member);
        console.log(memberList);
   
        // 4. 값을 입력받은 배열을 다시 세션에 문자열로 형변환하여 저장
        sessionStorage.setItem('memberList', JSON.stringify(memberList));
        console.log(memberList);

    // 출력
    alert('회원가입이 완료되었습니다.')
    return;
};


// 로그인(기록(회원가입)과 일치한 정보를 비교해 들어감) 함수 선언
function logInF(){
    let logInId = document.querySelector('.logInId').value;
    let logInPw = document.querySelector('.logInPw').value;
    
    let memberList = userInfF(); // 공통된 부분을 처리하는 함수 호출
    
    /*
    // memberList를 가져옴
    let memberList = sessionStorage.getItem('memberList');
    if(memberList == null){
        memberList = []; // 회원정보가 존재하지 않으면 빈 배열 생성
    }else{
        memberList = JSON.parse(memberList); // 회원정보가 존재 시 JSON으로 형변환
    };
    */

    // 로그인 정보가 회원정보목록(기록) 내에 존재하는지 확인
    for(let i = 0; i < memberList.length ; i++){
        let info = memberList[i];
        if(info.id == logInId && info.pw == logInPw){
            alert('로그인 성공');

            return; // 함수 종료
        };
    };
    alert('동일한 회원정보가 없습니다.');

    return;

};



// 세션에 있는 회원정보 목록 반환 함수(회원가입함수와 로그인 함수의 겹치는 부분)
function userInfF(){
    // memberList를 가져옴
    let memberList = sessionStorage.getItem('memberList');
    if(memberList == null){
        memberList = []; // 회원정보가 존재하지 않으면 빈 배열 생성
    }else{
        memberList = JSON.parse(memberList); // 회원정보가 존재 시 JSON으로 형변환
    };

    return memberList;  // 함수가 종료 시 함수가 호출된 곳으로 return하는 값
}; 

/* 
함수는 지역변수로 호출 시에만 메모리를 할당받기 때문에 메모리를 효율적으로 사용 가능
  -> 메모리할당을 브라우저에게 전가
*/