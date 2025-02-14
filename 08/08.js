// 1. DOM이 로드되었을 때
document.addEventListener('DOMContentLoaded', () =>{
    //2. 요소 가져오기(버튼, 이미지)
    const bt = document.querySelector('button') ;
    const img = document.querySelector('img');
    //3. 버튼이 클릭될 경우
    bt.addEventListener('click', () => {
        //4. 랜덤수 생성
        let n = Math.floor(Math.random() * 6) + 1 ; //1~6까지 생성
        //5. 이미지 속성변경
        img.setAttribute("src", `../img/img/${n}.png`);     //백틱사용해서 숫자변경
        img.setAttribute("alt", `${n}`);
    });
});
