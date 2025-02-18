let arr = [0, 0, 0, 0, 0, 0, 0, 0, 1]; //1의 위치가 폭탄위치
let isFlag = false; //진행되는 동안 리셋안되도록

document.addEventListener('DOMContentLoaded', () => {
    const cols = document.querySelectorAll('.col');
    const bt = document.querySelector('button');
    //이미지 태그만들기
    const img1 = '<img src = "../img/hart/hart.png">'   //요소임
    const img2 = '<img src = "../img/hart/boom.png">'
    const msg = document.querySelector('#msg');

    //배열 셔플
    bt.addEventListener('click', () => {
        arr.sort(() => Math.random() - 0.5);
        console.log(arr);
        isFlag = true ;
        msg.textContent = '번호를 선택해주세요'
        

        for (let [idx, col] of cols.entries()) {
            //col.innerHTML = idx;    //배열을 다시 만든다
            col.innerHTML = idx + 1;    //화면의 이미지없애기
            bt.textContent = '폭탄섞기'
            bt.style.display = 'none';
        }
    });


    //보드 숫자 쓰기
    for (let [idx, col] of cols.entries()) { //하나씩 안적어도 순서대로 숫자넣기 가능
        col.innerHTML = idx + 1;
    }

    //보드 숫자 선택
    for (let [idx, col] of cols.entries()) {    //enties()가 뭔가
        col.addEventListener('click', () => {
            console.log(col.innerHTML);
            
        if(isFlag){  
            //선택시 이미지 나옴
            if (arr[idx] == 0) {
                col.innerHTML =img1
            } else if (arr[idx] == 1) {
                col.innerHTML = img2
                isFlag = false ;        //추가하면 폭탄나왔을때 나머지 선택안됨
                bt.style.display = 'block';
                bt.textContent = '다시하기'
                msg.textContent = '꽝'
            }
        }

        //     //하트 8개면 나머지도 하트
        //     if(arr[])
        

        });

    }


});