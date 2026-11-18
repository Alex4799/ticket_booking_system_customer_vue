import { defineStore } from "pinia";
import { ref } from "vue";

export const useHomeFilterStore = defineStore('homeFilter',()=>{
    const fetchStatus = ref(false);
    const filterMovie = ref([]);
    const filterDate = ref([]);
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

    function storeFilterMovie(data){
        filterMovie.value=data;
    }

    function storeFilterDate(data){
        filterDate.value=data;
    }

    return {checkFetch,filterMovie,filterDate,changeFetchStatus,storeFilterMovie,storeFilterDate}

})