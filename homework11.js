//Task 1
/*const currentDate = new Date();
function changeButton() {
  let ajaxRequest = new XMLHttpRequest();
  ajaxRequest.open("GET", "./index.html", true);
  ajaxRequest.onreadystatechange = function() {
  if (ajaxRequest.readyState == 4 && ajaxRequest.status == 200) {
    document.getElementById("bttn1").innerHTML = "Your vote is accepted: " + currentDate;
    }
  };
  ajaxRequest.send();
}*/


  //Task 2
let authorlist = document.createElement("ul");
function getAuthor() {
    const url = "https://freetestapi.com/api/v1/books"
      fetch(url)
   .then(response => response.json())
   .then((data) => {
    data.forEach(element => {
            let itemEl = document.createElement('li');
      itemEl.innerHTML = element.author;
      authorlist.appendChild(itemEl);
    });
    document.body.appendChild(authorlist);
  })
}