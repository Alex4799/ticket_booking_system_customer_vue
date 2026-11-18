<template>
    <section class="container-lg" id="popular-movie">
        <div class="d-flex align-content-center justify-content-between">
            <div id="span-block">
                <span></span>
                <h4 class="fw-bold">Popular Movies</h4>
            </div>
        </div>
        <hr>
        <div class="swiper popularSwiper p-0 mx-auto">
            <div class="swiper-wrapper" id="popular-wrapper">
                <div class="swiper-slide" v-for="(item,index) in movie">
                    <div class="item">
                        <span class="rank">{{index+1}}</span>
                        <span v-if="index==0" class="first-rank"><i class="fa-solid fa-crown"></i></span>
                        <div class="img-content">
                            <RouterLink :to="'/movie/'+item.id" class="text-decoration-none">
                                <img :src="imageUrl+'/poster/'+item.poster" alt="">
                            </RouterLink>
                            <span class="popular-rate"><i class="fa-solid fa-star"></i> {{ item.rating }}</span>
                        </div>
                        <RouterLink :to="'/movie/'+item.id" class="text-decoration-none text-center">
                            <label for="">{{item.name}}</label>
                        </RouterLink>
                    </div>
                </div>
                <!-- <div class="swiper-slide">
                    <div class="item">
                        <span class="rank">2</span>
                        <div class="img-content">
                            <a href="#" class="text-decoration-none">
                                <img src="./../../assets/image/mov2.jpg" alt="">   
                            </a>
                            <span class="popular-rate"><i class="fa-solid fa-star"></i> 8 </span>
                        </div>
                        <a href="#" class="text-decoration-none text-center">
                            <label for="">Wish Dragon</label>
                        </a>
                    </div>
                </div> -->
            </div>
        </div>
    </section>
</template>
<script setup>
import { useUrl } from '@/composables/useUrl';
import { initTemplateScripts } from '@/assets/customer/js/script';
import { onMounted ,watch, nextTick} from 'vue';
import { RouterLink } from 'vue-router';

const {imageUrl}=useUrl()
const props = defineProps({
    movie:Array
})
watch(() => props.movie, (newMovies) => {
    if (newMovies && newMovies.length > 0) {
        nextTick(() => {
            initTemplateScripts();
        });
    }
}, { deep: true });
</script>