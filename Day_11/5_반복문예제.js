/*
예제 1. 아래 배열을 이용한 출력형식
    조건 : 영화 이름과 영화 평점은 같은 인덱스 사용
    영화이름 목록
        - movieName = ['히든페이스','위키드','글래디에이터2','청설']
    영화 평점 목록 , 각 영화별 평점은 10점 만점
        - movieRating = [8, 4, 7, 6]
    
    HTML 예시
    히든피겨스    ★★★★★★★★☆☆
    위키드        ★★★★☆☆☆☆☆☆
    글래디에이터2  ★★★★★★★☆☆☆
    청설          ★★★★★★☆☆☆☆☆

*/

let movieNames = [ '히든페이스' , '위키드' , '글래디에이터2' , '청설' ] 
let movieRating = [ 8 , 4 , 7 , 6 ]
let order = movieNames.length
let star = ''
let input = ''

input += `<h1> 문제1 </h1> <table>`
for( i = 0 ; i < movieNames.length  ; i++ ){
  
    input += `<tr>`;
    for( j=1 ; j<=10 ; j++){
        if( j <= Number( movieRating[i] ) ){ star += '★';}
        else{ star += '☆';}
    }  
    input += `<td>${movieNames[i]}</td> <td>${star}</td>`;
    input += `</tr>`;
    star = '' ;
}  
input += `</table>`
document.write( input );



/*
예제 2. 6개의 시트(좌석)가 존재하는 좌석 상태를 출력하시오
    조건 : 좌석은 총 6개
    조건 : 빈좌석 - blue    / 예약석 - red
    HTML 예시
    ㅁ  ㅁ
    ㅁ  ㅁ
    ㅁ  ㅁ          => 2칸씩 3줄
*/
/*
let cho = Number(prompt(`좌석을 선택하시오.`));
let seat = [1, 2, 3, 4, 5, 6];
document.write (seat);

if(seat.indexOf == cho ){
    seat.indexOf += 'red'    
}else{seat +=  `blue`};

let outHTML = `<ul> <li>${seat}</li><li>${seat}</li>
                    <li>${seat}</li><li>${seat}</li>
                    <li>${seat}</li><li>${seat}</li> </ul>`
document.write(outHTML);*/