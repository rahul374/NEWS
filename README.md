<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Daily News</title>
    <style>
        * {
            margin: 0px;
            padding: 0px;
            box-sizing: border-box;
        }

        .navbar {
            background-color: black;
            color: white;
            height: 80px;
            line-height: 40px;
            border-radius: 10px;
            font-size: 30px;
            padding-top: .7em;
            text-align: center;
        }
        .list1{
            text-decoration: none;
            animation-name:ritik ;
            animation-duration: 1.5s;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
            animation-fill-mode: alternate;
            color: cyan;
        }
        @keyframes ritik{
            from{ 
                
                padding-right:.7em;
            }
            to{
                padding-left:3em ;
            }
        }
      
        .header  {
            margin-left: 100px;
            width:35%;
            background-color: rgb(78, 74, 74);
            height: 60px;
            margin-top: 10px;
            border-radius: 10px;
            text-align: center;
            color: honeydew;
            font-weight: bold;
            font-size: 20px;
        }
        
        

        .card{
         text-align: center;
         font-size: 20px;
        }

        .card button {
            width: 80%;
            height: 100px; 
            margin-top: 20px;
            font-size: 20px; 
            border-radius: 5px;
            

        }
        .card p b{
            color: red;
        }

        .card p {
            width: 80%;
            height: 80px;
             margin-left:10% ;
             
        }
      
        @media screen and (max-width: 480px){
            .header{
                width: auto;
                background-color: rgb(61, 55, 55);
                height: 100px;
                font-size: 15px;
                text-align: center;
                margin-left: 10%; 
                padding-top: 20px;
            }
            .navbar{
                width: auto;
                height: 100px;
            }
            .card button{
                width: auto;
                height: 120px;
                margin-left: 10%;
                  }
                  .content{
                      width: auto;
                      margin-left: 10%;
                      height: 280px;
                      /* background-color: rgb(219, 241, 219); */
                  }

        }
        @media screen and (min-width: 480px)and (max-width: 900px){
            .navbar{
                width: auto;
                height: 100px;
            }
            .header{
                width: auto;
                background-color: rgb(61, 55, 55);
                height: 80px;
                font-size: 15px;
                text-align: center;
                margin-left: 10%; 
                padding-top: 20px;
            }
            .card button{
                width: auto;
                height: 100px;
                margin-left: 10%;
                  }
                  .content{
                      width: auto;
                      margin-left: 10%;
                      height: 180px;
                  }

        }
  
     
    </style>
</head>

<body>
    <div class="container">
        <div class="navbar">
            <p class="list1"><i>India Express News Daily</i> </p>
        </div>
        <div class="header">
            <h1>Welcome to All India News</h1>
        </div>
        <div id="newsaccordion">  </div>


<script>
    
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
 
    

</script>
</div>
</body>

</html>
