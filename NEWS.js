
console.log('we create a news websites');



let newsaccordion = document.getElementById('newsaccordion');
// newsaccordion.style.color="green";

const xhr = new XMLHttpRequest();
xhr.open('get', `http://newsapi.org/v2/top-headlines?country=in&apiKey=9d9ae422f5af40ccbc449d80c8935740`, true);

xhr.onload = function () {
  if (this.status == 200) {

    let json = JSON.parse(this.responseText);

    let articles = json.articles;
    console.log(articles);
    let newshtml = "";

    articles.forEach(function (element, index) {
      let news = `
            <div class="card">
                <div class="btn">
                 <button> <b>Title:</b>${element['title']}</button>
                 </div>
                <div class="content">
                <span><p><b>Breaking News${index+1}</b>   ::    ${element['content']} <a href="${element['url']}" target=_"blank">Read more information</a>       </span>    </p>
           </div>
    
          </div>`
      newshtml += news;
    });

    newsaccordion.innerHTML = newshtml;

  }
}


xhr.send();


