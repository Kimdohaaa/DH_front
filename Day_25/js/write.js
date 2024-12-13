// 등록함수
function inFunc(){
    console.log('inFunc');

    // 입력, 저장
    let title = document.querySelector('.title').value;
    let contents = document.querySelector('.contents').value;
    let password = document.querySelector('.password').value;

    // 처리 : 입력 받은 값(날짜, 조회수) 하나의 문자열로 구성 -> 배열에 저장
        
        // 1) 사용자에게 입력받지 않고 로직에서 초기화 해주는 변수
    
    let nowDate = new Date();               // 날짜 객체 생성
    let nowYear =nowDate.getFullYear();
    let nowMonth = nowDate.getMonth()+1;    // 1월이 0부터 시작하기 때문에 +1
    let nowDay =nowDate.getDate();
    
    let date = `${nowYear}-${nowMonth}-${nowDay}`;
    console.log(date)
    let view = 0
    

    // data.js에서 게시물 배열 호출 => .push할 때 사용하기 위해 변수에 담음
    let boardList = getBoardList();
    
    // 게시물 번호 => 만약 게시물 배열이 존재하면 마지막 게시물 번호 +1 / 아니면 1
    // 개시물이 존재하면 bno는 마지막 index , 존재하지않으면 bno 는 1
    let bno = boardList.length != 0 ? 
    boardList[ boardList.length-1 ].bno + 1 : 1
    
        // 2) 5개의 변수를 하나의 객체로 구성
    let board = {
        bno : bno,
        title : title,
        contents : contents,
        password : password,
        date : date,
        view : view
    };

    console.log(board);
     

    boardList.push(board); 
    
    // 배열 상태를 localStorage에 등록
    setBoardList(boardList); // boardList에 매개변수로 board 전달

    alert('게시물 등록 성공');

    // js에서 페이지를 전환하는 함수 => js에서 <a>태그 마크업과 동일한 기능
    location.href = "board.html"; // 게시물 작성 성공 시 board.html로 화면 전환
    
};