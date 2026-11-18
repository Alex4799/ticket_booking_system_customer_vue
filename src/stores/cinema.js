import { defineStore } from "pinia";
import { ref } from "vue";

export const useCinemaStore = defineStore('cinema',()=>{
    const cinema=ref([]);
    function storeCinemaData (data){
        cinema.value=data;
    }
    return {cinema,storeCinemaData};
})