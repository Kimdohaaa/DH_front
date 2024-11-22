if(10 > 3)console.log('1. T 10 > 3');       // true -> 출력 O
if(10 > 20)console.log('2. T 10 > 20');     // false -> 출력 X

if(10 > 20);console.log('3. T 10 > 20');    // if 문이 세미콜론으로 종료되었기 때문에 
                                            // if 문과 별개로 console.log가 출력됨
if(10 > 3){
    console.log('4. 10 > 3');
}; // if end
                                            
if(10 > 3){
    console.log('TRUE');
} else {
    console.log('FALSE');
}; // if end

if(10 > 20){
    console.log('TRUE');
} else {
    console.log('FALSE');
}; // if end

if(10 >= 20){
    console.log( 'TRUE1' );
}else if(10 >= 15){
    console.log( 'TRUE2');
}else if(10 >= 10){
    console.log( 'TRUE3' );
}else {
    console.log( 'FALSE' );
}; // if end

let people = "남";
let grd = 80;

if( people == "남" ){
    if(grd == 80){console.log( '1st men' )}
    else{console.log('men')}
} else{
    if(grd == 80){console.log( '1st women' )}
    else{console.log('1st women')}
};

                                        
                                
/*
과제
1. 변수란?
2. 상수란?
3. 배열이란?
4. 연산자 종류 정리
5. 손코딩
    1) 하나의 점수를 입력받아 변수에 저장하고 80점 이상이면 '합격' 아니면 '불합격'을
        console.log() 함수에 출력하시오.
    
    let soc = Number(prompt('점수를 입력하시오.'));
    if (soc >= 80){
    
    }
*/