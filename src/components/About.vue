<template>
  <div class="wrapper">
  <section class="about-grid mb-1" id="about">

    <div class="about border-radius bg-light-gray p-1">
      <h2 class="fs-secondary-heading fw-semi-bold mb-1">About me and what I do</h2>
      <div class="about-split">
        <div class="left">
          <h3 class="fs-tertiary-heading">What is my story?</h3> <hr>
            <p class="fs-body">
                  It all started as passion for drawing during my childhood. This led me to study
                  Graphic Design at high school and ultimately resolved in pursuing degree in Multimedia Design at
                  business academy in Denmark. <br><br>
                  As for now I do mostly Graphic Design, but thanks to evolution of my personality and interests,
                  I also found love for Marketing, Web Design, Visual Storytelling, Video Production and many more
                  things.
            </p>
        </div>
      
        <div class="right">
          <h3 class="fs-tertiary-heading">What is Multimedia Design?</h3> <hr>
            <p class="fs-body">
                  Businesses are moving their audience engagement and advertising to online platforms which emphasize visual content
                  that informs, educates and entertains. This is done through different media formats such as text, images, graphics, audio and video. 
                  <br><br> For me personally, it means to deliver impactful message in most suitable format and way to the people at right place and right time.    
            </p>
        </div>
      </div>
    </div>

    <div class="statement outline border-radius p-1 bg-white">
        <h2 class="fs-secondary-heading text-pink fw-semi-bold">In short I’m all about design, strategy and creativity
        </h2>
    </div>

    <div class="check-video border-radius bg-black outline p-1">
        <h2 class="fs-secondary-heading mb-1 text-white fw-semi-bold">Check this video CV</h2>
        <p class="fs-body text-white">I believe that video is one of the most powerful and versatile way to deliver any
            message whether for business or individual. If you want to know me a bit more in depth please
            feel free to watch this video, about how I got to do what I do.
        </p>
    </div>
  </section>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
/* About Section */
.about-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-areas: 
  "about about statement"
  "about about check-video"
}

.about{
  grid-area: about;
}

.about-split {
  display: flex;
  gap: 1.5rem;
}

.about-split>* {
  flex: 1;
}

.about-split .left {
  margin-bottom: 0;
}

.statement {
  grid-area: statement;
}

.check-video {
  grid-area: check-video;
}

.check-video{
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column; 
  justify-content: space-between  ;
} 

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

@media (max-width: 1000px){
  .about-split{
    display: flex;
    flex-direction: column;
    gap: 1.5em;
  }
}

@media (max-width: 768px){
  .about-grid{
    display: flex;
    flex-direction: column;
    gap: 1.5em;
  }

  .about-split{
    display: flex;
    flex-direction: column;
    gap: 1.5em;
  }
}
</style>