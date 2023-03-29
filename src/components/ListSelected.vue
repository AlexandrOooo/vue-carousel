<script setup>
import { usePtohoGallery } from "../stores/gallery";
import { storeToRefs } from "pinia";
const store = usePtohoGallery();

const { selectedPhotos } = storeToRefs(store);
</script>
<template>
    <div class="list-block">
        <h3 class="list-title">Посилання на обрані:</h3>
        <TransitionGroup name="list" tag="ul">
            <li class="list-item" v-for="item in selectedPhotos" :key="item.id">
                {{ item.url }}
            </li>
        </TransitionGroup>
    </div>
</template>
<style scoped>
ul {
    list-style-type: none;
    padding: 0;
}
.list-block {
    margin: 0 auto;
    max-width: 1000px;
    margin-top: 30px;
}
.list-title {
    margin-bottom: 15px;
    font-size: 40px;
    line-height: 46px;
}
.list-item {
    font-size: 20px;
    margin: 10px 0;
}
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
@media (max-width: 1080px) {
    .list-block {
        max-width: 760px;
    }
}
@media (max-width: 760px) {
    .list-block {
        max-width: 600px;
    }
    .list-title {
        margin-bottom: 10px;
        font-size: 30px;
        line-height: 36px;
    }
    .list-item {
        font-size: 16px;
        margin: 10px 0;
    }
}
</style>
