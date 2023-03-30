<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";
import Confirm from "./icons/Confirm.vue";
import Arrow from "./icons/Arrow.vue";
import "swiper/css";
import "swiper/css/navigation";

const position = ref(0);
const slidesToShow = ref(0);

onMounted(() => {
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
});
onBeforeUnmount(() => {
    window.removeEventListener("resize", this.updateSlidesToShow);
});

const props = defineProps({
    links: Array,
});

function move(direction) {
    position.value -= direction * 320;
    console.log(props.links.length);
    console.log(position.value);
    if (position.value < (props.links.length - slidesToShow.value) * -320) {
        position.value = 0;
    } else if (position.value > 0) {
        position.value = (props.links.length - slidesToShow.value) * -320;
    }
}
function updateSlidesToShow() {
    const width = window.innerWidth;
    if (width >= 1440) {
        slidesToShow.value = 4;
    } else if (width >= 1080) {
        slidesToShow.value = 3;
    } else if (width >= 760) {
        slidesToShow.value = 2;
    } else if (width >= 360) {
        slidesToShow.value = 1;
    }
}
</script>
<template>
    <div class="slider">
        <div
            class="slider__wrapper"
            v-bind:style="{ transform: `translateX(${position}px)` }"
        >
            <div class="slider__item" v-for="link in links" :key="link">
                <img class="slide-img" :src="link.download_url" alt="" />
                <div class="select">
                    <p class="select-text">Select:</p>
                    <Confirm class="slide-confirm" :item="link" />
                </div>
            </div>
        </div>
        <button class="slider__button slider__button--prev" @click="move(-1)">
            <Arrow />
        </button>
        <button class="slider__button slider__button--next" @click="move(1)">
            <Arrow />
        </button>
    </div>
</template>

<style>
.slider {
    position: relative;
    overflow: hidden;
    max-width: 300px;
    height: 340px;
    margin: 0 auto;
}
.slider__wrapper {
    display: flex;
    transition: transform 0.5s;
    gap: 20px;
}
.slider__item {
    width: 300px;
    height: 340px;
}
.slider__button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: transparent;
    border: none;
    color: white;
    width: 30px;
    height: 30px;
    font-size: 2rem;
    cursor: pointer;
    padding: 0;
    z-index: 1;
}
.slider__button svg {
    fill: white;
    width: 30px;
    transition: 0.3s;
}

.slider__button svg:hover {
    fill: black;
    width: 30px;
}
.slider__button--prev {
    left: 5px;
}

.slider__button--next {
    right: 5px;
    transform: rotate(180deg);
}
.slide-img {
    height: 300px;
    width: 300px;
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

@media (min-width: 760px) {
    .slider {
        max-width: 620px;
    }
}
@media (min-width: 1080px) {
    .slider {
        max-width: 940px;
    }
}
@media (min-width: 1440px) {
    .slider {
        max-width: 1260px;
    }
}
</style>
