/*
- 날짜 데이터 : let 날짜배열 = ['2024-11-26','2024-11-27']
- 항목 데이터 : let 항목배열 = ['콜라','커피']
- 금액 데이터 : let 금액배열 = ['1,000','1,200']
- 배열 선언 위치 : 전역변수로 선언
    -> 각 배열의 인덱스가 동일 하기 때문에 하나의 가계부 정보
        ex . 날짜배열[0] = '2024-11-26'
             항목배열[0] = '콜라'
             금액배열[0] = '1,000'

필요한 함수(=동작)
- [등록]버튼 클릭 시 input으로 입력받은 3개의 값을 각 배열에 저장하는 함수
- 등록 [배열push] 시 현재 배열의 원소들을 출력하는 함수
             
*/
let dateArr = [];
let listArr = [];
let priceArr = [];

// 등록함수
function infunc(){
    console.log('등록함수 실행');
    
    // 입력,저장
    let dateInput = document.querySelector('.dateInput').value;
    let listInput = document.querySelector('.listInput').value;
    let priceInput = document.querySelector('.priceInput').value;

    // 처리 : 각 배열에 입력받은 값 저장
    dateArr.push(dateInput);
    listArr.push(listInput);
    priceArr.push(priceInput);
    
    console.log(dateArr);
    console.log(listArr);
    console.log(priceArr);
    outfunc();
};

let html =``;
// 출력함수
function outfunc(){
    console.log('출력함수 실행');
    for (let index = 0 ; index <= dateArr.length -1; index++){
        html = `<tr>
                    <td>${dateArr[index]}</td>
                    <td>${listArr[index]}</td>
                    <td>${priceArr[index]}</td>
                </tr>
    
        `
    }
    WebTransportBidirectionalStream.

    

};
/*for(let index = 0; index <= dateArr.length -1 ; index++ ){
    let dateHtml += `<span>${dateArr[index]}`;
     
     document.querySelector(`.dateBox`).innerHTML = dateHtml;

     for(let index = 0; index <= listArr.length -1 ; index++ ){
         let listHtml += `${listArr[index]}`
         document.querySelector(`.listBox`).innerHTML = listHtml;
 
     };
     for(let index = 0; index <= priceArr.length -1 ; index++ ){
         let priceHtml += `${priceArr[index]}</span><br/>`
         document.querySelector(`.priceBox`).innerHTML = priceHtml;

     };
 };*/