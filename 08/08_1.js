document.addEventListener('DOMContentLoaded', () =>{    //.DOMContentLoaded : 돔이 완성되고나면
    //button요소 모두 가져오기
    //1개인 경우도 노드리스트
    const bts = document.querySelectorAll('button') ;   //.querySelector : 한개만 잡을때, .querySelectorAll : 여러개 잡을때(NodeList:배열)
    console.log(bts)
    // bts[0].addEventListener('click', ()=>{      //.querySelectorAll은 1개여도 배열로 처리되니까 []배열로 선택
    //     console.log('bt1');
    // });


    //노드리스트 순회
    for(let bt of bts){
        bt.addEventListener('click', () => {
            //속성변경
            bt.setAttribute("id", bt.textContent);           
            console.log(bt.getAttribute);  //.innerHTML 태그도나옴, .textContent는 넣은 내용만 나옴
        })
    }
});




