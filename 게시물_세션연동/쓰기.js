/* let allArr = ["게시물1 제목 , 게시물1 내용 , 1234 , 2024-11-25 , 3",
    "게시물2 제목 , 게시물2 내용 , 5678 , 2024-11-26 , 2",
    "게시물3 제목 , 게시물3 내용 , 1478 , 2024-11-27 , 0"];
*/
// 등록함수
function inFunc(){
    console.log('inFunc');

    let allArr = localF()
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

    // 2) 5개의 변수를 하나의 문자열(CSV)로 구성
    let board = `${title},${contents},${password},${nowDate},${view}`
    console.log(board);

    // 3) 구성된 CSV 문자열을 배열에 저장
    allArr.push(board)

    localStorage.setItem('allArr', JSON.stringify(allArr));

};

