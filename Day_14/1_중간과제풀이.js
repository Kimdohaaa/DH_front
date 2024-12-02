let 주차정보목록 = ["222어2222 , 10:15:30, 14:10:20" ,"" ,"" ,"" ,"" 
                    , "" , "" , "" , "" , ""
                    , "" , "" , "" , "" , "" 
                    , "" , "" , "" , "" , "" ];


// 입차함수
function 입차함수(){
    // 1. 입력 : HTML에서 입력받은 값(차량번호 / 주차위치)을 JS로 가져옴
    let carNum = document.querySelector('.inCarNum').value;
    let carSite = document.querySelector('.inCarSite').value;

    // 2-1. 처리  : 중복 확인(유효성 검사)
        // 해당 칸이 빈 칸인지 검사
        // 위치가 유효한지 검사(입력 위치가 인덱스 내인지)
        // 차량번호가 인덱스 내에 있는지
    if(주차정보목록[carSite-1] != ""){
        console.log('주차 불가')
        return;     // 함수 종료(함수종료로 인해 주차시간 / 주차위치 저장 코드 실행 X)
    };
        // 입차시간 저장
        let inTime = new Date();

        let Hours = inTime.getHours();
        let Minutes = inTime.getMinutes();
        let Seconds = inTime.getSeconds();
    
        let carTime = `${Hours} : ${Minutes} : ${Seconds}`;
    
     // 2-2. 처리 : 두 정보를 하나의 문자열(CSV)로 구성해 주차정보목록(배열)에 저장   
         // 주차 위치 배열에 저장
        주차정보목록[carSite -1] = `${carNum}-${carTime}`;    // 인덱스는 0부터 시작하기 때문에 -1
        console.log(주차정보목록);
        
    // 3. 출력 : 처리 결과 내용을 사용자에게 출력
    alert(`주차완료 : ${주차정보목록[carSite -1]}`);
};


// 출차함수
function 출차함수(){
    let search = false;
    // 1. 입력 : HTML에서 입력받은 값(차량번호 / 주차위치)을 JS로 가져옴
    let outCarNum = document.querySelector('.outCarNum').value;
    console.log(`outCarNum${outCarNum}`);
    // 2. 처리 : 입력받은 차량번호의 입차시간과 출차시간을 초당으로 환산하여 요금 계산
        // 현재 차량번호가 배열 내 존재하는 지 검사
    for(let index = 0 ; index <= 주차정보목록.length -1; index++){
            let check = 주차정보목록[index];
            if(check == ""){continue};  // continue : 가장 가까운 반복문으로 이동
                                       // -> 빈좌석이면 차량번호 확인이 필요없기 때문
                let car = check.split(",");    
                let parkingNum = car[0];
                let parkingTime = car[1];
        
        
        if(parkingNum == 주차정보목록[index]){       // 출차 차량 번호 == 입력된 차량 번호 라면
            search = true;

        
            // 요금계산
            let outH = new Date().getHours();
            let outM = new Date().getMinutes();
            let outS = new Date().getSeconds();

            let outTime = (outH * 3600 ) + (outM * 60) + (outS);
            
            
            let inH = Number(parkingTime.split(":")[0]);
            let inM = Number(parkingTime.split(":")[1]);
            let inS = Number(parkingTime.split(":")[2]);

            let inTime = (inH * 3600 ) + (inM*60) + (inS);

            let parkingPic = inTime - outTime;

            let price = parkingPic * 100;
            
            // 배열 내 차량 정보 삭제
            주차정보목록[index] = "";
            console.log(`출차완료 : 위치 ${index+1} 사용금액 ${price}`);
            break;                      // 원하는 데이터 발견 시 반복문 종료
            // 요금 계산
        };
    };

    if(search == false){
        alert('주차된 차량이 존재하지 않습니다.');
    };

    // 3. 출력 : 요금 / 차량위치 출력
};