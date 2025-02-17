const unitChange = (s1, s2, sel1, sel2, txt1, txt2, sps) => {       //sel1, sel2가 없으면 s1,s2값이 뭔지 알수 없음 > 함수값이 크로스가 안되니까
 if(s1.value == "℃") {      //명령문이 1개일 때 {} 생략가능
        s2.value = "℉"; 
    }else{ 
        s2.value ="℃";  
    }
       
    sps[0].textContent = sel1.value;
    sps[1].textContent = sel2.value;
    txt1. value = "";
    txt2. value = "";
    txt1.focus();           //focus : 마우스로 클릭할때

    console.log("unitChange", s1.value, s2.value)
}

// 매개변수 안바꾸고 받는 법
// const unitChange2 = (s1, s2 ,txt1, txt2, sps) => {
//     let s1Id = s1.getAttribute('id') ;
//     console.log("s1Id" ,  s1Id)
//     if (s1Id != 'sel1') {        //!= 같지 않을때
//       let stp = s1 ;
//       s1 = s2;
//       s2 = stp;
//     }

// DOM 생성 후
document.addEventListener('DOMContentLoaded',() => {
    // DOM요소 가져오기
    //select box(id로 잡는법)
    const sel1 = document.getElementById('sel1');   //1. getElementByID > 'id'
    const sel2 = document.querySelector('#sel2');   //2. querySelector > '#id'

    //input box
    // const txt1 = document.querySelector('input');
    // const txt2 = document.querySelector('input[readonly]');  //querySelector > '태그[속성]' 속성을 이용하여 잡기
    const txt1 = document.querySelector('.unit input');
    const txt2 = document.querySelector('.unit input[readonly]');

    //span - node list
    const sps = document.querySelectorAll('span');      //배열로 찾으면 DOM이 바뀌면 지정이 안되서 유지가 어려움

    
    // console.log(sel1. value); //안의 내용을 가지고 올때 .value
    // console.log(sel2. value);
    // console.log(txt1. value);
    // console.log(txt2. value);
    // console.log(sps[0]. textContent);
    // console.log(sps[1]. innerHTML);
    


    // 첫번째 select 값이 변경되었을 때
    sel1.addEventListener('change',() =>{
        console.log("sel1", sel1.value, sel2.value);
        unitChange(sel1, sel2, sel1, sel2, txt1, txt2, sps);
    });

    // 두번째 select 값이 변경되었을 때
    sel2.addEventListener('change',() =>{
         console.log("sel2", sel2.value, sel1.value);
         unitChange(sel2, sel1, sel1, sel2, txt1, txt2, sps);
    });
    
    // sel2.addEventListener('change',() =>{        //sel1과 sel2 코드가 반복되니 위에 함수를 만들어 인자를 보내는게 효율적.
    //     console.log("sel2", sel2. value);
    //     if(sel2.value == "℃")
    //         sel1.value = "℉";
    //     else 
    //        sel1.value ="℃";
        
    //     sps[0].textContent = sel1.value;
    //     sps[1].textContent = sel2.value;
    //     txt1. value = "";
    //     txt2. value = "";

    // });

    //input 입력
    txt1.addEventListener('input', () => {      //이벤트 : change, input, keydown 차이 알기
        if (sel1.value == "℃"){      //섭씨 > 화씨
            txt2.value = ((parseFloat(txt1.value) * (9 / 5)) + 32).toFixed(4) ; //toFexed 소수점 개수
            console.log(txt1.value);
            console.log(txt2.value);
        } else {        //화씨 > 섭씨
            txt2.value = ((parseFloat(txt1.value) - 32 ) * (5 / 9)).toFixed(4) ;
            console.log(txt1.value);
            console.log(txt2.value);
        }
    })
});  

    
   