const getFetch=async(dt, ul) => {
    console.log(dt);
    let apiKey = '';
    let baseUrl = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?';
    let url = `${baseUrl}key=${apiKey}&targetDt=${dt}`//&로 묶어서

    try{
        const resp = await fetch(url);
        const data = await resp.json();
        console.log(data.boxOfficeResult.dailyBoxOfficeList);

        let tags='';
        for(let item of data.boxOfficeResult.dailyBoxOfficeList){   
            tags = tags +
            //html 태그넣기 
            `<li>       
            <span class="sp">${item.rank}</span>
            <span id=mv>${item.movieNm}</span>
            </li>` ;
        }
        ul.innerHTML = tags ;
        }
        catch(err){
            console.log(err);
        }
        console.log('getFetch', url);
    }


document.addEventListener('DOMContentLoaded', () => {
    //필요요소 가지고오기
    const dt = document.querySelector('#dt');
    const ul = document.querySelector('ul');

    dt.addEventListener('change', (e) => {
        e.preventDefault; //

        console.log(dt.value); //input이니까 value로 가져와야함
        getFetch(dt.value.replaceAll('-',''), ul) ; //.replaceAll #'-'를 ''(공백)으로 

    });

});