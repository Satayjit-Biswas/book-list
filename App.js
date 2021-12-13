// dom selection
// Event listner
// Basic validation
// Creating element
// append

const bookname = document.querySelector("#bookname");
const author = document.querySelector("#author");
const price = document.querySelector("#price");
const submit = document.querySelector("#submit");
const addbook = document.querySelector("#addbook");
const error = document.querySelector(".error");

submit.addEventListener("click", function (e) {
    e.preventDefault();
    const newRow = document.createElement("tr");
    // book name
    if (bookname.value == "" || author.value == "" || price.value == "") {
        error.innerHTML = 'Sorry Plz Write Book';
        setTimeout(()=>{
            error.innerHTML = '';
        },2000)
    } else {
        const addbookname = document.createElement("td");
        addbookname.innerHTML = bookname.value;
        newRow.appendChild(addbookname);
        console.log(bookname.value);

        // book name
        const addauthor = document.createElement("td");
        addauthor.innerHTML = author.value;
        newRow.appendChild(addauthor);
        console.log(author.value);

        // book name
        const addprice = document.createElement("td");
        addprice.innerHTML = price.value;
        newRow.appendChild(addprice);
        console.log(price.value);

        addbook.appendChild(newRow);
        bookname.value = "";
        author.value = "";
        price.value = "";
        error.innerHTML='';
    }
});
