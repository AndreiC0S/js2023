// book constructor

function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//add book to list

function UI(){

}

//add book to list
UI.prototype.addBookToList = function (book,setCookies=true){

    const list = document.getElementById('book-list')

    //create tr element
    const row = document.createElement('tr');

    //insert cols
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href='#' class='delete'> X </a></td>
    `
    if(setCookies == true){
        setCookie(book.isbn, book, 1)
      }
    list.appendChild(row);
}

UI.prototype.showAlert = function(message, className){

    const div = document.createElement('div');

    div.className - `alert ${className}`

    div.appendChild(document.createTextNode(message));

    const container = document.querySelector('.container');

    //get form
    const form = document.querySelector('#book-form');
    container.insertBefore(div, form);

    //timeout after 3 sec
    setTimeout(function(){
        document.querySelector('.aler').remove();
    }, 3000);
}

//delete book
UI.prototype.deleteBook = function(target){
    if (target.className === 'delete'){
        target.parentElement.parentElement.remove();
    }
}

// Clear Fields
UI.prototype.clearFields = function () {
    document.getElementById('title').value = "";
    document.getElementById('author').value = "";
    document.getElementById('isbn').value = "";
  }
  
  // Event Listeners
  document.getElementById('book-form').addEventListener('submit', function (e) {
  
    // Get form values
    const title = document.getElementById('title').value,
      author = document.getElementById('author').value,
      isbn = document.getElementById('isbn').value
  
    // Instantiate book
  
    const book = new Book(title, author, isbn);
  
    // Instantiate UI
    const ui = new UI();
  
    // Validation
    if (title === "" || author === "" || isbn === "") {
      // Error alert
      ui.showAlert('Please fill in all fields', 'error');
    } else {
      // Add Book to List
      ui.addBookToList(book);
  
      // Show success
      ui.showAlert('Book Added', 'success');
  
      // Clear Fields
      ui.clearFields();
    }
  
    e.preventDefault();
  });
  
  // Event Listener for delete
  document.getElementById('book-list').addEventListener('click', function (e) {
  
    // Instanitate UI
    const ui = new UI();
  
    // Delete Book
    ui.deleteBook(e.target);
  
    // Show Alert
    ui.showAlert('Book Removed!', 'success');
  
    e.preventDefault();
  });
  
  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    if (typeof cvalue === 'object') {
      cvalue = JSON.stringify(cvalue);
    }
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function get_cookies_array() {
  
    var cookies = { };
  
    if (document.cookie && document.cookie != '') {
        var split = document.cookie.split(';');
        for (var i = 0; i < split.length; i++) {
            var name_value = split[i].split("=");
            name_value[0] = name_value[0].replace(/^ /, '');
            cookies[decodeURIComponent(name_value[0])] = decodeURIComponent(name_value[1]);
        }
    }
  
    return cookies;
   
  }
  window.onload = function () {
  // Instantiate UI
  const ui = new UI();
    var allBooks = get_cookies_array();
  
    Object.values(allBooks).forEach(function (book){
      console.log(JSON.parse(book));
      ui.addBookToList(JSON.parse(book), false);
    })
  };



