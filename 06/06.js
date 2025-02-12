function lotto(){
    // 1. 로또번호생성
    // 1-1. 로또배열
    let arrLotto = [];

    //1-2. 6개 + 1개 번호 추출
    while( arrLotto.length < 6 ) {//for는 개수를 정해야하니까
        let n = Math.floor(Math.random() * 45) + 1 ; //1~45까지

        if(!arrLotto.includes(n)) arrLotto.push(n);
    }

    //1-3 6개 번호 정렬
    arrLotto.sort((a,b)=>a-b);    
    
    //1-4. +1개 번호 추출
    while( arrLotto.length < 7 ) {
        let n = Math.floor(Math.random() * 45) + 1 ; 

        if(!arrLotto.includes(n)) arrLotto.push(n);
    }
    console.log(arrLotto); 

    let spanTgs = arrLotto.map(item => `<span>${item}</span>`).join('');
    console.log(spanTgs);
    document.getElementById("msg").innerHTML = spanTgs ;
}

// // 1. 1~10 무작위 숫자생성
// let arrRand = [] ;

// arrRand.length = 0 ;
// for( i = 0 ; i < 6; i++){
//     arrRand.push(Math.floor(Math.random()*10)+1)
// }
// console.log(arrRand);

// // 2. 겹치는 숫자없도록 만들기
// arrRand = arr.filter(item=> );

// arr.sort((a,b)=>a-b);


