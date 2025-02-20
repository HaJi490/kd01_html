const fun2 = () => {
    console.log("명령11");
}

const fun1 = () => {
    console.log("명령1");
    setTimeout(()=>{console.log("명령11")
        setTimeout(()=>{console.log("명령2")
            setTimeout(()=>{console.log("명령3")},100) ; //안에 넣어주면 시간차를 줘도 순서대로 찍힘
        },200) ;
    },500) ;  //setTimeout : 설정한 숫자뒤에 실행(1000 = 1초) > 먼저 적혀있어도 나중에 콘솔에 찍힘
    
    
}

document.addEventListener('DOMContentLoaded',()=>{
    fun1(); //실행될때 함수를 콜
})