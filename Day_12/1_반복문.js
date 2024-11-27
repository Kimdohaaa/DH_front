/*
예제 .  학생들의 점수를 출력하시오.(만점 : 100점이라고 했을 때 점수를 ● 나머지로 표기하시오.)
        - 학생의 이름 배열 : let nameArray = ['유재석','강호동','신동엽']
        - 학생의 점수 배열 : let scores = ['92','86','72']
        - 예시 
            이름        점수
            유재석  
            강호동
            신동엽
*/
/*
입력 : 없음(데이터가 이미 제공되어 있음)
저장 : 주어진 데이터 선언
처리
    1) 이름 배열 순차적으로 출력(이름 배열의 원소 순차 출력 = 배열순회) 
      -> HTML 구조 반복 O / 이름 반복 X
    2) 점수 배열 순차적으로 출력(= 배열 순회)
        - 구구단으로 생각 (이름 : 단 / 점수 : 곱)          
*/
let nameArray = ['유재석','강호동','신동엽'];
let scores = ['92','86','72'];               // 저장

let outHTML = `<div><span>이름</span></div>`;   // 이름 배열에 대입할 HTML 생성(이름은 배열 내 존재 X -> 미리 구성)

for(let index = 0; index <= nameArray.length -1; index++){ // 이름 배열의 index가 0~마지막 까지 1씩 증가
    console.log(nameArray[index]);  // 이름 배열 원소 순차 출력(= 배열 순회)
    
    outHTML += `<div><span>${nameArray[index]}`;
    
    // console.log(scores[index]);      // console.log로 점수 배열 확인
    let pointHTML = ` `;    // 점수를 도형으로 구성한 문자열을 저장하는 변수
    for(let point = 1; point <= 100; point++){ // 점수 배열의 index가 현재 index 까지 1씩 증가
        console.log(point);

        if(point <= scores[index]){pointHTML += `●`}
        else{ pointHTML += `○`};
        
        console.log(pointHTML);
    };

    outHTML += `${pointHTML}</span></div>`;
};  
document.write(outHTML);    // 출력


// let outHTMLsco = `<span><div></div></span>`;
;  