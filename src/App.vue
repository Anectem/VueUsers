<template>
  <div id="app">
    <b-navbar>
      <h4>User Table Application </h4>
    </b-navbar>
    <router-view />
  </div>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Comfortaa&display=swap&subset=cyrillic,cyrillic-ext');
  #app {
  font-family: "Comfortaa", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

td {
  vertical-align: middle !important;
}
</style>
