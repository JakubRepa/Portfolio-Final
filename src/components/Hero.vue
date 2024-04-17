<template>
  <div class="wrapper">
    <section class="hero-section mb-1">
      <div class="left-hero border-radius bg-light-gray p-1">
                <h2 class="hello fs-secondary-heading fw-semi-bold text-black">Hello, I'm</h2>
            <div class="hero-bottom">
                <h1 class="fs-primary-heading text-black">Jakub Repa</h1>
                <h2 class="fs-secondary-heading fw-semi-bold text-black"><span class="text-pink">Multimedia Designer</span> from
                <span class="text-pink">Slovakia</span>, with aim to deliver solutions that
                <span class="text-pink">resonates</span> with <span class="text-pink">people</span>.
                </h2>
            </div>
        </div>
        <div class="right-hero border-radius outline">
            <img src="../assets/GRAPHICS/hero-image.svg" alt="multimedia and marketing related vector illustration pictograms">
        </div>
    </section>
  </div>
</template>

<script setup>
    
</script>

<style lang="scss" scoped>
    /* Hero Section */
.hero-section{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5em;
  min-height: 85vh;
}

.left-hero {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}


.right-hero {
  display: flex;
  justify-content: center;
  align-items: center;
}

.right-hero img{
  object-fit: cover;  
  height: 100%;
}

@media (max-width: 1000px){
  .hero-section{
    display: flex;
    flex-direction: column;
    height: auto;
    gap: 1.5em;
  }
  
  .left-hero{
    width: 100%;
    height: auto;
  }

  .hello{
    margin-bottom: 2.5em;}

  .right-hero{
    margin: 0 auto;
    height: auto;
    width: 100%;
  }
}

@media (max-width: 768px){
 /* Hero Section */
 .hero-section{
    display: flex;
    flex-direction: column;
    gap: 1.5em;
    height: auto;
  }

  .left-hero{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .hello{
    margin-bottom: 2.5em;
  }

  .right-hero{
    display: flex;
  }  
}
</style>