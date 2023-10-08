<template>
  <main>
    <div class="auth-box">
      <h2>Login</h2>
      <form class="auth"><input placeholder="NickName" autocomplete="off" required="required" /><button type="submit"> <span>Sign in</span></button></form>
    </div>
  </main>
</template>

<script>
export default {
  name: 'landing-auth',
  components: {
    },
  data() {
    return {
    }
  },
 computed: {
    },
 methods: {
    },
 mounted(){
    }
}
</script>

<style scoped>


main {
  height: calc(100vh - 224px);
}

.auth-box {
    background: #FFF;
    font-family: 'Gothic A1', serif;
    padding: 6em 0;
    text-align: center;
    height: inherit;
}

.auth-box h2 {
    margin: 0 0 0.85em 0;
    font-family: "Silkscreen", sans-serif;
    font-size: 40px;
    text-align: center;
}

.auth-box .auth {
    width: 100%;
    max-width: 600px;
    margin: auto;
}

.auth-box .auth input {
    width: 100%;
    background: transparent;
    border: 0;
    border-bottom: 1px solid;
    padding: 1em 0 0.8em;
    text-align: center;
    font-size: 18px;
    font-family: inherit;
    font-weight: 300;
    line-height: 1.5;
    color: inherit;
    outline: none;
}

.auth-box .auth input::placeholder {
    color: rgba(255, 255, 255, 0.5);
}

.auth-box .auth button {
    all: unset;
    margin-top: 2.4em;
    background: transparent;
    border: 2px solid white;
    padding: 1em 4em;
    border-radius: 50px;
    cursor: pointer;
    display: inline-block;
    font-weight: 700;
    position: relative;
    transition: all 300ms ease;
}

.auth-box .auth button span {
    display: inline-block;
    transition: all 300ms ease;
    font-family: "Archivo", "Archivo Placeholder", sans-serif;
    line-height: 1.5em;
    text-align: left;
    font-weight: 400;
}

.auth-box .auth button:before,
.auth-box .auth button:after {
    content: "";
    display: block;
    position: absolute;
    transition: all 300ms ease;
    opacity: 0;
}

.auth-box .auth button:before {
    height: 7px;
    width: 7px;
    background: transparent;
    border-right: 2px solid;
    border-top: 2px solid;
    right: 30px;
    top: 21px;
    transform: rotate(45deg);
}

.auth-box .auth button:after {
    background: black;
    height: 2px;
    width: 50px;
    left: 0;
    top: 1.49em;
}

.auth-box .auth button:hover span {
    transform: translateX(-10px);
}

.auth-box .auth button:hover:before {
    opacity: 1;
}

.auth-box .auth button:hover:after {
    width: 14px;
    opacity: 1;
    transform: translateX(123px);
}

</style>