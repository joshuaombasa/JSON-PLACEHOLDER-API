const blogForm = document.getElementById("blog-form")
const inputTitle = document.getElementById("input-title")
const inputContent = document.getElementById("input-content")

let postsArr = []

function renderPosts() {
    const postsHtml = postsArr.map((post) => {
        return `
               <h4>${post.title}</h4>
               <p>${post.body}</p>
               <hr>
               `
    }).join("")
    document.getElementById("container").innerHTML = postsHtml
}


fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        postsArr = data.slice(0, 5)
        renderPosts()
    })

blogForm.addEventListener("submit", (event) => {
        event.preventDefault()
        let post = {
            title: inputTitle.value,
            body:inputContent.value
        }
    
        const options = {
            method: "POST",
            body: JSON.stringify(post),
            headers: {
                "Content-Type": "application/json"
            }
        }
        
        fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
    
          .then(response => response.json())
          .then(post => {
            console.log(post)
            
          }
          
          
          )
    
          
    })
    