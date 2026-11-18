<template>
    <Carousel :filterMovie="filterMovie" :filterDate="filterDate"></Carousel>
    <PopularMovie :movie="popularMovie"></PopularMovie>
    <NowShowing :movie="nowShowingMovie"></NowShowing>
    <Coming :movie="comingMovie"></Coming>
    <Model></Model>
</template>
<script setup>
import Carousel from '@/components/Home/Carousel.vue';
import Coming from '@/components/Home/Coming.vue';
import Model from '@/components/Home/Model.vue';
import NowShowing from '@/components/Home/NowShowing.vue';
import PopularMovie from '@/components/Home/PopularMovie.vue';
import { initTemplateScripts } from '@/assets/customer/js/script';
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { useUrl } from '@/composables/useUrl';
import { useLoadingStore } from '@/stores/loading';
import { useHomeFilterStore } from '@/stores/homeFilter';
import { useHomeMovieStore } from '@/stores/homeMovie';

const {main_api}=useUrl();
const loadingStore=useLoadingStore();
const homeFilterStore=useHomeFilterStore();
const homeMovieStore=useHomeMovieStore();
const popularMovie=ref([]);
const nowShowingMovie=ref([]);
const comingMovie=ref([]);
const filterMovie=ref([]);
const filterDate=ref([]);

async function fetchData(){
    try {
        let fetchStatus=homeMovieStore.checkFetch();
        if (fetchStatus) {
            const data = homeMovieStore.homeMovie;
            popularMovie.value=data.popular;
            nowShowingMovie.value=data.now;
            comingMovie.value=data.coming;
        }else{
            const response=await axios.get(`${main_api.value}/api/home/movie`);
            const data = await response.data;
            homeMovieStore.storeHomeMovie(data);
            homeMovieStore.changeFetchStatus(true);
            popularMovie.value=data.popular;
            nowShowingMovie.value=data.now;
            comingMovie.value=data.coming;
        }
    } catch (error) {
        console.error('Error uploading image:', error);
    }
}

async function getFilterData() {
    try {
        let fetchStatus=homeFilterStore.checkFetch();
        if (fetchStatus) {
            filterMovie.value=homeFilterStore.filterMovie;
            filterDate.value=homeFilterStore.filterDate; 
        }else{
            const response=await axios.get(`${main_api.value}/api/home/filter`);
            const data = await response.data;
            homeFilterStore.storeFilterMovie(data.movie);
            homeFilterStore.storeFilterDate(data.date);
            homeFilterStore.changeFetchStatus(true)
            filterMovie.value=data.movie;
            filterDate.value=data.date;
        }
    } catch (error) {
        console.error('Error uploading image:', error);
    }
}

onMounted(()=>{
    try {
        loadingStore.loadingTrue();
        fetchData();
        getFilterData();
    } finally {
        loadingStore.loadingFalse();
    }
    initTemplateScripts();
})

</script>