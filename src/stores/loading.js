import { defineStore } from "pinia";
import { ref } from "vue";

export const useLoadingStore=defineStore('loading',()=>{
    const loading=ref(false);

    function loadingTrue(){
        loading.value=true;
    }

    function loadingFalse(){
        loading.value=false;
    }

    return {loading,loadingTrue,loadingFalse}
})