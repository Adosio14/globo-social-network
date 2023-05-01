let likes = 200
let likesStrong = document.getElementById("likeCount")
let likeButton = document.getElementById("likeButton")
let followButton = document.getElementById("followButton")
let commentButton = document.getElementById("commentButton")
likesStrong.appendChild(document.createTextNode(likes))
likeButton.addEventListener("click", like)
followButton.addEventListener("click", follow)
commentButton.addEventListener("click", addComment)

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

function addComment(){
    let usernameInput = document.getElementById("seachUserInput").value
    let commentInput = document.getElementById("DejaTucomentario").value
    let commentsDiv = document.getElementById("comentarios")
    let usernameStrong = document.createElement("strong")
    let deleteCommentButton = document.createElement("buton")
    let buttonSpan = document.createElement("span")
    let comment = document.createElement("p")
    let errorText = document.getElementById("errorText")
    if(usernameInput == ""){
        errorText.textContent = "No se pudo añadir el comentario. Falta nombre de usuario"
    }else if(commentInput == ""){
        errorText.textContent = "Ingrese un comentario"
    }else if(usernameInput == "" && commentInput == ""){
        errorText.textContent = "Ingrese un comentario y un nombre de usuario"
    }
    if(usernameInput != "" && commentInput != ""){
        errorText.textContent = ""
        usernameStrong.appendChild(document.createTextNode(usernameInput + " "))
        comment.appendChild(usernameStrong)
        comment.appendChild(document.createTextNode(""))
        comment.appendChild(document.createTextNode(commentInput + " "))
        deleteCommentButton.addEventListener("click", () => comment.remove())
        deleteCommentButton.classList.add("Button2")
        deleteCommentButton.textContent = "Eliminar"
        buttonSpan.appendChild(deleteCommentButton)
        comment.appendChild(buttonSpan)
        commentsDiv.appendChild(comment)
        clearCommentField()
 } 
    function clearCommentField(){
        let commentInput = document.getElementById("DejaTucomentario")
        commentInput.value = ""
    }



}