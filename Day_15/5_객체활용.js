/*
1. 각 사원 정보와 각 사원의 년도별 점수 평가 메모리 구성
    - 저장할 데이터 
        -> 사원명 / 생년월일 / 연도 / 상반기 점수 / 하반기 점수
    - 저장할 데이터들의 관계성에 따라 분류
        -> 사원정보(사번 / 사원명 / 생년월일) / 점수(년도/ 상반기 / 하반기)
        ★ 상하관계(= 일 대 다 관계)에 따라 분류
            - 사원이 존재해야 점수도 존재 가능
            - 일 대 다 관계 : 하나의 데이터가 다른 데이터 여러 개를 참조한다.   
                ex . 1 유재석 2000-01-01  ----> 1 2023 90 80
                                         ----> 1 2024 95 89 
*/



// 사원 정보 객체 생성
let 사원1 = {사원번호: 1, 사원명: '유재석', 생년월일: '2000-01-01'};
let 사원2 = {사원번호: 2, 사원명: '강호동', 생년월일: '2000-01-01'};

// 사원 등록
let 사원목록 = [];
사원목록.push(사원1);
사원목록.push(사원2);

console.log(사원목록);


// 평가 객체 생성
// 유재석의 2024 평가 등록
let 점수1 = {사원번호 :1, 평가년도 : '2024', 상반기 : 100, 하반기: 80 };
// 강호동의 2024 평가 등록
let 점수2 = {사원번호 :2, 평가년도 : '2024', 상반기 : 92, 하반기: 71 };
// 유재석의 2023 평가 등록
let 점수3 = {사원번호 :1, 평가년도 : '2023', 상반기 : 82, 하반기: 97 };


let 평가목록 = [];
평가목록.push(점수1);
평가목록.push(점수2);
평가목록.push(점수3);
console.log(평가목록);



// 사원 번호 전역변수
let eno = 3; // 샘플(사원)이 두개이기 때문에 다음 등록된 사원 번호는 3부터 시작하기 때문에 3

// 사원 등록 함수
function 사원등록(){
    console.log(`사원등록()`)
    // 입력
    let name = document.querySelector('.name').value;
    let birth = document.querySelector('.birth').value;

    // 처리
    let info = {
        사원번호 : eno,
        사원명 : name,
        생년월일 : birth
    };

    사원목록.push(info);

    eno++; // 사원 등록 성공 시 eno(사원번호) 1씩 증가

    console.log(사원목록);

    // 출력
    사원전체출력();

};

// 사원 정보 전체 출력 함수
function 사원전체출력(){
    // 어디에
    let tbody = document.querySelector('.사원테이블');

    // 무엇을
    let html = ``;
    
        // 사원 목록 내 모든 사원 정보를 HTML로 구성
    for(let index = 0; index <= 사원목록.length -1 ; index++){
        let info = 사원목록[index];
        html +=`<tr>
                    <td>${info.사원번호}</td>
                    <td>${info.사원명}</td>
                    <td>${info.생년월일}</td>
                    <td>
                        <button onclick="평가등록출력(${info.사원번호})" type="button">평가등록</button>
                        <button onclick="평가출력()" type="button">평가결과</button>
                    </td>
                </tr>`
    };
    // 출력
    tbody.innerHTML = html;
};

// 평가 등록 구역 출력 함수
function 평가등록출력(클릭된사원번호){
    console.log(클릭된사원번호) // 매개변수

    // 클릭된 사원번호를 이용한 사원정보 찾기
    let 검색사원 = null;
    for(let index =0; index <= 사원목록.length -1 ; index++){
        let info = 사원목록[index];            // index 번째 사원 호출
        if(info.사원번호 == 클릭된사원번호){    // index 번째의 사원번호 == 클릭된 사원번호
            검색사원 = info;               // for문 박에서 선언한 검색사원 변수에 대입 
            break;  // 만일 찾았으면 for문 종료
        };
    };
    if(검색사원 == null){
        alert('사원정보가 없습니다.');
        return;
    }

    // 어디에
    let div = document.querySelector('.평가입력구역');

    // 무엇을
    let html = `<h3>사원 평가 등록</h3>
                <form>
                    <h2> 평가 사원 : ${검색사원.사원명} </h2>

                    평가년도 : <input class="년도" type="text"/>    <br/>
                    상반기 평가 : <input class="상반기" type="text"/>  <br/>
                    하반기 평가 : <input class="하반기"type="text"/>  

                    <button  onclick="평가등록()" type="button">평가 등록</button>
                </form>`;

    // 출력
    div.innerHTML = html

    평가출력()
};

// 평가 등록 함수
function 평가등록(){
    let year = document.querySelector('.년도').value;
    let first = document.querySelector('.상반기').value;
    let second = document.querySelector('.하반기').value;

    console.log(year)

    let info ={

        no : eno,
        평가년도 : year,
        상반기 : first,
        하반기 : second
    };

    평가목록.push(info);

    console.log(평가목록);

    평가출력();
};


// 사원 별 평가 출력 함수
function 평가출력(){
    let tbody = document.querySelector('.점수테이블')

    let html = ``;

    for(let index = 0; index <= 평가목록.length -1 ; index++){
        let info = 평가목록[index];
        html += `<tr>
                    <td>${info.사원번호}</td>
                    <td>${info.평가년도}</td>
                    <td>${info.상반기}</td>
                    <td>${info.상반기}</td>
                </tr>`
    };

    tbody.innerHTML = html

};