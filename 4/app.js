// heart button

const heartBtns = document.querySelectorAll(".heart")

for (let index = 0; index < heartBtns.length; index++) {
    const heartBtn = heartBtns[index];
    heartBtn.addEventListener("click", function (e) {

        // e.target.style.backgroundColor = 'green'
        if (e.target.className === "heart") {
            const imgHeart = e.target.children[0]
            if (imgHeart.src.includes('heart_1.png')) {
                imgHeart.src = "./img/content/heart_2.png"
            } else {
                imgHeart.src = "./img/content/heart_1.png"
            }
        } else {
            const imgHeart = e.target
            if (imgHeart.src.includes('heart_1.png')) {
                imgHeart.src = "./img/content/heart_2.png"
            } else {
                imgHeart.src = "./img/content/heart_1.png"
            }
        }
    })

}


