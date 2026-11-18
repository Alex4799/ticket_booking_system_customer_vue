import { ref } from "vue";

export function useUrl(){
    const main_api=ref('http://127.0.0.1:8000')
    const imageUrl=ref('https://image.nanobots.website')

    return {imageUrl,main_api};
}