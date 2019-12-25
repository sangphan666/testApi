<template>
  <div id="signin">
    <div class="signin-form">
      <form @submit.prevent="onSubmit">
        <div class="input">
          <label for="userName">User Name</label>
          <input type="email" id="userName" v-model="username" />
        </div>
        <div class="input">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" />
        </div>
        <div class="submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "../../axios-auth";
export default {
  data() {
    return {
      grand_type: "password",
      client_id: "2",
      client_secret: "4Xj4Z6koXp93fE6NB4VAnBAlX5vlZaOvmDByc5tG",
      username: "",
      password: ""
    };
  },
  methods: {
    onSubmit() {
      const formData = {
        grand_type: this.grand_type,
        client_id: this.client_id,
        client_secret: this.client_secret,
        username: this.username,
        password: this.password
      };
      console.log(formData);

      axios({
        url: "http://japana.backend:8080/oauth/token",
        method: "post",
        data: formData
      })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.log(err.response.data);
        });
    }
  }
};
</script>

<style scoped>
.signin-form {
  width: 400px;
  margin: 30px auto;
  border: 1px solid #eee;
  padding: 20px;
  box-shadow: 0 2px 3px #ccc;
}

.input {
  margin: 10px auto;
}

.input label {
  display: block;
  color: #4e4e4e;
  margin-bottom: 6px;
}

.input input {
  font: inherit;
  width: 100%;
  padding: 6px 12px;
  box-sizing: border-box;
  border: 1px solid #ccc;
}

.input input:focus {
  outline: none;
  border: 1px solid #521751;
  background-color: #eee;
}

.submit button {
  border: 1px solid #521751;
  color: #521751;
  padding: 10px 20px;
  font: inherit;
  cursor: pointer;
}

.submit button:hover,
.submit button:active {
  background-color: #521751;
  color: white;
}

.submit button[disabled],
.submit button[disabled]:hover,
.submit button[disabled]:active {
  border: 1px solid #ccc;
  background-color: transparent;
  color: #ccc;
  cursor: not-allowed;
}
</style>
