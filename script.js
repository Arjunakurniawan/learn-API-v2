const postlist = document.getElementById("postList");
const button = document.getElementById("buttonSubmit");

function fetchPost() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function (res) {
      return res.json();
    })
    .then(function (posts) {
      let postList = document.getElementById("postList");
      postList.innerHTML = "";

      for (let i = 0; i < posts.length; i++) {
        let postItem = document.createElement("li");
        postItem.textContent = `id: ${posts[i].id}  title: ${posts[i].title}`;
        postList.append(postItem);
      }
    });
}

button.onclick = function () {
  const inputTitle = document.getElementById("inputTitle").value;
  const inputBody = document.getElementById("inputBody").value;

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: inputTitle,
      body: inputBody,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (res) {
      return res.json();
    })
    .then(function (json) {
      alert("Success");
      fetchPost();
      
    });
};

fetchPost();
