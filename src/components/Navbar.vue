<template>
  <div class="wrapper">
    <nav class="navbar bg-black outline border-radius mb-1">
      <a href="" class="logo-link"><img src="../assets/GRAPHICS/Jakub-Repa-logo.svg" alt="Jakub Repa Logo" class="logo" /></a>
        <ul :class="{ 'nav-menu': true, 'active': isMenuOpen }">
          <li class="nav-item"><a @click="toggleMenu" href="#projects" class="fs-nav nav-link">Work</a></li>
          <li class="nav-item"><a @click="toggleMenu" href="#about" class="fs-nav nav-link">About</a></li>
          <li class="nav-item"><a href="https://drive.google.com/file/d/1GwfGDHi0XcHrO6qqBgjaQwmimCSFmRSU/view?usp=sharing" target="_blank" class="fs-nav nav-link">Resumé</a></li>
          <li class="nav-item"><a @click="toggleMenu" href="#contact" class="fs-nav nav-link">Contact</a></li>
        </ul>
        <div class="hamburger" :class="{ 'active': isMenuOpen }" @click="toggleMenu">
          <span :class="{ 'bar': true, 'active': isMenuOpen }" v-for="n in 3" :key="n"></span>
        </div>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style lang="scss" scoped>
/* Navigation */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  z-index: 1000;
}

.nav-menu{ 
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  border-radius: 30px;
  gap: 2rem;
  transition: 0.3s;
}

.navbar img {
  width: 64px;
  height: auto;
}

.nav-link{
  transition: 0.3s ease;
  text-decoration: none;
  color: var(--clr-White, #fff);
}

.nav-link:hover{
  color: var(--clr-Pink);
}

.nav-menu.active{
  left: 0;
  padding: 1em ;
}

.hamburger{
  display: none;
}

@media (max-width: 768px){
  /* Navigation */
  .nav-menu{
    position: absolute;
    top: 0;
    left: -100%;
    background-color: var(--clr-Black);
    border: 2px solid var(--clr-White, #fff);
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0;
    transition: 0.3s;
  }

  .nav-item{
    margin: 1em 0;
  }

  .hamburger{
    position: relative;
    display: block;
    cursor: pointer;
    z-index: 500;
    transition: 0.3s;
  }

  .hamburger.active .bar:nth-child(2){
    opacity: 0;
  }
  .hamburger.active .bar:nth-child(1){
    transform: translateY(8px) rotate(45deg);
  }
  .hamburger.active .bar:nth-child(3){
    transform: translateY(-8px) rotate(-45deg);
  }

  .bar{
    z-index: 550;
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-color: var(--clr-White, #fff);
  }
}
</style>
