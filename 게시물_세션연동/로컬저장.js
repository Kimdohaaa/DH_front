function localF(){
    let allArr = localStorage.setItem('allArr');

    if( allArr == null){
        allArr = [];
    }else{
        allArr = JSON.parse(allArr);
    }
    
    
        console.log(allArr);

    return allArr;
}