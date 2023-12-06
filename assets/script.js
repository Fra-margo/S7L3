const booklist = document.querySelector("#booklist")
const carrello = document.querySelector("#carrello")

let libriSelezionati = []

window.onload = () => {
    prendiLibri()
}

const prendiLibri = () => {
    fetch("https://striveschool-api.herokuapp.com/books")
    .then(response => response.json())
    .then(books => {
        mostraLibri(books);
    })
}

function mostraLibri(books){
    booklist.innerHTML = "";

    books.forEach((book) => {
        booklist.innerHTML += `
        <div class="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 p-2">
                <div class="card h-100">
                    <img src="${book.img}" class="card-img-top" alt="${book.title}">
                    <div class="card-body">
                      <h5 class="card-title">${book.title}</h5>
                      <p class="card-text badge bg-dark">${book.category}</p>
                      <p class="fs-3 fw-bold">${book.price}€</p>
                     <div>
                      <button class="btn btn-danger me-3">Compra ora</button>
                      <button class="btn btn-danger" onclick="discard(event)">Scarta</button>
                     </div>
                    </div>
                </div>
        </div>
      `;
    })
}

const discard = (event) => {
    event.target.closest(".col").remove()
}