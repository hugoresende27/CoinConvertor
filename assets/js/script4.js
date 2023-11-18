function adicionarFilme() {
    console.log('addmovie');

    var favMovie = document.getElementById('movie').value;
    var movieList = document.getElementById('movieList');

    // alert(favMovie);
    // document.write("<img src=" + favMovie + ">");
    movieList.innerHTML = movieList.innerHTML + "<img src=" + favMovie + ">";

    document.getElementById('movie').value = "";
  

}