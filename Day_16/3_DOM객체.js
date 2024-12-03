// DOM 객체
console.log(document);



// 각 HTML대상을 JS의 객체로 반환
console.log(document.querySelector('title'));

console.log(document.querySelector('body'));

console.log(document.querySelector('div')); // <div> 마크업을 JS 객체 타입으로 반환 => 객체

console.log(document.querySelectorAll('div')); // <div> 마크업을 JS 객체 타입으로 모두 반환 => 객체

console.log(document.querySelector('.box2'));      

console.log(document.querySelector('#box3'));




let box222 = document;
// box222 = 객체(반환값)

let box2 = document.querySelector('.box2');
console.log(box2);
// box2 = 객체(반환값)

let box22 = document.querySelector('.box2').innerHTML;
console.log(box22);
// box22 = 리터럴/ 문자열(반환값) -> inner가 문자열이기 때문

