<template>
    <section id="home" class="position-relative">
        <div>
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div v-if="loadingStore.loading" class="carousel-inner cover-carousel-inner">
                    <div class="carousel-item active" data-bs-interval="3000" >
                        <img src="./../../assets/image/default.webp" alt="" class="d-block w-100">
                    </div>
                </div>
                <div v-else class="carousel-inner cover-carousel-inner">
                    <div class="carousel-item" 
                    :class="{ active: index === 0 }" 
                    data-bs-interval="3000" 
                    v-for="(image, index) in coverImage" 
                    :key="image"
                    >
                        <img :src="imageUrl + '/website/' + image" class="d-block w-100" alt="...">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        <div class="container-lg" id="search-ticket">
            <div class="row mx-auto align-items-center">
                <div class="col-lg-7 col-sm-7">
                    <h2>FIND TICKET NOW</h2>
                </div>
                <div class="col-lg-5 col-sm-5 z-100">
                    <a href="#" data-bs-toggle="modal" data-bs-target="#tutorial" class="fs-6 btn">
                        <i class="fa-brands fa-youtube"></i>
                        <span class="ms-2">Ticket Booking Guide</span>
                    </a>
                </div>
            </div>
            <div class="mt-3" id="home-search">
                <div class="">
                    <div id="cinema-form">
                        <div class="row">
                            <div class="col-lg-4 col-md-4 col-sm-6">
                                <div class="custom-select">
                                    <button class="select-button" role="combobox" aria-label="select button" aria-haspopup="listbox" aria-expanded="false" aria-controls="select-dropdown">
                                        <span class="selected-value"><i class="fa-solid fa-map-location-dot"></i>Location</span>
                                        <span class="arrow"></span>
                                    </button>
                                    <ul class="select-dropdown" role="listbox" >
                                        <li role="option" v-for="item in cinemaData" :key="item.id">
                                            <input type="radio" :id="'c-location'+item.id" :value="item.id" name="cinemaLocation"/>
                                            <label :for="'c-location'+item.id">{{ item.name }} ({{ item.location }})</label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-6">
                                <div class="custom-select">
                                    <button class="select-button" role="combobox" aria-label="select button" aria-haspopup="listbox" aria-expanded="false" aria-controls="select-dropdown">
                                        <span class="selected-value"><i class="fa-regular fa-calendar-check"></i>Date</span>
                                        <span class="arrow"></span>
                                    </button>
                                    <ul class="select-dropdown" role="listbox" >
                                        <li role="option" v-for="(item,index) in filterDate" :key="index">
                                            <input type="radio" :id="'c-date'+index" :value="item" name="cinemaDate"/>
                                            <label :for="'c-date'+index">{{item}}</label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-11">
                                <div class="custom-select">
                                    <button class="select-button" role="combobox" aria-label="select button" aria-haspopup="listbox" aria-expanded="false" aria-controls="select-dropdown">
                                        <span class="selected-value"><i class="fa-solid fa-film"></i>Movie</span>
                                        <span class="arrow"></span>
                                    </button>
                                    <ul class="select-dropdown" role="listbox" >
                                        <li role="option" v-for="item in filterMovie" :key="item.id">
                                            <input type="radio" :id="'c-movie'+item.id" :value="item.movie_id" name="cinemaMovie"/>
                                            <label :for="'c-movie'+item.id">{{item.movie_name}}</label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-1 col-md-1 col-sm-1 mt-1">
                                <button type="submit" class="btn search-btn"><i class="fa-solid fa-magnifying-glass"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { useUrl } from '@/composables/useUrl';
import { useCinemaStore } from '@/stores/cinema';
import { useLoadingStore } from '@/stores/loading';
import { useWebsiteInfoStore } from '@/stores/websiteInfo';
import { computed } from 'vue';

const loadingStore=useLoadingStore();
const {imageUrl}=useUrl()
const websiteStore=useWebsiteInfoStore();
const cinemaStore=useCinemaStore();
const coverImage = computed(() => {
    return websiteStore.websiteInfo?.cover_image || [];
});

const cinemaData = computed(()=>{
    return cinemaStore.cinema||[];
})

defineProps({
    filterMovie:Array,
    filterDate:Array
})

</script>