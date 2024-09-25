const inputTitle = document.getElementById("inputTitle");
const inputBody = document.getElementById("inputBody");
const postlist = document.getElementById("postList");
const button = document.getElementById("buttonSubmit");

function fetchPost() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function (res) {
      return res.json();
    })
    .then(function (post) {
      let postList = document.getElementById("postList");
      postList.innerHTML = "";

      for (let i = 0; i < post.length; i++) {
        let postItem = document.createElement("li");
        postItem.textContent = `id: ${post[i].id} title: ${post[i].title}`;
        postList.append(postItem);
      }
    })
    .catch(function (err) {
      console.error("Error", err);
    });
}

button.onclick = function () {};

fetchPost();
