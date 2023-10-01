<template>
<div class="w-full fixed h-screen z-40 top-0 px-3 flex justify-center items-center bg-black/10 backdrop-blur-sm">
  <Dialog :visible="true" :closable="false" :modal="true" :show-header="false" :unstyled="true">
    <div class="custom-loader"></div>
  </Dialog>
</div>
</template>


<style>
.custom-loader {
    width: 50px;
    height: 50px;
    display: grid;
}
.custom-loader::before,
.custom-loader::after {    
    content:"";
    grid-area: 1/1;
    --c: radial-gradient(farthest-side,#9628f0 92%,#0000);
    background: 
      var(--c) 50%  0, 
      var(--c) 50%  100%, 
      var(--c) 100% 50%, 
      var(--c) 0    50%;
    background-size: 12px 12px;
    background-repeat: no-repeat;
    animation: s2 2s infinite;
}
.custom-loader::before {
  margin:4px;
  filter:hue-rotate(45deg);
  background-size: 8px 8px;
  animation-timing-function: linear
}

@keyframes s2{ 
  100%{transform: rotate(.5turn)}
}
</style>