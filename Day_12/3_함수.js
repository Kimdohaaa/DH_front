// 함수 선언
// 매개변수 X / 반환값 X
function func1(){console.log('func1 execute');};

// 매개변수 O / 반환값 X
function func2(x, y){console.log(`func2 execute ${x+y}`);};

// 매개변수 O / 반환값 O
function func3(x, y){
    console.log(`func3 execute ${x+y}`);
    let result = x + y;
    
    return result;    
};

// 매개변수 X / 반환값 O
function func4(){
    console.log(`func4 execute`);
    return 10;
};

// 함수 호출
// 매개변수 X / 반환값 X
func1();

// 매개변수(1,2) / 반환값 X
func2(1,2);

// 매개변수(1,2) / 반환값(3) 
// => 반환값 사용 O -> 변수에 저장 / 반환값 사용 X -> 변수에 저장 X
func3(1,2);

let add = func3(1,2);       // 반환값을 변수 add에 저장

// 매개변수 X / 반환값 O
func4();

let returnVal = func4();    // 반환값을 변수 returnVal에 저장

console.log(returnVal);     // func4의 return값 출력



