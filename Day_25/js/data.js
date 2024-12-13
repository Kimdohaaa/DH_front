// 재사용 가능성이 있는 로직 작성 js





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

// localStorage에 특정한 게시물을 불러오는 함수
function getBoard(bno){ // 조회할 게시물 번호를 매개변수로 지정

    // 게시물 배열 요청
    let boardList = getBoardList();

    // 조회할 게시물 번호 탐색
    for(let index = 0; index < boardList.length; index++){
        if(boardList[index].bno == bno){ // 만약 index번째의 bno와 bno가 같으면
            return boardList[index]; // 찾은 게시물 객체 반환
        }
    }
    return null; // 조회한 bno와 일치하는 bno를 찾지 못함

}

// 삭제함수
function dltFunc(bno){  // 삭제할 bno를 매개변수로 받음

    // 게시물 목록 가져오기
    let boardList = getBoardList(); // data.js에서 생성한 getBoarddList() 함수 호출
    
    // 삭제할 bno의 인덱스를 탐색
    let deleteIndex = -1;
    for(let index = 0; index < getBoardList.length; index++){
        if(boardList[index].bno == deleteBno){
            deleteIndex = index;
            break;
        }
    }
    // 삭제할 번호의 게시물 인덱스를 게시물목록에서 삭제
    boardList.splice(deleteIndex , 1);

    // localStorage 업데이트
    setBoardList(boardList);

    return true;


}