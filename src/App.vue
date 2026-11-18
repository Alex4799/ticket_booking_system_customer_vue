<template>
  <Nav></Nav>
  <RouterView></RouterView>
  <Footer></Footer>
</template>

<script setup>
import { RouterView } from 'vue-router';
import Nav from '@/components/Nav.vue';
import Footer from '@/components/Footer.vue';
import { onMounted } from 'vue';
import axios from 'axios';
import { useWebsiteInfoStore } from '@/stores/websiteInfo';
import { useLoadingStore } from '@/stores/loading.js';
import { useUrl } from '@/composables/useUrl.js';
import { useCinemaStore } from './stores/cinema.js';

const {storeWebsiteData} = useWebsiteInfoStore();
const {storeCinemaData}= useCinemaStore();
const loadingStore = useLoadingStore();
const {main_api}=useUrl();

async function getWebsiteData(){
    try {
        loadingStore.loadingTrue();
        const response=await axios.get(`${main_api.value}/api/get/website`);
        if (response.status==200) {
            storeWebsiteData(response.data);
        }
    } catch (error) {
        console.error('Error uploading image:', error);
    } finally{
      loadingStore.loadingFalse();
    }
}

async function getCinemaData() {
    try {
        loadingStore.loadingTrue();
        const response=await axios.get(`${main_api.value}/api/get/cinema`)
        if (response.status==200) {
            storeCinemaData(response.data);
        }
    } catch (error) {
        console.error('Error uploading image:', error);
    }finally{
        loadingStore.loadingFalse();
    }
}
onMounted(()=>{
    getWebsiteData();
    getCinemaData();
})
</script>
