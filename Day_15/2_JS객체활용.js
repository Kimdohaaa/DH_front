// 영화진흥위원회 오픈 API

// 객체 정보를 가지는 '영화정보' 변수 선언
let 영화정보 ={
    "boxOfficeResult": {
      "boxofficeType": "주말 박스오피스",
      "showRange": "20111230~20120101",
      "yearWeekTime": "201152",
      "weeklyBoxOfficeList": [
        {
          "rnum": "1",
          "rank": "1",
          "rankInten": "0",
          "rankOldAndNew": "OLD",
          "movieCd": "20112207",
          "movieNm": "미션임파서블:고스트프로토콜",
          "openDt": "2011-12-15",
          "salesAmt": "7840509500",
          "salesShare": "35.8",
          "salesInten": "-1706758500",
          "salesChange": "-17.9",
          "salesAcc": "40541108500",
          "audiCnt": "1007683",
          "audiInten": "-234848",
          "audiChange": "-18.9",
          "audiAcc": "5328435",
          "scrnCnt": "697",
          "showCnt": "9677"
        },
        {
          "rnum": "2",
          "rank": "2",
          "rankInten": "1",
          "rankOldAndNew": "OLD",
          "movieCd": "20112621",
          "movieNm": "셜록홈즈 : 그림자 게임",
          "openDt": "2011-12-21",
          "salesAmt": "3436042500",
          "salesShare": "15.7",
          "salesInten": "-576328500",
          "salesChange": "-14.4",
          "salesAcc": "10678327500",
          "audiCnt": "453533",
          "audiInten": "-83422",
          "audiChange": "-15.5",
          "audiAcc": "1442861",
          "scrnCnt": "363",
          "showCnt": "5589"
        },
        {
          "rnum": "3",
          "rank": "3",
          "rankInten": "-1",
          "rankOldAndNew": "OLD",
          "movieCd": "20110295",
          "movieNm": "마이 웨이",
          "openDt": "2011-12-21",
          "salesAmt": "3195903000",
          "salesShare": "14.6",
          "salesInten": "-2754931500",
          "salesChange": "-46.3",
          "salesAcc": "13002897500",
          "audiCnt": "417395",
          "audiInten": "-369911",
          "audiChange": "-47.0",
          "audiAcc": "1739543",
          "scrnCnt": "605",
          "showCnt": "7318"
        },
        {
          "rnum": "4",
          "rank": "4",
          "rankInten": "0",
          "rankOldAndNew": "OLD",
          "movieCd": "20113260",
          "movieNm": "퍼펙트 게임",
          "openDt": "2011-12-21",
          "salesAmt": "1816656000",
          "salesShare": "8.3",
          "salesInten": "-829977000",
          "salesChange": "-31.4",
          "salesAcc": "6640940000",
          "audiCnt": "240133",
          "audiInten": "-109651",
          "audiChange": "-31.3",
          "audiAcc": "895416",
          "scrnCnt": "396",
          "showCnt": "4232"
        },
        {
          "rnum": "5",
          "rank": "5",
          "rankInten": "11",
          "rankOldAndNew": "OLD",
          "movieCd": "20113271",
          "movieNm": "프렌즈: 몬스터섬의비밀 ",
          "openDt": "2011-12-29",
          "salesAmt": "1255253000",
          "salesShare": "5.7",
          "salesInten": "1244095000",
          "salesChange": "11149.8",
          "salesAcc": "1523037000",
          "audiCnt": "165958",
          "audiInten": "164571",
          "audiChange": "11865.2",
          "audiAcc": "202909",
          "scrnCnt": "297",
          "showCnt": "2379"
        },
        {
          "rnum": "6",
          "rank": "6",
          "rankInten": "-1",
          "rankOldAndNew": "OLD",
          "movieCd": "20113381",
          "movieNm": "오싹한 연애",
          "openDt": "2011-12-01",
          "salesAmt": "1119236000",
          "salesShare": "5.1",
          "salesInten": "-288539500",
          "salesChange": "-20.5",
          "salesAcc": "20634684500",
          "audiCnt": "150185",
          "audiInten": "-44816",
          "audiChange": "-23.0",
          "audiAcc": "2823060",
          "scrnCnt": "254",
          "showCnt": "2638"
        },
        {
          "rnum": "7",
          "rank": "7",
          "rankInten": "0",
          "rankOldAndNew": "NEW",
          "movieCd": "19940256",
          "movieNm": "라이온 킹",
          "openDt": "1994-07-02",
          "salesAmt": "1503865000",
          "salesShare": "6.9",
          "salesInten": "1503865000",
          "salesChange": "100.0",
          "salesAcc": "1841625000",
          "audiCnt": "139102",
          "audiInten": "139102",
          "audiChange": "100.0",
          "audiAcc": "171285",
          "scrnCnt": "246",
          "showCnt": "2661"
        },
        {
          "rnum": "8",
          "rank": "8",
          "rankInten": "-1",
          "rankOldAndNew": "OLD",
          "movieCd": "20112709",
          "movieNm": "극장판 포켓몬스터 베스트 위시「비크티니와 백의 영웅 레시라무」",
          "openDt": "2011-12-22",
          "salesAmt": "508658000",
          "salesShare": "2.3",
          "salesInten": "-379868500",
          "salesChange": "-42.8",
          "salesAcc": "1897120000",
          "audiCnt": "75654",
          "audiInten": "-57269",
          "audiChange": "-43.1",
          "audiAcc": "285959",
          "scrnCnt": "186",
          "showCnt": "999"
        },
        {
          "rnum": "9",
          "rank": "9",
          "rankInten": "-3",
          "rankOldAndNew": "OLD",
          "movieCd": "20113311",
          "movieNm": "앨빈과 슈퍼밴드3",
          "openDt": "2011-12-15",
          "salesAmt": "407125000",
          "salesShare": "1.9",
          "salesInten": "-697653500",
          "salesChange": "-63.1",
          "salesAcc": "3416675000",
          "audiCnt": "60990",
          "audiInten": "-104962",
          "audiChange": "-63.2",
          "audiAcc": "516289",
          "scrnCnt": "169",
          "showCnt": "968"
        },
        {
          "rnum": "10",
          "rank": "10",
          "rankInten": "-2",
          "rankOldAndNew": "OLD",
          "movieCd": "20112708",
          "movieNm": "극장판 포켓몬스터 베스트 위시 「비크티니와 흑의 영웅 제크로무」",
          "openDt": "2011-12-22",
          "salesAmt": "390720500",
          "salesShare": "1.8",
          "salesInten": "-396267500",
          "salesChange": "-50.4",
          "salesAcc": "1595695000",
          "audiCnt": "56991",
          "audiInten": "-57966",
          "audiChange": "-50.4",
          "audiAcc": "235070",
          "scrnCnt": "175",
          "showCnt": "832"
        }
      ]
    }
  }

// 객체 정보 확인
console.log(영화정보);
console.log(영화정보.boxOfficeResult);  
/*
 자료의 결과 정보 
 - boxOfficeType 
 - showRange 
 - yearWeekTime 
 - weeklyBoxOfficeList : 주간 박스 오피스의 영화 정보 목록
 */


console.log(영화정보.boxOfficeResult.weeklyBoxOfficeList);  // 배열
console.log(영화정보.boxOfficeResult.weeklyBoxOfficeList[1].rank);
// 주간 박스 오피스의 2번째 영화 정보의 순위 출력
console.log(영화정보.boxOfficeResult.weeklyBoxOfficeList[1].movieNm);
// 주간 박스 오피스의 2번째 영화 정보의 이름 출력



// 객체정보(영화정보) HTML에 출력

// 어디에 : document.querySeletor()
let tbody = document.querySelector('table > tbody');
// 무엇을 : 영화정보 객체(순위/ 영화이름 / 개봉일 / 매출)
let html = ``;
  for(let index = 0 ; index <= 영화정보.boxOfficeResult.weeklyBoxOfficeList.length -1; index++){
    // index는 0부터 weeklyBoxOfficeList(주간박스오피스)의 마지막 인덱스까지 1씩 증가
    
    let info = 영화정보.boxOfficeResult.weeklyBoxOfficeList[index];
    // index 번째의 영화 호출
    console.log(info);


    html += `<tr>
                <td>${info.rank}</td>
                <td>${info.movieNm}</td>
                <td>${info.openDt}</td>
                <td>${info.audiAcc}</td>
                <td>${info.salesAcc}</td>
            </tr>`
  };

// 출력 : .innerHTML
tbody.innerHTML = html; 