let key = "d7ae0159385749778de944d10b425b00";
let pais = "mx";
let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`;
let mostrar_noticias = document.getElementById("noticias");

fetch(url)
  .then((resp) => resp.json())
  .then((dato) => {
    console.log(dato);
    let noticias = dato.articles;
    noticias.map(function (numero) {
      let div = document.createElement("div");
      div.style.display = "flex"; // Flexbox para alinear los elementos
      div.style.alignItems = "stretch"; // Asegura que el texto se ajuste a la altura de la imagen
      div.style.marginBottom = "20px"; // Espaciado entre noticias
      div.style.border = "1px solid #ddd"; // Borde alrededor de cada noticia
      div.style.borderRadius = "8px"; // Bordes redondeados
      div.style.padding = "10px"; // Espaciado interno
      div.style.backgroundColor = "#f9f9f9"; // Fondo claro

      div.innerHTML = `
        <img style="width: 300px; height: auto; margin-right: 15px; border-radius: 8px; object-fit: cover;" src="${numero.urlToImage}">
        <div style="flex: 1; display: flex; flex-direction: column; justify-content: center;">
          <h1 style="font-family: 'Arial', sans-serif; font-size: 1.5rem; margin: 0 0 10px; color: #333;">${numero.title}</h1>
          <h2 style="font-family: 'Arial', sans-serif; font-size: 1rem; margin: 0 0 10px; color: #777; line-height: 1.4;">${numero.description}</h2>
          <a href="${numero.url}" target="_blank">Leer más</a>
        </div>
      `;
      mostrar_noticias.appendChild(div);
    });
  });
  