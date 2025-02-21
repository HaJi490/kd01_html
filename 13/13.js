//영화진흥위원회
const mvApi = '';
const baseMvUrl = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?';

//TMDB
const tmdbApi = ''; 
const baseTMDBUrl = 'https://api.themoviedb.org/3/search/movie?';

//영화포스터 저장 배열
let posterArr = [];

//포스터 가져오기
const getPoster = async (movieNm) => {  
    let url = `${baseTMDBUrl}api_key=${tmdbApi}&query=${movieNm}`

    //async를 써야 await를 사용가능 
    //await #비동기는 오래걸리면 아래명령어가 먼저 실행되니까 이걸 먼저 실행하고 넘어갈수 있도록
    const resp = await fetch(url);  
    const data = await resp.json();
    
    //console.log('baseTMDBUrl',url, data.results[0].poster_path)
    if (data == undefined) //undefined #정의되지 않는다면
        posterArr.push('');
    else
        posterArr.push(data.results[0].poster_path);
}


//박스오피스 가져오기
const getBoxOfficeList = async() => { //async의 리턴은 항상 promise
    const ul = document.querySelector('ul'); //DOM있는데 두니까 안뜸
    const mvPoster = document.querySelector('#mvPoster');

    const mvType = document.querySelector('[type = radio]:checked').value; // 가상클래스 :checked #체크된거
    const dt = document.querySelector('[type = date]').value.replaceAll('-', '');
    console.log("mvType", mvType, dt);

    //포스터배열 초기화
    posterArr = [];
    let url = `${baseMvUrl}&key=${mvApi}&targetDt=${dt}`;
    if (mvType == 'K' || mvType == 'F') {
        url = `${url}&repNationCd=${mvType}`;
    }

    //fetch
    const resp = await fetch(url);
    const data = await resp.json();
    const dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;

    let tags = '';
    for (let item of dailyBoxOfficeList) {
        tags = tags +
            `<li>       
            <span class="sp">${item.rank}</span>
            ${item.movieNm}
            </li>` ;
        await getPoster(item.movieNm); //promise여서 제일 먼저 찍히니까 await
    }
    ul.innerHTML = tags;

    const lis  = document.querySelectorAll('li');
    for(let [i, li] of lis.entries()){
        li.addEventListener('mouseenter', () => {
            mvPoster.innerHTML = `<img src="https://image.tmdb.org/t/p/w500/${posterArr[i]}>"`;
        })
    }
    console.log(lis);

    console.log("posterArr", posterArr);
}



//어제날짜 가져오기
const getYesterday = () => {
    let dt = new Date();    //Date 객체를 만들어서
    dt.setDate(dt.getDate() - 1); //set을 통해 -1

    //년도
    let year = dt.getFullYear(); //연도 4자리

    //월
    //.padStart #String으로 타입바꾸고 (자릿수, 빈곳에 채워넣을 기호)# getMonth #배열처럼 0부터 시작
    let month = String(dt.getMonth() + 1).padStart(2, '0'); //02, 03..
    //삼항연산자
    //month = 10 ? '0' + month : month; 

    //일
    let day = String(dt.getDate()).padStart(2, '0');

    return (year + '-' + month + '-' + day);
}

document.addEventListener('DOMContentLoaded', () => {
    const inputDate = document.querySelector('[type = date]');  //속성 []
    const radios = document.querySelectorAll('[type = radio]');
    
    const bt = document.querySelector('button');

    //어제 날짜
    const yesterday = getYesterday();
    inputDate.max = yesterday; //미래 날짜 선택안되게
    inputDate.value = yesterday;
    console.log(yesterday);

    //박스오피스 가져오기
    getBoxOfficeList(); //await #이거 실행한다음에 다른게 실행

    // for(let radio of radios){
    //     radio.addEventListener('click', ()=>{
    //         getBoxOfficeList();
    //     });
    // }
    bt.addEventListener('click', (e) => {  //디폴트값이 있을때만 하면되나?
        e.preventDefault();

        getBoxOfficeList();

    })

});