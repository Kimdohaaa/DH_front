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


let writeArr = [
    {no : 1, title : '얍' , content : '얍얍'},
    {no : 2, title : '얍' , content : '얍얍'},
    {no : 3, title : '얍' , content : '얍얍'}
];
let wno = 4;
/*
// 게시물 입력함수 
function writeInF(){
    let wTitle = document.querySelector('.title').value;
    let wContent = document.querySelector('.content').value;
    // 로그인 성공 시  작성 버튼 나오게
    let writeId={
        no : wno,
        title : wTitle,
        content : wContent
    };

    writeArr.push(writeId);
    wno++;
    postInF();
    
}
*/
function writeOutF(){
    
    let content = document.querySelector('#page');

    let html = ``;
        html += `<div>
                    <h3>게시물 작성</h3>
                    <input class="title" type="text" placeholder="제목입력"/>
                    </div>
                    <textarea class="content">
                    </textarea>
                </div>
                <button onclick="postInF()" class="postBtn">등록</button>`
    
    content.innerHTML = html ;
    
    return;

}



// 게시물 샘플
let postArr =[
    {no : 1, title : '1번', content : "111"},
    {no : 2, title : '2번', content : "222"},
    {no : 3, title : '3번', content : "333"}
];
let pno = 4;

function postInF(){
    let title = document.querySelector('.title').value;
    let content = document.querySelector('.content').value;

    let post={
        no : pno,
        title : title,
        content : content
    };

    postArr.push(post);
    pno++;

    postListF();

    return;
    
};
postListF();
function postListF(){
    let tbody = document.querySelector('.list');

    let html = ``;
     
    for(let i = 0; i < postArr.length ; i++){
        let info = postArr[i]
        html += `<tbody>
                    <tr><td>${info.no}</td><td><a onclick= "writeF(${i})">${info.title}</a></td>
                 
                    </tr>
                </tbody>` 
                console.log(info.no)
            };
    tbody.innerHTML = html;
};

// 게시물 출력
function writeF(j){

    let write = document.querySelector('#write');
    let html=``
            let info = postArr[j]
                    html +=`
                            <table class="det" border ="1">
                                <h3> ${info.no}번 게시물</h3>
                                <thead>
                                    <tr><th>${info.title}</th></tr>
                                </thead>
                                <tbody>
                                    <tr><td>${info.content}</td></tr>
                                </tbody>
                            </table>`
    write.innerHTML = html;

}    

