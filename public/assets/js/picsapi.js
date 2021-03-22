const imgs = document.querySelectorAll(".numbertext+img");
const getRandomPic = () => {
    fetch(
            "https://api.unsplash.com/photos/random/?count=5&client_id=0lHhHTMNFiNPPyy2IsviukjGSJJ7kLmHBBs6Xi9wpw8"
        )
        .then((response) => response.json())
        .then((data) => {
            data.forEach(function(image, i) {
                //         document.querySelector("#slide-" + (i + 1)).innerHTML = `
                // <img src="${image.urls.regular}" alt="">
                // <p class="author-info">
                //   <a href="${image.links.html}?utm_source=slider-thing&utm_medium=referral&utm_campaign=api-credit">Photo by ${image.user.name}</a> on <a href="https://unsplash.com/">Unsplash</a>
                // </p>
                // `;            }
                imgs.forEach(img => {
                    img.source = image.urls.regular
                })
            });
        });
};

document.addEventListener("DOMContentLoaded", () => {
    getRandomPic()
})