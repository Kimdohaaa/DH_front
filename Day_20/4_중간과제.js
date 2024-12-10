// 회사정보
let compArr = [
    {no : 1 , name : 'A', adress: '가산123' },
    {no : 2 , name : 'B', adress: '가산123' },
    {no : 3 , name : 'C', adress: '가산123' }
]
let cno = 4;

// 요금제정보
let typeArr =[
    {no : 1, name :'Basic', vol:'5TB', pric: '10000원', pers: '10명' },
    {no : 2, name :'Standard', vol:'10TB', pric: '15000원', pers: '20명' },
    {no : 3, name :'Premium', vol:'30TB', pric: '20000원', pers: '30명' }
];
// 회원정보syntaxerror: Unexpected identifier 'Object'
let userArr = [
    {no : 1 , id : 'aa',  pw : 1234 , comP : 'A', departM : 'A', num : '1234-1234'},
    {no : 2 , id : 'aa',  pw : 1234 , comP : 'A', departM : 'A', num : '1234-1234'},
    {no : 3 , id : 'aa',  pw : 1234 , comP : 'A', departM : 'A', num : '1234-1234'}
];
let uno = 4;

function joinF(){
    let joinId = document.querySelector('.id').value;
    let joinPw = document.querySelector('.pw').value;
    let joinComp = document.querySelector('.comp').value;
    let joinDM = document.querySelector('.departM').value;
    let joinNum = document.querySelector('.num').value;

    let join = {
        no : uno,
        id : joinId,
        pw : joinPw,
        comP : joinComp,
        departM : joinDM,
        num : joinNum
    };

    userArr.push(join);
    uno++;

    console.log(userArr)
    alert('회원가입 성공');

    document.querySelector('.id').value = ``;
    document.querySelector('.pw').value = ``;
    document.querySelector('.comp').value = ``;
    document.querySelector('.departM').value = ``;
    document.querySelector('.num').value = ``;

    return;
};



// 로그인 상태
let logIn = false;

// 로그인 F
function logInF(){
    let logId = document.querySelector('.logId').value;
    let logPw = document.querySelector('.logPw').value;
    
    for(let i = 0; i < userArr.length ; i++){
        let info = userArr[i];
        if(logId == info.id && logPw == info.pw){
            alert('로그인 성공');
            logIn = true;
            if(logIn == true){
                let choice = document.querySelector('#choice');
                let html = ``;

                    html +=	`
                            <h3>요금제 선택</h3>
                            <p>구독할 요금제 명을 클릭해주세요.</p>
                                <table border="1" style="border-collapse: collapse; width: 500px;">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th><a onclick="OutF('${typeArr[0].name}',${typeArr[0].no})"> Basic</a></th>
                                            <th><a onclick="OutF('${typeArr[1].name}',${typeArr[1].no})"> Standard</a></th>
                                            <th><a onclick="OutF('${typeArr[2].name}',${typeArr[2].no})"> Premiumddd</a></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>스트리지용량</td>
                                            <td>5TB</td>
                                            <td>10TB</td>
                                            <td>15TB</td>
                                        </tr>
                                        <tr>
                                            <td>사용가능인원</td>
                                            <td>10명</td>
                                            <td>20명</td>
                                            <td>30명</td>
                                        </tr>
                                        <tr>
                                            <td>월금액</td>
                                            <td>10,000원</td>
                                            <td>30,000원</td>
                                            <td>50,000원</td>
                                        </tr>
                                    </tbody>
                                </table>`
                        
                choice.innerHTML = html;
                
            }
            break;                          
        }
    };

    document.querySelector('.logId').value =``;
    document.querySelector('.logPw').value =``;
    
    if(logIn == false) {
        alert('로그인실패')
    }

    return;

};


//  출력함수
function OutF(index, i){
    let Out = document.querySelector('#Out');
    let html =``;
        html += `<div>
                    <p><b>${index}</b>요금제를 선택하셨습니다.</p>
                    <p>구독 종료일을 입력해주세요. <input id="months" type="date" placeholder="구독개월"></p>
                    <p><b>${index}</b> 요금제 구독을 위해
                    아이디와 비밀번호를 입력해주세요.</p>
                    <input class="buyId" placeholder="아이디"/>
                    <input class="buyPw" type="password"placeholder="비밀번호"/>

                    <button onclick="buyF('${index}')" onclick="deleteF()"> 구독하기 </button>
                </div>`
                console.log(i);
       
    
    Out.innerHTML = html;
};

// 구독 함수
function buyF(i){
    let buyId = document.querySelector('.buyId').value;
    let buyPw = document.querySelector('.buyPw').value;
    let buyM = document.querySelector('#months').value;
    let buyUser = {
        buyId : buyId,
        buyPw : buyPw
    };

    for(let j = 0; j < userArr.length; j++){
        let info = userArr[j];
        if(buyUser.buyId == info.id && buyUser.buyPw == info.pw){
            info.type = i;
            console.log(userArr);
            console.log(i);

            let today = new Date();
            let year = today.getFullYear();
            let month = today.getMonth()+1;
            let date = today.getDate();

            let start = `${year}-${month}-${date}`
            console.log(start)
            info.startDate = start;


            getDiff(start, buyM );
            
            alert(`구독이 완료되었습니다. \n구독시작일 : ${start}  \n잔여기간 : ${edD} 일  `);

            deleteF(`${info.id}`, `${info.type}`, `${info.startDate}`, edD );

            break;
        };
    };
    
    return;
}

// 구독취소 함수
function deleteF(id, type, d ,ed){
    let myPage = document.querySelector('#mypage');

    let html = ``
        html +=`<h3> ${id} 님의 구독현황 <h3>
                <p> ${id} 님은 현재 
                ${type} 요금제를 ${d} 부터 구독 중 입니다.</p>
                <p>구독 종료까지 ${ed} 일 남았습니다.</p>
                `;
    
    myPage.innerHTML = html;

    return;
};


// 잔여 기간 함수
function getDiff(td , ed){
    const toDay =  new Date(td);
    endDay = new Date(ed);

    diffD = Math.floor((endDay.getTime() - toDay.getTime()) / (1000 * 60 * 60 * 24));
    edD = diffD;
}
