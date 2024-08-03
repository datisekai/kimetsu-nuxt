<template>
  <main class="main">
    <Header />
    <el-main class="container">
      <NuxtPage />
    </el-main>
  </main>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  color: #1d1d1d;
  touch-action: pan-x pan-y;
}

.main {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .container {
    flex: 1;
    display: flex;
  }
}
</style>
