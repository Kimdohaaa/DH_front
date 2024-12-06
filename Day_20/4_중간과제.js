let joinArr =[
    {no : 1, id : 'doha', pw :1234},
    {no : 2, id : 'doha', pw :1234}
];
// 회원번호
let jno = 3;

// 회원가입F
function joinF(){
    let joinId = document.querySelector('.id').value;
    let joinPw = document.querySelector('.pw').value;

    let join = {
        no : jno,
        id : joinId,
        pw : joinPw
    };

    joinArr.push(join);
    jno++;

    console.log(joinArr)
    alert('회원가입 성공');

    document.querySelector('.id').value = ``;
    document.querySelector('.pw').value = ``;

    return;
};


// 회원 번호
let uno = ``;
// 로그인 상태
let logIn = false;

// 로그인 F
function logInF(){
    let logId = document.querySelector('.logId').value;
    let logPw = document.querySelector('.logPw').value;
    
    for(let i = 0; i < joinArr.length ; i++){1
        let info = joinArr[i];
        if(logId == info.id && logPw == info.pw){
                alert('로그인 성공');
                uno = jno;
                logIn = true;
                if(logIn == true){
                    let btnBox = document.querySelector('.btnBox');
                    let html = ``;
                    html +=`<button onclick="writeOutF()" id="write">
                            작성
                            </button>`;
                    // 로그인 성공 시 작성 버튼 생성

                    btnBox.innerHTML = html;

                    }
                    break;
            }};

    document.querySelector('.logId').value =``;
    document.querySelector('.logPw').value =``;
    
    if(logIn == false) {
        alert('로그인실패')
    }


    return;
};
