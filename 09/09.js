//computer 주사위
// 1. DOM이 로드되었을 때
document.addEventListener('DOMContentLoaded', () => {
    //2. 요소 가져오기(버튼, 이미지)
    const bts = document.querySelectorAll('button');        //all로 바꾸니까 버튼선택 안됨 >> 배열이니까 for를 통해 루프를 돌려야함?
    const imgs = document.querySelectorAll('img');
    const msg = document.querySelector('#msg');
    //3. 버튼이 클릭될 경우
    for (let bt of bts) {        //반복문에 의해 6개의 EventListener가 작성된 것
        bt.addEventListener('click', () => {
            //4. computer의 숫저변경(랜덤수 생성)
            let comN = Math.floor(Math.random() * 6) + 1; //1~6까지 생성
            //이미지 속성변경
            imgs[0].setAttribute("src", `../img/img/${comN}.png`);     //백틱사용해서 숫자변경
            imgs[0].setAttribute("alt", `${comN}`);

            //5. user의 숫자변경
            let userN = parseInt(bt.textContent.slice(0, 1));       //parseInt 문자로 되어있는 숫자를 정수로 바꿈
            imgs[1].setAttribute("src", `../img/img/${userN}.png`);
            imgs[1].setAttribute("alt", `${userN}`);

            //computer와 user 숫자비교
            if (comN == userN) msg.innerHTML = '맞음';
            else msg.innerHTML = '틀림';
    });
    };
});