let likes = 200
let likesStrong = document.getElementById("likeCount")
let likeButton = document.getElementById("likeButton")
let followButton = document.getElementById("followButton")
likesStrong.appendChild(document.createTextNode(likes))
likeButton.addEventListener("click", like)
followButton.addEventListener("click", follow)

function like() {
    if (likeButton.textContent == "Me gusta") {
        likes++
        likesStrong.textContent = likes
        likeButton.textContent = "Ya no me gusta"
    } else {
        likes--
        likesStrong.textContent = likes
        likeButton.textContent = "Me gusta"
    }
}

function follow() {
    if (followButton.textContent == "Seguir") {
        followButton.textContent = "Dejar de seguir"
    } else {
        followButton.textContent = "Seguir"
    }
}