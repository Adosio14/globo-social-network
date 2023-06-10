const app = Vue.createApp({
    data() {
        return {
            userInput : "",
            followed : false,
            followError : false,
            likeError : false,
            likeCount : 200,
            liked: false,
            commentError : false,
            emptyComment : false,
            commentContent : "",
            comments: [
                {
                    "userName" : "Juan Perez",
                    "content" : "¡Wow, esta foto de Tokyo es impresionante! 🌆✨"
                },
                {
                    "userName" : "Kathleen J Rennie",
                    "content" : "¡Esta foto de Tokyo es simplemente espectacular! Me trae tantos recuerdos"
                },
                {
                    "userName" : "Diana Bell",
                    "content" : "¡Espero que algun dia pueda ver Tokyo en persona!"
                },
            ],
        }
    },
    methods: {
        handleUsernameChange(newValue){
            this.userInput = newValue
        },
        follow(){
            if(this.userInput == ""){
                this.followError = true
            }else{
                this.followError = false;
               if(this.followed){
                this.followed = false
               }else{
                this.followed = true
               }
            }
        },
        like(){
            if(this.userInput == ""){
                this.likeError = true
            }else{
                if(this.liked){
                    this.liked = false
                    this.likeCount--
                }else{
                    this.likeError = false
                    this.liked = true
                    this.likeCount++
                }
            }
        },
        comment(){
            if(this.userInput == "" || this.userInput == undefined){
                this.commentError = true
            }else if(this.commentInput == undefined){
                this.emptyComment = true
                this.commentError=true
            }else if(this.commentInput == "" || this.commentInput.trim() == ""){
                this.emptyComment = true
                this.commentError=true
            }else{
                this.commentError = false
                this.emptyComment = false
                let comment = {
                    "userName" : this.userInput,
                    "content" : this.commentInput
                }
                this.comments.push(comment)
                this.commentInput = ""
            }
        }
    }
})
app.component("nav-bar", {
    template: `
      <nav class="navbar navbar-light p-2" style="background-color: #3b82f6">
        <span class="navbar-brand">
          <img src="https://i.imgur.com/Qx8uR89.png" alt="GloboLogo" style="margin-left: 24px">
        </span>
        <span class="form-inline my-2 my-lg-0">
          <input v-model="userName" style="margin-right: 24px" type="text" placeholder="Ingresá tu usuario">
        </span>
      </nav>
    `,
    data() {
      return {
        userName: ""
      }
    },
    watch: {
        userName(newValue) {
            this.$emit("username-changed", newValue)
            console.log
        }
    },
})
  
app.component("about-me",{
    template: `
    <div class="col-lg-3 col-sm-12 col-md-12" id="aboutMeCard">
            <h3>Sobre mí</h3>
            <p>
              Hola a todos! Soy Jane, y actualmente vivo en la vibrante y
              emocionante ciudad de Tokyo, Japon. Me encanta capturar a esencia de
              la vida urbana a través de mi lente, explorando el contraste entre
              la arquitectura moderna y las tradiciones centenarias que conviven
              en esta metropolis unica. Desde rascacielos deslumbrantes y calles
              bulliciosas hasta templos serenos y jardines tranquilos, encuentro
              inspiración en cada rincón de ésta increíble ciudad.
            </p>
          </div>
    `,
})


app.mount("#app")