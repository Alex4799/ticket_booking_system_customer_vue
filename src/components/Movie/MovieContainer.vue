<template>
    <div id="movie-list-content">
        <div class="container-lg" id="movie-cell-show">
            <div class="row mx-auto w-100">
                <div class="col-lg-3 col-md-3 col-sm-4 mb-4" v-for="item in movies" :key="item.id">
                    <div>
                        <MovieCard :name="item.name" :poster="item.poster" :id="item.id"></MovieCard>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import MovieCard from '@/components/MovieCard.vue';

    defineProps({
        movies:Array
    })
</script>