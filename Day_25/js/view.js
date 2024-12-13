/*
new URL(주소) : 지정한 주소의 다양한 정보를 js객체로 가져오기 
    - new URL(location.href) : 현재 js가 위치한 URL 정보 객체 가져오기
    - new URL(location.href).searchParams : URL 상 쿼리스트링 정보 반환(매개변수개수반환)
    - new (location.href).searchParams.get("매개변수명") : 쿼리스트링에서 매개변수와 일치하는 값 반환
    */
pageFunc();

// 상세 함수 (실행조건 : 전체 출력화면에서 특정한 제목을 클릭했을 때)
function pageFunc(){   /* 출력할 식별자를 매개변수가 아닌 URL로부터 전달
                            받을 것이기 때문에 매개변수 x */ 
    

    console.log(new URL(location.href));
    console.log(new URL(location.href).searchParams);
    console.log(new URL(location.href).searchParams.get('bno'));
    
    // URL 경로상의 ?뒤에 쿼리스트링 값 가져오기
    let bno = new URL(location.href).searchParams.get('bno');
    
    // 식별자(게시물 번호)를 가지고 해당 게시물의 모든 정보 가져오기
    let board = getBoard(bno); // data.js에서 작성한 getBoard() 함수에 조회한 bno를 매개변수로 전달


    // 동일한 bno를 찾았을 경우 html에 출력
    document.querySelector('.title').innerHTML = board.title;
    document.querySelector('.contents').innerHTML = board.contents;
    document.querySelector('.date').innerHTML = board.date;
    document.querySelector('.view').innerHTML = board.view;

    // 삭제 시 게시물 index를 사용하기 위해 js에 작성
    document.querySelector('.btnBox').innerHTML =
                                `<button onclick="dltFunc(${board.bno})" type="button">
                                    삭제
                                </button>`

};



// 삭제함수
function dltFunc(deleteBno){  // 삭제할 bno를 매개변수로 받음

    deleteBoard(deleteBno); // data.js에서 작성한 deleteBoard() 함수 호출

    // 안내창 및 페이지 전환
    alert('삭제완료');
    location.href = "board.html";

}