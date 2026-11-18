<template>
    <section class="mx-3" id="movies-category">
        <div class="row" >
            <div class="col-lg-9">
                <div id="movie-label">
                    <form action="">
                        <div class="group">
                            <svg viewBox="0 0 24 24" aria-hidden="true" class="search-icon"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
                            <input class="input" value="" type="text" placeholder="Search for movie" name="search_key"/>
                        </div>
                    </form>
                </div>
                <div id="movie-list">
                    <div class="row" id="movie-sorting">
                        <div class="col-lg-8 col-sm-8">
                            <div class="d-flex align-items-center">
                                <label>Sort By : </label>
                                <div class="btn-group">
                                    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        All
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li role="option">
                                            <a class="dropdown-item" href="">All</a>
                                        </li>
                                        <li role="option">
                                            <a class="dropdown-item" href="">Now Showing</a>
                                        </li>
                                        <li role="option">
                                            <a class="dropdown-item" href="">Coming Soon</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="genre-ph">
                    <div class="d-flex align-items-center genre-scroll-container">
                        <RouterLink to="/movie" class="category-link">
                            <button class="btn">All</button>
                        </RouterLink>
                        <div class="category-link" v-for="item in genre">
                            <button class="btn">{{item.name}}</button>
                        </div>
                    </div>
                </div>
                <MovieContainer :movies="movies"></MovieContainer>
            </div>
            <div class="col-lg-3 order-lg-first">
                <div id="category-form">
                    <form>
                        <div class="d-flex align-items-center justify-content-between mb-3">
                            <h5>Genre</h5>
                        </div>
                        <hr>
                        <div id="category-content">
                            <div class="d-flex align-items-center justify-content-between">
                                <RouterLink to="/movie" class="category-link"><i class="fa-solid fa-caret-right me-2"></i><span>All</span></RouterLink>
                            </div>
                            <div v-for="item in genre" class="d-flex align-items-center justify-content-between">
                                <a href="" class="category-link"><i class="fa-solid fa-caret-right me-2"></i><span>{{item.name}}</span></a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import MovieContainer from '@/components/Movie/MovieContainer.vue';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { initTemplateScripts } from '@/assets/customer/js/script';
import { onMounted } from 'vue';
import axios from 'axios';
import { useUrl } from '@/composables/useUrl';
import { useLoadingStore } from '@/stores/loading';
import { useMovieStore } from '@/stores/movie';
import { useGenreStore } from '@/stores/genre';

const loadingStore = useLoadingStore();
const movieStore = useMovieStore();
const genreStore = useGenreStore();
const {main_api}=useUrl();
const movies =ref([]);
const genre = ref([]);

async function getMovie(){
    try {
        let fetchStatus=movieStore.checkFetch();
        if (fetchStatus) {
            movies.value=movieStore.movies;
        }else{
            const response = await axios.get(`${main_api.value}/api/get/movie`);
            const data = await response.data;
            movies.value=data;
            movieStore.storeMovieData(data);
            movieStore.changeFetchStatus(true);
        }
    } catch (error) {
        console.error('Error uploading image:', error);
    }
    
}

async function getGenre() {
    let fetchStatus=genreStore.checkFetch();
    try {
        if (fetchStatus) {
            genre.value=genreStore.genre;
        }else{
            const response = await axios.get(`${main_api.value}/api/get/genre`);
            const data = await response.data;
            genre.value=data;
            genreStore.storeGenreData(data);
            genreStore.changeFetchStatus(true);
        }
    } catch (error) {
        console.error('Error uploading image:', error);
    }
}

onMounted(()=>{
    try{
        loadingStore.loadingTrue();
        getMovie();
        getGenre();
    }finally{
        loadingStore.loadingFalse();
    }
    initTemplateScripts();
})

</script>