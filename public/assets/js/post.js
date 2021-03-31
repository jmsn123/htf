const searchButton = document.getElementById("searchInput")
const tag = document.querySelector(".tag");
const desc = document.querySelector(".card-body > h4")
const cards = document.querySelectorAll(".card-body")

async function getFish() {
    try {
        let info = ``
        const response = await fetch("/api/post")
        const data = await response.json()
        console.log(data)

        cards.forEach((card, i) => {
            info = `<span class="tag tag-teal">${data[i].postName}</span>
                    <h4></h4>
                    <p>${data[i].postContent}</p>
                    <div class="user">
                        <img src="#" alt="user 1" />
                        <div class="user-info">
                            <h5>${data[i].date_created}</h5>
                            <small>2h ago</small>
                        </div>
                    </div>`
            card.innerHTML = info

        })


    } catch (err) {
        console.log(err);
    }
}
async function topPosts() {


}

document.addEventListener("DOMContentLoaded", function(e) {
    e.preventDefault()
    console.log("Running function ");
    getFish()
})