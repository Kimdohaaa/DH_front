let carArray = [ '' , '' ,'' ,'' ,'' ,'' ,'' ,'' ,'' ,'' ,'' ,'' ,'' ,'' ,'' ,'' ,'' ,'' ,'' ,'']
/*
let inDay
let nowDate = new Date();
let nowHours = nowDate.getHours();
let nowMinutes = nowDate.getMinutes();
let nowSeconds = nowDate.getSeconds();
*/
function inFunc( ){ 
    // console.log('입차함수 실행');
 
    let Number = document.querySelector('.carNumber').value;
    let carNum = document.querySelector('.carNum').value;
    // Uncaught ReferenceError: what is not defined => 변수명 바꿔보기
    //console.log(Number);
     //console.log(What);
    let i = parseInt(carNum);
    console.log(i);
    let nowDate = new Date();
    let nowHours = nowDate.getHours();
    let nowMinutes = nowDate.getMinutes();
    let nowSeconds = nowDate.getSeconds();
  
    let inDay = (3600 * nowHours) + (60 * nowMinutes) + nowSeconds;
    
    inDay = `${nowHours}:${nowMinutes}:${nowSeconds}`;
    console.log(inDay)
    alert(`${inDay},${Number}, ${carNum} 주차완료`)
    

    let board = carArray[i-1]
    let carBoard = board.split(',')

    if( carBoard[1] == i){ alert('입차불가'); }
    else{ carArray[i-1] = `${Number},${carNum},${inDay}` 
 
    }
    
       
    console.log(carArray);

    let html =''
    for( j = 0; j < 20 ; j++){
        if( (j+1)%5 == 1 ){ html += `<tr>` }
        if( i == j+1 ){ html += `<td>${Number}</td>` }
        else{ html += `<td>${j+1}</td>` }
        if( (j+1)%5 == 0 ){ html += `</tr>` }

    } // for end
    document.querySelector('.carPosition').innerHTML = html
    //document.querySelector(inDay).innerHTML = html

    //  carArray.push(board);
     
 };
 

 function outFunc( ){
    let carNum = document.querySelector('.outNum').value;
    let i = carArray.indexOf( carNum );
    console.log(i);

    parking()
   // let board = carArray() 
}






function parking( ){
 
    let nowDate = new Date();
    let nowHours = nowDate.getHours();
    let nowMinutes = nowDate.getMinutes();
    let nowSeconds = nowDate.getSeconds();

    
    let carNum = document.querySelector('.carNum').value;
    let Number = document.querySelector('.carNumber').value;
    let i = parseInt(carNum);
    console.log(i);


  
    let inDay = (3600 * nowHours) + (60 * nowMinutes) + nowSeconds;
    let board = carArray[i];
    let inCar = board.split(",");
    let price 
    price = (inDay - inCar[i])*100;
    console.log( price );

    alert( `차량번호 :${Number} 주차요금 : ${price} 원입니다.`);

}



// function 출력함수(){

//    let tbody = document.querytSelector( 'table > tbody' )
//     let html = '';
//     //for( let index = 0 ; index <= carArray.length - 1 ; index++ ){
//         let hicar = carArray[index];
//         //if(carArray.length -1 != index){ alert('입차 성공')}
//         //if else(carArray.length -1 === index){ alert('입차 불가') };
//         html += `<tr> 
//                     <td>${index}</td>
//                 </tr>`
//     };
//     parking();
// };