var immagini = ["https://m.media-amazon.com/images/M/MV5BMTkxMzk4MjQ4MF5BMl5BanBnXkFtZTcwMzExODQxOA@@._V1_.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2X6YD6Wwb47LRIUwQLYk_B9h6_oSeC0FVcQ&usqp=CAU",
                "https://www.ilprimatonazionale.it/wp-content/uploads/2015/02/foscolo.jpg",
                "https://www.rebeccalibri.it/wp-content/uploads/2020/01/411px-1999-Saramago_a_Siena.jpg"];

var nomi = ["Christian Bale","Freddie Mercury","Ugo Foscolo","José Saramago"];

var wikipedia = ["https://it.wikipedia.org/wiki/Christian_Bale",
                 "https://it.wikipedia.org/wiki/Freddie_Mercury",
                 "https://it.wikipedia.org/wiki/Ugo_Foscolo",
                 "https://it.wikipedia.org/wiki/José_Saramago"];


for(i=0;i<4;i++){//Ciclo che aggiunge le 4 immagini e le relative immagini wiki

    //"Prendo" il riferimento dall'HTML
    var img = document.querySelector("#img"+i);
    //Inserisco il link dell'immagine da inserire
    img.setAttribute("src",immagini[i]);
    //Adatto la grandezza dell'immagine
    img.classList.add("dimImg");
    //Creo un nuovo elemento
    var wiki = document.createElement("a");
    //Setto il text del nuovo elemento
    wiki.textContent=nomi[i];
    //Inserisco il link all'elemento
    wiki.setAttribute("href",wikipedia[i]);
    //Aggiungo tutto al padre dell'immaagine
    img.parentNode.appendChild(wiki);
}