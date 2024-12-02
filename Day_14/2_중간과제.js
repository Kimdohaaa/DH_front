/*
[개발 과정]
1. 위 요구사항에 따른 화면 설계 / 구성
2. 위 요구사항에 따른 메모리 설계 / 구성

    이름 / 생년월일 입력
    이름 / 생년월일 출력
    => 이름 / 생년월일 배열

    각 인사별 상반기 / 하반기 점수 입력
    각 인사별 상반기 / 하반기 점수 출력
    => 상반기 / 하반기 점수 배열

3. 함수
    - 입력함수
        -> 정보 입력 함수 / 점수 입력 함수
        [입력] 버튼 눌렀을 때 매개변수(정보 / 점수) 저장
    - 등록함수 
        -> 정보 출력 함수 / 점수 출력함수
        입력함수 안에 호출해서 사용 정보 / 점수 테이블에 출력
*/
let 인사정보배열=[
    "1,김나무,987654",
    "2,김철수,976543",
    "3,힘나무,965432"

]
let 점수배열= [
    '1,5,5',
    '1,5,5',
    '3,5,5'
]

function 인사정보등록(){
let 사번1 =document.querySelector(".사번1").value;
let 이름 = document.querySelector(".이름").value;
let 생년월일 = document.querySelector(".생년월일").value;

let box =`${사번1},${이름},${생년월일}`
console.log(box)

for(let index=0;index<인사정보배열.length; index++){
   let 인사정보=인사정보배열[index].split(',')
    if(인사정보[0]==사번1){
        alert(`${인사정보[1]} 이미 등록된 사원입니다`)
        return;
    }

}

인사정보배열.push(box);
console.log(인사정보배열);


}
function 점수등록(){
    let 사번2 = document.querySelector('.사번2').value;
    let 상반기 = document.querySelector('.상반기').value;
    let 하반기 = document.querySelector('.하반기').value;
        
    let box = `${사번2},${상반기},${하반기}`
    console.log(box);

    점수배열.push(box);
    console.log(점수배열)
};

function 인사정보출력() {
    console.log('인사정보출력 호출')
    let 인사정보테이블 = document.getElementById('인사정보테이블')
    let innerHTML = '<tr><th>사번</th><th>이름</th><th>생년월일</th></tr>'
    for (let index = 0; index < 인사정보배열.length; index++) {
        innerHTML += '<tr>'
        인사정보 = 인사정보배열[index].split(',')
        사번 = 인사정보[0]
        이름 = 인사정보[1]
        생년월일 = 인사정보[2]
        //console.log(인사정보)
        innerHTML += `<td>${사번}</td><td>${이름}</td><td>${생년월일}</td>`
        innerHTML += '</tr>'
    }
    인사정보테이블.innerHTML = innerHTML;
}

function 점수출력() {
    console.log('점수출력 호출')
    let 점수테이블 = document.getElementById('점수테이블')
    let innerHTML = '<tr><th>사번</th><th>상반기</th><th>하반기</th></tr>'
    for (let index = 0; index < 점수배열.length; index++) {
        innerHTML += '<tr>'
        점수정보 = 점수배열[index].split(',')
        사번 = 점수정보[0]
        상반기 = 점수정보[1]
        하반기 = 점수정보[2]
        //console.log(인사정보)
        innerHTML += `<td>${사번}</td><td>${상반기}</td><td>${하반기}</td>`
        innerHTML += '</tr>'
    }
    점수테이블.innerHTML = innerHTML;
}
