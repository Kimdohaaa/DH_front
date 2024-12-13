// 출력함수(어디에(tbody) / 무엇을(allArr요소를 HTML로 구성해서) / 출력(.innerHTML))
outFunc();  // 페이지가 최초로 열렸을 때 1번 실행, 등록/삭제/수정 시 실행
function outFunc(){

    // localStorage로 부터 게시물 배열 호출
    let boardList = getBoardList(); // data.js에 만들어 놓은 배열 호출 함수 호출

    let tbody = document.querySelector('table > tbody');    //어디에
    let html = ``;                                          //무엇을
    for(let index = 0 ; index <= boardList.length -1; index++){
        // index는 0 부터 마지막 인덱스까지 1씩 증가

        let board = boardList[index];

        html += `<tr>
                    <td>${board.date}</td> 
                    <td> <a href = "view.html?bno =${board.bno}"> ${board.contents} </a> </td>
                    <td> ${board.view} </td>
                 </tr>` // 21행 쿼리스트링으로 상세페이지에 bno 전달
    };
   
    tbody.innerHTML = html;                                 // 출력
};
