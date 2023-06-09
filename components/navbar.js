Vue.component('navBar', {
    template: `
      <nav class="navbar navbar-light p-2" style="background-color: #3b82f6">
        <span class="navbar-brand">
          <img src="https://i.imgur.com/Qx8uR89.png" alt="GloboLogo" style="margin-left: 24px">
        </span>
        <span class="form-inline my-2 my-lg-0">
          <input id="userNameInput" style="margin-right: 24px" type="text" placeholder="Ingresá tu usuario">
        </span>
      </nav>
    `,
    data() {
      return {
        message: '¡Este es mi componente!'
      }
    }
  });
  