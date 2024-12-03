/*
1. 데이터 
    - 할 일 코드 -> 식별자 역할(수정 / 삭제 시 수정 / 삭제 할 대상을 식별하기 위해)
    - 할 일 내용(1교시수업듣기 / 밥먹기)
    - 할 일 상태(true / false -> if문 간소화 가능 / 메모리 ↓ / 부정연산자 사용 가능 )

2. 배열 타입 / 객체 타입을 이용한 메모리 구성

        할 일 코드      할 일 내용      할 일 상태
        ----------------------------------------
            1           수업듣기          false
            2            밥먹기           true
        => 표 = 배열 / 행 = 객체 1개

3. 함수 구성
    - 실행 조건 / 함수와 함수 기능 구현 / 함수의 매개변수와 리턴값
    - 등록함수 
        -> [등록]버튼 클릭 시
        -> 매개변수 : X
        -> 리턴값 : X
    - 출력함수 
        -> JS 실행 시 / 등록, 수정, 삭제 성공 시
        -> 매개변수 : X
        -> 리턴값 : X
    - 수정함수 
        -> [수정]버튼 클릭 시
        -> 매개변수 : 할 일 코드
        -> 리턴값 : X
    - 삭제함수 
        -> [삭제]버튼 클릭 시
        -> 매개변수 : 할 일 코드
        -> 리턴값 : X

4. 함수 별 로직 구성
*/

// 객체와 메모리 구성
let 할일목록 = [
    {할일코드 : 1, 할일내용 : '수업듣기', 할일상태 : false},
    {할일코드 : 2, 할일내용 : '밥먹기', 할일상태 : true}
];
let 식별번호 = 3;



// 함수 구성
// 등록함수
function inFunc(){
    
    let contentInput = document.querySelector('.contentInput').value;

    // 객체 생성
    let 할일 ={
        할일코드 : 식별번호,        // '식별번호' 변수 값 대입
        할일내용 : contentInput,   // 'contentInput' 변수 값 대입
        할일상태 : false           // 초기값 false(미완료)로 지정 
    };

    할일목록.push(할일);
    식별번호++; // 할 일 등록 시 식별코드가 ++ 되기 위해서 지정
    
    console.log(할일목록);

    alert('할 일이 등록되었습니다.');
    document.querySelector('.contentInput').value =` ` ;    // value 수정

    outFunc();

    return;
};



outFunc();          // JS가 실행될 때 outFunc() 최초 실행

// 출력함수
function outFunc(){
    // 어디에
    let todoBottom = document.querySelector('#todoBottom');

    // 무엇을
    html = ``;
        for(let index = 0 ; index <= 할일목록.length -1 ; index++){
            // index 번째의 객체(할 일 내용) 꺼내기
            let info = 할일목록[index];

            // 만약 index 번째의 할일상태가 true == success / false == ''  
            html += `<div class="contentBox ${info.할일상태 ? 'success' : ''}">  
                        <div class="content"> ${info.할일내용} </div>
                        <div class="contentBtns">
                            <button onclick = "changeFunc(${info.할일코드})" class="updateBtn"  >수정</button>
                            <button  onclick = "delFunc(${info.할일코드})" class="deleteBtn">삭제</button> 
                        </div>
                    </div>`
        };

    // 출력
    todoBottom.innerHTML = html;

    return;
};



// 수정함수
function changeFunc( 수정할일코드 ){
    
    // 배열 내 수정할 원소 탐색
    for(let index = 0 ; index <= 할일목록.length -1 ; index++){
        if(할일목록[index].할일코드 == 수정할일코드 ){

            // 해당 원소 수정 ( true -> false / false -> true )
            할일목록[index].할일상태 = !할일목록[index].할일상태

        };
    };
    
    outFunc();
    
    return;

};

// 삭제함수
function delFunc( 삭제할일코드 ){
   
    // 배열 내 삭제할 원소 탐색
    for(let index = 0 ; index <= 할일목록.length -1 ; index++){
        if(할일목록[index].할일코드 == 삭제할일코드 ){
            
            // 해당 원소 삭제
            할일목록.splice(index, 1); // 탐색 index원소 삭제
            break; // 삭제 성공 시 for문 종료

        };
    };

    outFunc();

    return;
};