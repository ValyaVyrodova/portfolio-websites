// heart button

const heartBtns = document.querySelectorAll(".heart")

for (let index = 0; index < heartBtns.length; index++) {
    const heartBtn = heartBtns[index];

    heartBtn.addEventListener("click", function (e) {
        if (e.target.className === "heart") {
            const imgHeart = e.target.children[0]
            toggleHeart(imgHeart)
        } else {
            const imgHeart = e.target
            toggleHeart(imgHeart)
        }
    })
}

function toggleHeart(imgElement) {
    if (imgElement.src.includes('heart_1.png')) {
        imgElement.src = "./img/content/heart_2.png"
    } else {
        imgElement.src = "./img/content/heart_1.png"
    }
}