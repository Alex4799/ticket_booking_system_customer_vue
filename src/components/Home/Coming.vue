<template>
    <section class="container-lg" id="coming-soon">
        <div class="d-flex align-content-center">
            <div id="span-block">
                <span></span>
                <h4 class="fw-bold">Coming Soon</h4>
            </div>
        </div>
        <hr>
        <div class="row movie-list">
            <div v-if="movie && movie.length > 0" class="col-lg-3 col-md-4 col-sm-6 mb-4" v-for="item in movie">
                <MovieCard :id="item.id" :name="item.name" :poster="item.poster"></MovieCard>
            </div>
            <div v-else class="py-5 px-3 mt-3">
                <h6 class="text-center text-secondary" style="font-size: 10pt;">No upcoming movies available at the moment.</h6>
            </div>
        </div>
    </section>
</template>
<script setup>
import MovieCard from '@/components/MovieCard.vue';
defineProps({
    movie:Array
})
</script>