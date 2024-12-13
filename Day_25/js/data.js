// localStorage에 배열 정보 불러오기 함수
function getBoardList(){

    // 1. localStorage에 배열 정보 요청 (키값 넣기)
    let boardList = localStorage.getItem('boardList') // boardList => 키값

    if(boardList == null){
        boardList = []; // localStorage가 null 이면 빈 배열 대입
    }else {
        boardList = JSON.parse(boardList);
        // localStorage에 값이 있으면 객체로 변환
    }

    return boardList; // 현재 함수를 호출했던 곳으로 게시물 배열 반환

}

// localStorage에 배열 정보 저장하는 함수
function setBoardList(boardList){ // write.js에서 받은 board 매개변수
    // boardList라는 이름으로 boardList 저장
    localStorage.setItem('boardList', JSON.stringify(boardList)); 
}