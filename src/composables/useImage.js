import { ref } from "vue";

export function useImage(){
    const imageUrl=ref('https://image.nanobots.website')

    return {imageUrl};
}