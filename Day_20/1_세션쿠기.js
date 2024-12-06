console.log(sessionStorage);
console.log(localStorage);


// 세션과 쿠키에 데이터 삽입
sessionStorage.setItem('name', '유재석'); // 키 : name  값 : 유재석
localStorage.setItem('age', '40');


// 세션과 쿠키 값 호출
let reTurn1 = sessionStorage.getItem('name');
console.log(reTurn1); // 키(name)의 값(유재석) 출력 

let reTurn2 = localStorage.getItem('age');
console.log(reTurn2); // 키(age)의 값(40) 출력

let reTurn3 = sessionStorage.getItem('phone');
console.log(reTurn3); // 존재하지 않는 세션이기 때문에 null 출력


// 세션과 쿠키에 객체 대입 -> JSON 객체 활용
console.log(JSON.stringify({"name" : "유재석"}));   // 문자 출력
    // 객체 -> 문자로 형변환
console.log(JSON.parse('{"name" : "유재석"}'));     // 객체 출력
    // 문자 -> 객체로 형변환

sessionStorage.setItem('할일',{"할일내용" : "밥먹기", 할일상태 : true}); // 저장불가 (객체이기 때문)
sessionStorage.setItem('할일',JSON.stringify({할일내용 : '밥먹기', 할일상태 : true})); // JSON사용해 문자로 형변환

let reTurn4 = sessionStorage.getItem('할일');   // 문자 
console.log(reTurn4);   // 문자 출력
console.log(JSON.parse(reTurn4));   // 객체출력




