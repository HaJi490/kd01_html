/*.then
const getFetch = () => {
    //key값은 Github올리지말기
    let apiKey = '';
    let baseUrl = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?';
    let url = `${baseUrl}key=${apiKey}&targetDt=20250219`

    
    //fetch API
    fetch(url)  //값이오면 펜딩(대기)되서
    .then(resp => resp.json()) //응답을 json(메서드)으로 변환 //.then #정상적으로 왔을때 = Fulfilled(이행)   //콜백함수에서 명령 하나니까 (),{}, retrun; 없어도됨
    .then(data=> console.log(data.boxOfficeResult.dailyBoxOfficeList))    //json으로 받은 파일을 data로 받아서 data>boxOfficeResult>~List를 가져옴
    .catch(err => console.log(err)) ;   //. catch #정상적으로 오지 않았을때 = Rejected(실패)
    
    console.log('getFetch', url);
}
*/

const getFetch = async() => {
    //key값은 Github올리지말기
    let apiKey = '';
    let baseUrl = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?';
    let url = `${baseUrl}key=${apiKey}&targetDt=20250219`

    
    //fetch API
    try{
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data.boxOfficeResult.dailyBoxOfficeList);
    }
    catch(err){
        console.log(err);
    }
    console.log('getFetch', url);
}

document.addEventListener('DOMContentLoaded',()=>{  //자바 main문 느낌
    const bt = document.querySelector('button') ;

    bt.addEventListener('click', ()=> {
        getFetch(); //getFetch 가져오기
    })
});
