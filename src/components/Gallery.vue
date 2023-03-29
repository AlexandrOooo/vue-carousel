<script setup>
import { onMounted, reactive } from "vue";
import Swiper, { Navigation } from "swiper";
import Confirm from "./icons/Confirm.vue";
import "swiper/css";
import "swiper/css/navigation";

const state = reactive({
    swiper: null,
});

onMounted(() => {
    state.swiper = new Swiper(".swiper-container", {
        modules: [Navigation],
        loop: true,
        spaceBetween: 30,
        slidesPerView: 1,
        speed: 400,
        breakpoints: {
            760: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1080: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1320: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});

const props = defineProps({
    links: Array,
});
</script>
<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="link in links" :key="link">
                <img class="slide-img" :src="link.download_url" alt="" />
                <div class="select">
                    <p class="select-text">Select:</p>
                    <Confirm class="slide-confirm" :item="link" />
                </div>
            </div>
        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
</template>

<style>
.swiper-container {
    width: 100%;
    overflow: hidden;
    margin: 0 auto;
    height: 440px;
}
.swiper-slide {
    max-width: 100%;
    height: 100%;
    position: relative;
}
.slide-img {
    height: 90%;
    width: 100%;
}
.slide-confirm {
    z-index: 1000;
    position: absolute;
    right: 0px;
    bottom: 0px;
    width: 30px;
    height: 30px;
    cursor: pointer;
}
.slide-confirm path {
    fill: rgb(95, 85, 85);
}
.slide-confirm.active {
    background-color: black;
    border-radius: 50%;
}
.slide-confirm.active path {
    fill: white;
}
.select {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
@media (min-width: 480px) {
    .swiper-container {
        max-width: 300px;
        height: 340px;
    }
    .swiper-slide {
        max-width: 300px;
        height: 340px;
    }
    .slide-img {
        height: 300px;
    }
}
@media (min-width: 760px) {
    .swiper-container {
        max-width: 620px;
    }
}
@media (min-width: 1080px) {
    .swiper-container {
        max-width: 960px;
    }
}
@media (min-width: 1440px) {
    .swiper-container {
        max-width: 1320px;
    }
}
</style>
