<template>
  <div class="wrapper">
    <div class="video-cv bg-black border-radius mb-1">
        <iframe class="border-radius" src="https://www.youtube.com/embed/v5AiEMuLreg" title="Video CV" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.video-cv{
  aspect-ratio: 16 / 9;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;  
}

.video-cv iframe{
  width: 100%;
  height: 100%;
}
</style>