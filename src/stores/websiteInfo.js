import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useWebsiteInfoStore=defineStore('websiteInfo',()=>{
    const websiteInfo=ref({});
    function storeWebsiteData(data){
        websiteInfo.value=data;
    }

    return {websiteInfo,storeWebsiteData};
})