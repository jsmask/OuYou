<template>
  <div class="main">
    <h1>
      404
      <small>not fount</small>
    </h1>
  </div>
</template>

<style scoped>
.main {
  width: 100%;
  min-height: 100%;
  padding: 0px 0 0px;
  text-align: center;
  background-color: #0c0c0c;
  overflow: hidden;
  font-size: 14px;
  background-image: radial-gradient(
    circle farthest-corner at 50.3% 44.5%,
    rgb(29, 28, 28) 0%,
    rgb(26, 14, 14) 100.2%
  );
  display: flex;
  justify-content: center;
  align-items: center;
}
h1 {
  font-size: 12em;
  font-weight: 800;
  letter-spacing: 0.05em;
  text-align: center;
  color: #e4e8f0;
  text-shadow: 0 0 0.025em #fff, 0 0 0.05em #fff, 0 0 0.1em #6d7ee4,
    0 0 0.2em #6d7ee4, 0 0 0.25em #6d7ee4, 0 0 0.75em #6d7ee4,
    0 0 1.25em #6d7ee4, 0 0 1.75em rgba(119, 72, 248, 0.5);
  font-family: "Righteous", sans-serif;
}
small {
  font-family: inherit;
  font-size: 0.25em;
  display: block;
  margin-top: -0.05em;
  text-transform: uppercase;
}
</style>