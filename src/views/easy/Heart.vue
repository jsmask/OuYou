<template>
  <div class="main">
    <div class="heart-icon">
      <input type="checkbox" />
      <svg
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          class="heart"
          d="M512 854.9c-7.7 0-14.3-2.7-19.6-8.1L213.8 578.1c-3-2.3-7-6.3-12.3-11.6-5.2-5.4-13.4-15.1-24.8-29.2-11.3-14.2-21.4-28.6-30.3-43.6-8.9-14.8-16.9-32.9-23.8-54-7-21.1-10.5-41.7-10.5-61.6 0-65.4 18.9-116.7 56.7-153.6s90-55.4 156.7-55.4c18.5 0 37.3 3.2 56.4 9.6 19.2 6.4 37.1 15 53.6 25.9 16.5 10.9 30.7 21 42.6 30.6 11.9 9.5 23.2 19.6 33.9 30.3 10.7-10.7 22.1-20.8 33.9-30.3 11.9-9.5 26.1-19.7 42.6-30.6 16.5-10.9 34.4-19.5 53.6-25.9 19.2-6.4 38-9.6 56.4-9.6 66.7 0 118.9 18.5 156.7 55.4 37.8 36.9 56.7 88.1 56.7 153.6 0 65.8-34.1 132.8-102.3 200.9l-278 267.8c-5.3 5.4-11.9 8.1-19.6 8.1z"
        ></path>
      </svg>
      <div class="heart-circle"></div>
    </div>
  </div>
</template>

<style scoped>
.main {
  width: 100%;
  min-height: 100%;
  padding: 0px 0 0px;
  text-align: center;
  overflow: hidden;
  font-size: 14px;
  background-image: linear-gradient(
    109.5deg,
    rgb(245, 248, 198) 11.2%,
    rgb(255, 227, 198) 100.2%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}
.heart-icon {
  width: var(--size);
  cursor: pointer;
  position: relative;

  --skin-color: rgb(245, 98, 110);
  --gray-color: rgb(165, 165, 165);
  --size: 160px;
  --path-dasharray: 3600;
}
.heart-icon > svg {
  width: 100%;
  position: relative;
  z-index: 9;
}
.heart-icon > input[type="checkbox"] {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  opacity: 0;
}
.heart-icon > input[type="checkbox"]:checked + svg {
  animation: touch 0.5s forwards ease-in;
}
.heart-icon > input[type="checkbox"]:checked + svg > .heart {
  animation: run 1.05s 0.3s forwards linear;
}
.heart-icon > input[type="checkbox"]:checked ~ .heart-circle {
  animation: circle-move 1.25s 0.15s linear;
}
.heart {
  fill: var(--gray-color);
  stroke: var(--skin-color);
  stroke-dasharray: var(--path-dasharray);
  stroke-width: 50px;
  stroke-dashoffset: var(--path-dasharray);
  stroke-linecap: round;
}
.heart-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  width: 1px;
  height: 1px;
  border-radius: 50%;
  background-color: transparent;
}

@keyframes circle-move {
  0% {
    box-shadow: -10px 0 0 3px var(--gray-color), 0 -10px 0 3px var(--gray-color),
      0 10px 0 3px var(--gray-color), 10px 0 0 3px var(--gray-color),
      7px 7px 0 3px var(--gray-color), -7px 7px 0 3px var(--gray-color),
      7px -7px 0 3px var(--gray-color), -7px -7px 0 3px var(--gray-color);
    opacity: 1;
  }

  45% {
    box-shadow: -120px 0 0 6px var(--skin-color),
      0 -120px 0 6px var(--skin-color), 0 120px 0 6px var(--skin-color),
      120px 0 0 6px var(--skin-color), 90px 90px 0 6px var(--skin-color),
      -90px 90px 0 6px var(--skin-color), 90px -90px 0 6px var(--skin-color),
      -90px -90px 0 6px var(--skin-color);
    opacity: .8;
  }
  80% {
    box-shadow: -120px 0 0 9px var(--skin-color),
      0 -120px 0 9px var(--skin-color), 0 120px 0 9px var(--skin-color),
      120px 0 0 9px var(--skin-color), 90px 90px 0 9px var(--skin-color),
      -90px 90px 0 9px var(--skin-color), 90px -90px 0 9px var(--skin-color),
      -90px -90px 0 9px var(--skin-color);
    opacity: .5;
  }
  100% {
    box-shadow: -120px 0 0 3px var(--skin-color),
      0 -120px 0 3px var(--skin-color), 0 120px 0 3px var(--skin-color),
      120px 0 0 3px var(--skin-color), 90px 90px 0 3px var(--skin-color),
      -90px 90px 0 3px var(--skin-color), 90px -90px 0 3px var(--skin-color),
      -90px -90px 0 3px var(--skin-color);
    opacity: 0;
  }
}


@keyframes touch {
  0%,
  50%,
  100% {
    transform: scale(1);
  }
  25% {
    transform: scale(0.75);
  }
  75% {
    transform: scale(1.25);
  }
}

@keyframes run {
  0% {
    stroke-dashoffset: var(--path-dasharray);
  }

  80% {
    stroke-dashoffset: 0;
    fill: var(--gray-color);
  }
  100% {
    stroke-dashoffset: 0;
    fill: var(--skin-color);
  }
}
</style>