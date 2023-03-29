<script setup>
import { onMounted } from "vue";
import { usePtohoGallery } from "../stores/gallery";
import Gallery from "../components/Gallery.vue";
import ListSelected from "../components/ListSelected.vue";
import { storeToRefs } from "pinia";
const store = usePtohoGallery();

const { photosGallery } = storeToRefs(store);
onMounted(() => {
    store.fetchPHotosGallery();
});
</script>

<template>
    <Gallery :links="photosGallery" />
    <ListSelected />
</template>
