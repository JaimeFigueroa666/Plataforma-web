let key = "d7ae0159385749778de944d10b425b00";
let pais = "mx"
let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`;
let mostrar_noticias = document.getElementById("noticias");

fetch(url).then((resp) => resp.json()).then(dato =>{
    console.log(dato);
    let noticias = (dato.articles);
    noticias.map(function (numero){
        let div = document.createElement("noticas");
        div.innerHTML=`<br>
                       <img style="max-width: 700px; height: 700px; " src="${numero.urlToImage}"><br>
                       <h1 style="text-align: center; font-family: 'Arial', sans-serif;
                        font-size: 1.5rem;";>${numero.title}</h1>
                       <h2 style="text-align: center; font-family: 'Arial', sans-serif;
                        font-size: 1.2rem;";>${numero.description}</h2>
                       <h3 style="text-align: center; font-family: 'Arial', sans-serif;
                       font-size: 1.0rem;";>${numero.url}</h3>`;
        mostrar_noticias.appendChild(div); 
    });
});

