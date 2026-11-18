import { defineStore } from "pinia";
import { ref } from "vue";

export const useHomeMovieStore=defineStore('homeMovie',()=>{
    const homeMovie=ref([]);
    const fetchStatus=ref(false);
    const lastFetched=ref(null);
    const CACHE_TIME = 30 * 60 * 1000;

    function checkFetch() {
        if (!fetchStatus.value || !lastFetched.value) {
            return false;
        }

        return Date.now() - lastFetched.value < CACHE_TIME;
    }


    function changeFetchStatus(status){
        fetchStatus.value=status;
        if (status) {
            lastFetched.value = Date.now();
        }
    }

    function storeHomeMovie(data){
        homeMovie.value=data;
    }

    return {homeMovie,checkFetch,changeFetchStatus,storeHomeMovie}
});