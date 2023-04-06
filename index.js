const blogForm = document.getElementById("blog-form")
const inputTitle = document.getElementById("input-title")
const inputContent = document.getElementById("input-content")

blogForm.addEventListener("submit", (event) => {
    event.preventDefault()
    let post = {
        title: inputTitle.value,
        body:inputContent.value
    }
    console.log(post)
})



fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        const postsArr = data.slice(0, 5)

       const postsHtml = postsArr.map((post) => {
           return `
                  <h4>${post.title}</h4>
                  <p>${post.body}</p>
                  <hr>
                  `
       }).join("")
       document.getElementById("container").innerHTML = postsHtml
       
    })