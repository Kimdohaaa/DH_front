function func1(){
    console.log('func1 실행')
};  // html 페이지에서 onclick="func1"로 지정된 마크업을 누르면 실행됨


// 등록 버튼 클릭시 input에 입력된 value 값을 배열nameArr에 저장하는 함수
let nameArr=[]; // input에 입력받은 데이터를 유지하기 위해 전역변수 선언
function 등록함수(){
    let input = document.querySelector('.nameInput'); // html input 마크업(객체)을 js로 호출
    let data = input.value;                           // input(객체)에 입력된 value 속성 호출
    console.log(data);                                // console.log로 console에 출력  
    nameArr.push(data); // 입력받은 값을 전역변수에 저장
    출력함수();          // 등록이 됐을 때(nameArr.push) 출력함수()실행 
}; // 페이지 내 input에 "유재석" 외 다른 값 입력 후 등록을 누를 시 console 값도 바뀜


/* 배열 nameArr의 변화(nameArr에 새로운 값이 등록되었을 때)가 있을 때 
   html(화면)을 렌더링(새로고침)하는 함수 */
function 출력함수(){
    let html =  ``; // 출력할 html을 구성하는 변수 선언
    for(let index = 0; index <= nameArr.length -1; index++ ){
        //console.log(nameArr[index]);
        html += `<div>${nameArr[index]}</div>` // 출력할 html변수에 배열 내 데이터 누적
    };
    console.log(html);
    document.querySelector('.printBox').innerHTML = html;   // inner에 html 대입
    // .innerHTMl : 시작 마크업과 끝 마크업의 사이 (<마크업>inner</마크업>)
    // for 문 종료 시 입력 값을 html .printBox에 inner에 대입
};
