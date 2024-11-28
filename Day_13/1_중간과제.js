/*
[과제]
    1. 메모리 / 데이터 
        - 제목 , 내용 , 비밀번호 , 작성날짜 , 조회수 필드값 저장
        let titleList = ['게시물1 제목','게시물2 제목', '게시물3 내용']
        let contList = = ['게시물1 내용','게시물2 내용', '게시물3 내용']
        let pList = ['1234','5678','1478']
        let writeList == ['2024-11-25','2024-11-26','2024-11-27']
        let readList = ['3','2','1'] 
        => 여러 배열을 한개의 배열로 관리 (CSV) -> 문자열.split(',')을 이용한 분해 가능
        - 게시물1 : '게시물1 제목', '게시물1 내용' , '1234' , '2024-11-25' , '3'
        - 게시물1 : '게시물2 제목', '게시물2 내용' , '5678' , '2024-11-26' , '2'
        - 게시물1 : '게시물3 제목', '게시물3 내용' , '1478' , '2024-11-27' , '0'
        방법 1) let allArr = ["게시물1 제목 , 게시물1 내용 , 1234 , 2024-11-25 , 3",
                             "게시물2 제목 , 게시물2 내용 , 5678 , 2024-11-26 , 2",
                             "게시물3 제목 , 게시물3 내용 , 1478 , 2024-11-27 , 0"];
        방법 2) let all = "게시물1 제목 , 게시물1 내용 , 1234 , 2024-11-25 , 3" \n
                          "게시물2 제목 , 게시물2 내용 , 5678 , 2024-11-26 , 2" \n
                          "게시물3 제목 , 게시물3 내용 , 1478 , 2024-11-27 , 0";
    
    함수
        - 등록함수 : [등록]버튼 클릭 시 입력받은 3개 값(제목,내용,비밀번호)를 js배열에 저장
                        -> .push() 함수 사용
        - 출력함수 : 배열 값 변화(최초1번, 등록,삭제,수정)가 있을 때 배열 내 모든 정보(게시물) 출력
                        -> .length() 함수 사용
        - 삭제함수 : [삭제]버튼 클릭 시 비밀번호를 입력 받아 현재 상세 게시물의 비밀번호와 일치 시 
                    배열 내 해당 게시물 삭제
                        -> .splice()함수 사용
        - 수정함수 : [수정]버튼 클릭 시 비밀번호를 입력받아 현재 상세게시물의 비밀번호와 일치하면 
                    새로운 내용을 입력받아 해당 게시물 내용 수정
                        -> 배열[index]= 새로운 값
        - 조회수 함수
*/
let allArr = ["게시물1 제목 , 게시물1 내용 , 1234 , 2024-11-25 , 3",
              "게시물2 제목 , 게시물2 내용 , 5678 , 2024-11-26 , 2",
              "게시물3 제목 , 게시물3 내용 , 1478 , 2024-11-27 , 0"];

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
    
        // 2) 5개의 변수를 하나의 문자열(CSV)로 구성
    let board = `${title},${contents},${password},${nowDate},${view}`
    console.log(board);
     
        // 3) 구성된 CSV 문자열을 배열에 저장
    allArr.push(board)
    console.log(allArr)

    outFunc();
};

// 출력함수(어디에(tbody) / 무엇을(allArr요소를 HTML로 구성해서) / 출력(.innerHTML))
outFunc();  // 페이지가 최초로 열렸을 때 1번 실행, 등록/삭제/수정 시 실행
function outFunc(){
    console.log('outFunc');

    let tbody = document.querySelector('table > tbody');    //어디에
    let html = ``;                                          //무엇을
    for(let index = 0 ; index <= allArr.length -1; index++){
        // index는 0 부터 마지막 인덱스까지 1씩 증가

        let board = allArr[index];

        let info = board.split(','); 
        // 문자열.split => CSV형식으로 구성된 문자열을 쉼표기준으로 분해
        //                -> 분해된 결과를 배열 원소에 저장해 반환
        // info[0]=title, info[1]=contents, info[2]=password, info[3]=nowDate, info[4]=view
        html += `<tr>
                    <td>${info[3]}</td>
                    <td> <a href="#" onclick="pageFunc(${index})"> ${info[0]}</a> </td> 
                    <td>${info[4]}</td>
                 </tr>` // 클릭 시 상세페이지로 전환하기 위해 제목에 하이퍼링크 지정
    };
   
    tbody.innerHTML = html;                                 // 출력
};

// 상세 함수 (실행조건 : 전체 출력화면에서 특정한 제목을 클릭했을 때)
function pageFunc(index){   /* 제목 onclick함수에 인자값으로 설정된 ${index}가 
                               가지고 있는 값이 pageFunc의 매개변수 index로 대입됨 */ 
    console.log('pageFunc');
    console.log(index);

    let board = allArr[index];   // 선택한 인덱스의 게시물 호출
    let info = board.split(',');            // 게시물 문자열을 쉼표기준으로 분해

    document.querySelector('.detTitle').innerHTML = info[0];
    document.querySelector('.detContents').innerHTML = info[1];
    document.querySelector('.detDate').innerHTML = info[3];
    document.querySelector('.detView').innerHTML = info[4];

    // 삭제 시 게시물 index를 사용하기 위해 js에 작성
    document.querySelector('.btnBox').innerHTML =
                                `<button onclick="dltFunc(${index})" type="button">
                                    삭제
                                </button>
                                <button onclick="editFunc(${index})" type="button">
                                    수정
                                </button>`
};

// 삭제함수
function dltFunc(index){
    console.log('dltFunc');

    // 배열 내 특정한 인덱스의 원소 제거(배열변수명.splice(삭제할 인덱스, 개수))
    allArr.splice(index, 1);

    //화면 새로고침, 다시 출력, 다시 함수호출
    outFunc();
};
// 수정함수
function editFunc(){
    console.log('editFunc');

    all
};

