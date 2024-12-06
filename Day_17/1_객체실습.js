// new Date() : 현재 시스템(px) 날짜 또는 시간을 반환하는 객체 / 함수
console.log(new Date());

console.log(new Date().getFullyear);
console.log(new Date().getMonth());       // 1월 => 0
console.log(new Date().getDate());
console.log(new Date().getDay());   // 요일 함수 (0 : 일 ~ 6 : 토)

// 원하는 날짜로 지정
console.log(new Date(2023, 4, 20));



// 전연변수 선언
let today = new Date();
let year = today.getFullYear(); // 현재 연도
let month = today.getMonth() + 1;


// 달력에 일정 객체 생성
let contentArray =[
    {cno : 1, content : '학원', date : '2024-12-4', color : 'red'},
    {cno : 2, content : '학원', date : '2025-1-23', color : 'green'},
    {cno : 3, content : '학원', date : '2025-1-31', color : 'orange'}
];


// 달력출력함수 (js실행 시 최초 1번 / 월 변경 => 실행)
// 일정출력함수 
function calPrint(){
    // 달력 연도 / 월 표시
        
    // 1. 어디에
    let h6 = document.querySelector('#calTop > h6');
        
    // 2. 무엇을
    let html1 = `${year}년 ${month}월`;

    // 3. 출력
    h6.innerHTML = html1;


    // 현재 연도 / 월의 일 표시

    // 1. 어디에
    let calBottom = document.querySelector('#calBottom');
    
    // 2. 무엇을
    let html2 =``;
        // 요일 출력
    html2 +=    `<div class="week sunday">일</div>
                <div class="week">월</div>
                <div class="week">화</div>
                <div class="week">수</div>
                <div class="week">목</div>
                <div class="week">금</div>
                <div class="week">토</div>`;
    
    // 3. 출력
    
        // 현재 날짜의 마지막 일 구하기 (달력을 1~마지막 날까지 출력하기 위해)
    // 0을 넣어 지정한 연도와 월에 전달의 해당하는 말일을 구함
    let date1 = new Date(year, month, 0); 
    console.log(date1);
    let endDay = date1.getDate();
    
        // 현재 날짜의 1일의 요일 구하기(1일의 시작 위치를 지정하기 위해서)
    // 1을 넣어 지정한 연도와 월의 현재달의 해당하는 말일을 구함
    let date2 = new Date(year, month-1, 1);
    console.log(date2);
    let startWeek = date2.getDay();
    console.log(startWeek);

    // 각 월의 1일 전까지 공백 출력
    for(let blank =1 ; blank <= startWeek; blank++){
        html2 += `<div></div>` // 공백 대입
    };
   
   
    // HTML(달력)에 날짜 출력
    for(let day =1 ; day <= endDay; day++){ // day는 1~현재 날짜의 마지막 날까지 1씩 증가
        
        // 일정 출력
            // 1. 현재 날짜(for문이 처리 중인 날짜)
        let date3 = `${year}-${month}-${day}`;
            console.log(date3);
           
            // 2. 현재 날짜와 등록된 일정날짜와 동일한 일정 찾기       
        // 동일한 날짜의 2개 이상의 일정이 있을 수 있으므로 누적을 위해 for문 / if문 밖에 생성
        // -> for문 / if문 안에서 선언할 경우 초기화 됨(값 누적 불가)
        let planHtml = ``;  
        for(let index = 0; index <= contentArray.length -1; index++ ){
            let plan = contentArray[index];

            // 만약 index번째 일정객체 내 일정 == 현재날짜 라면
            if(plan.date == date3){
                planHtml += `<div style="background-color: ${plan.color}">
                                ${plan.content}
                            </div>`
            };
        };

        html2 += `<div >${day} ${planHtml}</div>`

    };

    calBottom.innerHTML = html2;
    
    return; // 함수 종료
};

// 월(이전달 / 다음달)변경함수 (이전달 버튼 클릭 / 다음달 버튼 클릭 => 실행)
function monthChange(changeMonth){
    console.log(changeMonth); // 매개변수 확인

    // 매개변수에 따른 월 수정
    month += changeMonth;

    // 월이 1 미만 => 연도 -1 
    if(month < 1){
        year--;
        month = 12;
    };
    // 월이 12 초과 => 연도 +1
    if(month > 12){
        year++;
        month = 1;
    };

    // 월 수정에 따른 새로고침(출력함수 재실행)
    calPrint();

    return;
};

