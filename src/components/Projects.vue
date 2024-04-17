<template>
  <div class="wrapper">
    <section class="projects-grid mb-1" id="projects">
      <div v-for="portfolioItem in filteredPortfolioItems" :key="portfolioItem.id" @click="openmodal(portfolioItem)"
        class="project-card border-radius bg-white p-1" id="project">
        <h3 class="fs-tertiary-heading">{{ portfolioItem.title }}</h3>
        <div class="project-img">
          <img :src="portfolioItem.cover_image" alt="">
        </div>
      </div>

      <div id="projectModal" v-show="modal" class="modal" @click="closemodal()">
        <div class="modal-open border-radius outline bg-white p-1">
          <div class="modal-top mb-1">
            <div class="modal-title bg-light-gray border-radius p-1">
              <h2 class="fs-secondary-heading fw-semi-bold">{{ selectedPortfolioItem.title }}</h2>
            </div>
            <div class="modal-info outline-black border-radius p-1">
              <p class="fs-body">{{ selectedPortfolioItem.description }}</p>
            </div>
            <div class="year border-radius bg-light-gray p-1">
              <img src="../assets/GRAPHICS/icon-clock.svg" alt="">
              <h2 class="fs-primary-heading text-pink fw-semi-bold">{{ selectedPortfolioItem.year }}</h2>
            </div>
          </div>
          <div class="modal-content">
            <!-- Loop through modal_content object to display all images -->
            <img v-for="(image, index) in selectedPortfolioItem.modal_content" :key="index"
              class="border-radius align-center" :src="image" alt="">

            <!-- Extra container for projects with additional content -->
            <div v-if="selectedPortfolioItem.extraContent && selectedPortfolioItem.extraContent.hasLink"
              class="extra-content modal-title bg-pink border-radius p-1">
              <a :href="selectedPortfolioItem.extraContent.linkUrl" target="_blank"><h2 class="fs-secondary-heading fw-semi-bold text-white">{{
                selectedPortfolioItem.extraContent.linkText }}</h2></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const modal = ref(false)
const selectedPortfolioItem = ref({})

const openmodal = (portfolioItem) => {
  selectedPortfolioItem.value = portfolioItem
  modal.value = true
}

const closemodal = () => {
  modal.value = false
}

import getPortfolio from '@/modules/getPortfolio'
const { portfolioItems } = getPortfolio()

const selectedCategory = ref('')

const filteredPortfolioItems = computed(() => {
  if (selectedCategory.value == '') {
    return portfolioItems.value
  }
  else {
    return portfolioItems.value.filter(item => item.category == selectedCategory.value)
  }
})
</script>



<style lang="scss" scoped>
.link-card {
  background-color: aqua;
}

/* Projects */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5em;
}

.project-card {
  aspect-ratio: 1 / 1;
  width: 100%;
  transition: 0.3s ease-in-out;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.project-card:hover {
  transform: scale(1.05);
  background-color: var(--clr-Pink);
  transition: 0.3s ease-in-out;
  cursor: pointer;
}

.project-img {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
}

.project-img img {
  width: 80%;
  object-fit: cover;
}

/* Modal */
.modal {

  position: fixed;
  z-index: 5;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.3);
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.modal-open {
  background-color: #fefefe;
  margin: 10% auto;
  max-width: 1420px;
  overflow: auto;
}

.modal-top {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;
  align-items: center;
  gap: 1.5em;
}

.modal-title {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.modal-info {
  height: 100%;
}

.year {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.year img {
  width: 80px;
  height: auto;
}

.cross {
  display: block;
  width: 30px;
  height: 4px;
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: var(--clr-Black, #191919);
}

.modal-content {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.5em;
}

.modal-content img {
  height: 100%;
  width: 100%;
  aspect-ratio: 1 / 1;
}

.extra-content {
  aspect-ratio: 1 / 1;
}

@media (max-width: 1000px) {
  .modal-top {
    display: flex;
    flex-direction: column;
    gap: 1.5em;
  }

  .modal-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5em;
  }
}

@media (max-width: 768px) {

  /* Projects Grid */
  .projects-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .project-card {
    aspect-ratio: 1 / 1;
    width: 100%;
  }

  .photo img {
    aspect-ratio: 1 / 1;
    object-fit: cover;
  }

  .modal-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5em;
  }
}
</style>
