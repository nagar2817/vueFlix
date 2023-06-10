<template>
<div class="all">
  <header>
    <router-link to="/">
      <h1><span>Vue</span>Movies</h1>
    </router-link>
  </header>
  <main>
    <router-view />
  </main>
  </div>
</template>



<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fira Sans', sans-serif;
  text-align: center;
}

body {
  background-color: #35495E;
}

a {
  text-decoration: none;
}

a:hover{
  text-decoration: none;
}

header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  background-color: #2C3D4E;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
}
header h1 {
    color: #FFF;
    font-size: 28px;
}
  header h1 span {
      color: #42B883;
    }
</style>
