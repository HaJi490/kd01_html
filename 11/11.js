//DOM이 생성이 된 후
document.addEventListener('DOMContentLoaded', ()=>{
    //제어할 요소 가져오기
    const img = document.querySelector('img');
    const num = document.querySelector('input');
    const bt = document.querySelector('button');

    //랜덤 게임수
    let n;
    //랜덤수가 생성되었는지 확인
    let isFlag = false; //번호생성되면 true
    // let n = Math.floor(Math.random() * 100) + 1 ;
    
    //확인 버튼이 눌러졌을때
    bt.addEventListener('click', (e)=>{  //변수(bt)지정하기. document는 파일전체
        e.preventDefault(); //form이 자기자신에서 도는것을 막아줌

        //랜덤수를 생성할지 결정
        if(!isFlag){
            n = Math.floor(Math.random() * 100) + 1 ; //1~100까지
            img.setAttribute("src", `../img/img/what.png`);
            isFlag = true;
            num.value= '';  //reset됐을 때 입력창비우기
            num.style.display = 'inline';
            num.focus();
            bt.textContent = '확인';
            return ; //함수에서 빠질때
        }
        console.log('n=', n, 'isflag =', isFlag); 

        //숫자비교
        if(parseInt(num.value) > n){     //.value넣기!
            img.setAttribute("src", `../img/img/down.png`);
        } else if(parseInt(num.value) < n){
            img.setAttribute("src", `../img/img/up.png`);
        } else {
            img.setAttribute("src", `../img/img/good.png`);
            bt.textContent = '다시하기';
            num.style.display = 'none';
            isFlag = false;
        }
    });
})
//다시하기 > 입력창을 없애고 랜덤수 새로 생성
//input에 placeholder를 하면 힌트나옴