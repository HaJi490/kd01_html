function showMsg(m){
    
    document.getElementById('txt2').value=m
}

//회문확인
function check1(){
    // 1. 입력문자열 가져오기
    let s = document.getElementById('txt1').value;

    // 2. 문자열 뒤집어진 문자열 생성
    let sr = '';
    // for(let i = s.length -1 ; i >=0; i--){
    //     sr = sr +s[i];
    // }
    // console.log(s,sr);

    //2-1. 배열을 이용하여 문자열 뒤집기
    sr = s.split('').reverse().join('');                //split:한글자씩 분리>배열이 됨 //reverse: 배열만 사용가능// join : 다시 문자열로 만듦
    console.log(`sr =${sr}, ${typeof(sr)}`)             //데이터타입 확인

    // 3. 입력문자열 뒤집어진 문자열 비교
    if(s.replaceAll(' ','') == sr.replaceAll(' ','')){      //replace:문자열에서 특정문자 한번만 제거(뛰어쓰기해도 회문확인되도록)+All: 뛰어쓰기 여러번 있어도 제거 
        showMsg( '회문입니다.' );
    } else{
        showMsg ( '회문이 아닙니다.' );
    }
}

//숫자합계
const check2 = () =>{
    //1. 입력문자열 가져오기
    let s = document.getElementById('txt1').value;

    //2. 문자열을 순회하면서 숫자이면 합계 계산
    let sum = 0;
    for(let c of s){
        if(!isNaN(c))
            sum = sum + parseInt(c);
    }

    //3. 결과 출력
    //document.getElementById('txt2').value=sum
    showMsg(sum)
}

