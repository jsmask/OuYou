<template>
  <div class="main">
      <div class="box">
          <img src="https://assets.codepen.io/4755006/internal/avatars/users/default.png?format=auto&height=512&version=1594619781&width=512" alt="head">
          <svg viewBox="0,0,300,300">
              <defs>
                  <path id="fly-box-path" d="M0 0 L300 0 L300 300 L0 300 Z" fill="none" />
                  <radialGradient
                        id="border-gradient"
                        cx="50%"
                        cy="50%"
                        r="50%"
                        fx="100%"
                        fy="50%"
                        fr="0%"
                    >
                        <stop offset="0%" stop-color="white"/>
                        <stop offset="100%" stop-color="red"/>
                    </radialGradient>   
                  <mask id="fly-box-mask">
                      <circle r="100" cx="0" cy="0" fill="url(#border-gradient)">
                          <animateMotion dur="2s" path="M0 0 L300 0 L300 300 L0 300 Z" rotate="auto" repeatCount="indefinite" />
                      </circle>
                  </mask>
              </defs>
              <use href="#fly-box-path" stroke-width="12" stroke="#556"></use>
              <use href="#fly-box-path" stroke-width="12" stroke="#eff24d" mask="url(#fly-box-mask)"></use>
          </svg>
      </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  width: 100%;
  min-height: 100%;
  padding: 0;
  text-align: center;
  overflow: hidden;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-image: radial-gradient(circle at center center, transparent,rgb(0,0,0)),linear-gradient(114deg, rgba(59, 59, 59,0.05) 0%, rgba(59, 59, 59,0.05) 50%,rgba(63, 63, 63,0.05) 50%, rgba(63, 63, 63,0.05) 100%),linear-gradient(186deg, rgba(173, 173, 173,0.05) 0%, rgba(173, 173, 173,0.05) 50%,rgba(237, 237, 237,0.05) 50%, rgba(237, 237, 237,0.05) 100%),linear-gradient(98deg, rgba(191, 191, 191,0.05) 0%, rgba(191, 191, 191,0.05) 50%,rgba(119, 119, 119,0.05) 50%, rgba(119, 119, 119,0.05) 100%),linear-gradient(58deg, rgba(95, 95, 95,0.05) 0%, rgba(95, 95, 95,0.05) 50%,rgba(189, 189, 189,0.05) 50%, rgba(189, 189, 189,0.05) 100%),linear-gradient(259deg, rgba(31, 31, 31,0.05) 0%, rgba(31, 31, 31,0.05) 50%,rgba(110, 110, 110,0.05) 50%, rgba(110, 110, 110,0.05) 100%),linear-gradient(41deg, rgba(142, 142, 142,0.05) 0%, rgba(142, 142, 142,0.05) 50%,rgba(84, 84, 84,0.05) 50%, rgba(84, 84, 84,0.05) 100%),linear-gradient(134deg, rgba(96, 96, 96,0.05) 0%, rgba(96, 96, 96,0.05) 50%,rgba(198, 198, 198,0.05) 50%, rgba(198, 198, 198,0.05) 100%),linear-gradient(46deg, rgba(12, 12, 12,0.05) 0%, rgba(12, 12, 12,0.05) 50%,rgba(71, 71, 71,0.05) 50%, rgba(71, 71, 71,0.05) 100%),radial-gradient(circle at center center, hsl(227,81%,21%),hsl(227,81%,21%));
}
.box{
    width: 12em;
    height: 12em;
    position: relative;
    background: white;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    svg{
        width: 100%;
        height: 100%;
        position: absolute;
        display: block;
        top: 0;
        left: 0;
    }
}
</style>