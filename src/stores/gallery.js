import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const usePtohoGallery = defineStore("gallery", () => {
    const photosGallery = ref([]);
    const selectedPhotos = ref([]);

    function addSelected(payload) {
        const findFavorite = selectedPhotos.value.find(
            (selected) => selected.id === payload.id
        );

        if (!findFavorite) {
            selectedPhotos.value.push(payload);
        } else {
            selectedPhotos.value = selectedPhotos.value.filter(
                (selected) => selected.id !== payload.id
            );
        }
        console.log(selectedPhotos.value);
    }

    async function fetchPHotosGallery() {
        try {
            const { data } = await axios.get("https://picsum.photos/v2/list");
            photosGallery.value = data;
            console.log(data);
            console.log(photosGallery.value);
        } catch (e) {
            console.log(e);
        }
    }

    return { photosGallery, selectedPhotos, fetchPHotosGallery, addSelected };
});
