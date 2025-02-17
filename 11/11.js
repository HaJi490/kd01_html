//확인 버튼을 누르면 업/다운/굿잡
document.addEventListener('DOMContentLoaded', ()=>{
    const img = document.querySelector('img');
    const num = document.querySelector('input');
    const bt = document.querySelector('button');
    let n = Math.floor(Math.random() * 100) + 1 ;
    console.log(n); 
    bt.addEventListener('click', ()=>{
        if(num.value > n){     //.value넣기!
            img.setAttribute("src", `../img/img/down.png`);
        } else if(num.value < n){
            img.setAttribute("src", `../img/img/up.png`);
        } else {
            img.setAttribute("src", `../img/img/good.png`);
            bt.textContent = '다시하기';
            remove
            
        }
    })
})
//다시하기 > 입력창을 없애고 랜덤수 새로 생성
//input에 placeholder를 하면 힌트나옴