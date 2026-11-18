<template>
    <div>
        <RouterLink :to="'/movie/'+id">
            <div class="zoom-img">
                <img :src="imageUrl+'/poster/'+poster"  alt="">
            </div>
            <div class="d-flex align-items-center justify-content-center">
                <h5 class="text-center height-add m-auto"><span>{{name}}</span></h5>
            </div>
        </RouterLink>
        <hr>
        <div class="d-flex align-content-center justify-content-between">
            <a href="#">
                <button class="btn" id="ticket-btn">
                    <span><i class="fa-solid fa-ticket"></i></span>
                    <label>Book Ticket</label>
                </button>
            </a>
            <p class="rate-display">
                <img src="./../../assets/image/imdb.png" alt="">
                <span><i class="fa-regular fa-star"></i></span>
                <label>5</label>
            </p>
        </div>
    </div>
</template>
<script setup>
import { useUrl } from '@/composables/useUrl';
import { RouterLink } from 'vue-router';

const {imageUrl}=useUrl()
defineProps({
    name:String,
    id:Number,
    poster:String,
})
</script>