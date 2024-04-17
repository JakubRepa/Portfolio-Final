<template>
  <div class="wrapper">
    <footer class="border-radius p-1 outline" id="contact">
            <h3 class="fs-tertiary-heading">Let's connect</h3>
            <address>
                <p class="fs-nav"><a href="mailto:jjakub.repa@gmail.com">jjakub.repa@gmail.com</a></p>
                <p class="fs-nav"><a href="tel:+45 52 90 12 90">+45 52 90 12 90</a></p>
                <a href="https://www.instagram.com/jakub_repa" target="_blank">
                    <p class="fs-nav">Instagram</p>
                </a>
                <a href="https://www.linkedin.com/in/jakub-repa" target="_blank">
                    <p class="fs-nav">Linkedin</p>
                </a>
            </address>
            <img src="../assets/GRAPHICS/link.svg" alt="">
    </footer>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
/* footer */
footer{
  background-color: var(--clr-Black, #191919);
  color: var(--clr-White, #fff);
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  min-height: 12em;
}

footer address {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2em;
}

footer address a{
  transition: 0.3s ease;
}

footer address a:hover{
  color: var(--clr-Pink);
}

@media (max-width: 1000px){
    footer{
    display: flex;
    flex-direction: column;
    gap: 1.5em;
    height: auto;
  }
}

@media (max-width: 768px){
    /* Footer */
  footer{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: start;
    gap: 1em;
  }

  footer address{
    display: inline;
    font-style: normal;
    text-align: left;
    gap: 2em;
  }
}
</style>