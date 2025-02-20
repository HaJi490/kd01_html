let arr = [0, 0, 0, 0, 0, 0, 0, 0, 1]; //1의 위치가 폭탄위치
let isFlag = false; //진행되는 동안 리셋안되도록

const init = (cols) => { //cols받기
    //보드 숫자 쓰기
    for (let [idx, col] of cols.entries()) { //하나씩 안적어도 순서대로 숫자넣기 가능
        col.innerHTML = idx + 1;
    }

    //셔플 플래그 초기화
    //isFlag = true; //나는 28열에 넣었는데 뭐가 다른가
}

//DOM이 생성된 후
document.addEventListener('DOMContentLoaded', () => {
    //제어할 요소 가져오기
    const cols = document.querySelectorAll('.col'); //배열
    const bt = document.querySelector('button');
    const msg = document.querySelector('#msg');
    //이미지 태그만들기
    const img1 = '<img src = "../img/hart/hart.png">'   //요소임
    const img2 = '<img src = "../img/hart/boom.png">'

    bt.addEventListener('click', () => {
        //배열 셔플
        arr.sort(() => Math.random() - 0.5);
        console.log(arr);
        isFlag = true;
        msg.textContent = '번호를 선택해주세요'


        for (let [idx, col] of cols.entries()) {//.entries #배열이나 오브젝트에 쓰면 key, value값 가져옴
            //col.innerHTML = '';    //(숫자x)배열을 다시 만든다 =화면이미지 없애기
            col.innerHTML = idx + 1;  //(숫자o)배열을 다시 만든다 =화면이미지 없애기  
            bt.textContent = '폭탄섞기'
            bt.style.display = 'none';
        }
    });

    //하트개수세는 변수!!!!!
    let cnt = 0;

    //보드에 클릭이벤트 발생
    for (let [idx, col] of cols.entries()) {
        col.addEventListener('click', () => {
            console.log(col.innerHTML);

            if (msg.innerHTML.includes('실패')) return; //실패시 버튼선택안되게 
            if (isFlag) {
                //선택시 하트 나옴
                if (arr[idx] == 0) {
                    col.innerHTML = img1
                    //하트개수 증가!!!!!!!!
                    cnt = cnt + 1;

                    //하트개수가 8개면 성공
                    if (cnt == 8) {
                        bt.style.display = 'block';
                        bt.textContent = '다시하기'
                        msg.textContent = '성공!'
                        isFlag = false;        //다시시작하기
                        cnt = 0;

                        //1이있는 곳에 하트넣기!!!!
                        cols[arr.indexOf(1)].innerHTML = img1   //배열에서 1을 찾아오기
                    }
                    //선택시 폭탄나옴
                } else if (arr[idx] == 1) {
                    col.innerHTML = img2
                    bt.style.display = 'block';
                    bt.textContent = '다시하기'
                    msg.textContent = '실패!'
                    isFlag = false;        //다시시작하기
                    init(cols); //*함수 내보내기

                }
            }

        });
    }

});