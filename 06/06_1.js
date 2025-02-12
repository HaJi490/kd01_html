//배열 선언
let arr = [];  //빈배열
let arr1=[1, 2, 3, 4]  //초기값이 있는 배열

let arr2 = new Array(); //Array객체


console.log(arr);
console.log(arr1);
console.log(arr2);

//배열의 추가
arr.push(10);
arr.push(20);
arr.push(30);
console.log(arr);

//배열 수정
arr[0] = 1;
console.log(arr);

//배열 삭제(바깥쪽부터 삭제됨)
arr.pop();
console.log(arr);

//배열 전체삭제
arr.length = 0;     
console.log(arr);


//배열 순회
arr = [1,2,3,4,5]

console.log("기본반복");
for(let i =0; i<arr.length; i++){
    console.log(arr[i]);
}

console.log("in 반복");     //i가 인덱스임
for(let i in arr){      
    console.log(arr[i]);        //arr에 인덱스를 한개씩 가지고 옴
}

console.log("of 반복");    
for(let i of arr){      
    console.log(i);          //인덱스가 없어도 항목의 값을 찾아옴(파이썬의 for문)
}

console.log("of 반복2");
for(let i of arr.entries()){     
    console.log(i);
}
//구조 분해 할당
for(let [i, item] of arr.entries()){    //entries() 메서드 : [인덱스, 값]        
    console.log(i, item);               //i = 인덱스, item = 변수
}

console.log("forEach 메소드");
arr.forEach((item, i)=>{        //item값 > 키  //()=>{} 콜백함수
    console.log(i, item);
});



//map()
console.log("map 메소드");
arr = arr.map((item)=>{           //꼭 arr일 필요x, 새로운 변수선언가능
    console.log(item);          //??왜 생략된거

    return item * 2;
}); 
console.log(arr);    

console.log("map 메소드2");
arrMap = arr.map(item=> item * 2 );              //매개변수 1개면 ()생략가능 //명령어 1개면 {}생략가능
console.log(arrMap); 

console.log("map 메소드3");
arrMap = arr.map((item,i)=> item * i );              //매개변수 2개니까 ()생략xx //명령어 1개면 {}생략가능
console.log(arrMap); 


//filter()
console.log("filter 메소드");
let arrFilter = arr.filter((item)=>{           
    console.log(item);

    return item % 2 ==0;
}); 
console.log(arrFilter);   

console.log("filter 메소드2");
arrFilter = arr.filter(item=>item % 2 ==0); 
console.log(arrFilter);

console.log("filter 메소드3");
arrFilter = arr.filter((item, i)=> i==3); 
console.log(arrFilter);


//map() + filter()
let arrMf = arr.map((item, i) => item * i).filter( item => item % 3 == 0);
console.log(arrMf);

// 랜덤수 생성
//let arrRand = Math.floor(Math.random() * 6 ) + 1;       //*6하면 0~5까지 생성 //Math.floor 정수로 나옴

let arrRand = []
// for( let i=0; i < 6; i++){
//      arrRand[i] = Math.floor(Math.random()*6)+1;   
//  }

arrRand.length = 0;
for( let i=0; i < 6; i++){
    arrRand.push(Math.floor(Math.random() * 6 ) + 1);
}
console.log(arrRand) ;

arrRand = arrRand.map( item => Math.floor(Math.random()*6)+1);

//오름차순
arrRand.sort((a, b) => a - b) ; 
console.log(arrRand) ;

//내림차순
arrRand.sort((a, b) => b - a) ; 
console.log(arrRand) ;

//배열의 순서를 반대로 뒤집음(많이 씀)
console.log(arrRand.reverse()) ;            

//모든 요소를 문자열로 결합하여 반환
console.log(arrRand.join('')) ;
console.log(arrRand) ;

//배열 안에 배열더하기
console.log(arrRand.concat(arr)) ;

//요소 확인
console.log(arrRand.indexOf(10));               //없으면 -1, 있으면 false
//console.log(arrRand.inincludes(10));

//전개연산자
let arrCopy ;
//arrCopy = arr.map(item => item) ;
//console.log(`arrCopy=${arrCopy}`)

arrCopy = [...arr, ...arrRand];             //굳이 concat을 쓸 필요가 없음
console.log(`arrCopy=${arrCopy}`)
