<template>
    <section id="promotion-page">
        <div class="mb-5" id="promotion-list">
            <div class="row mt-4">
                <div class="col-lg-3 col-md-4 col-sm-6 mb-4" v-for="promotion in promotions">
                    <RouterLink :to="'/promotion/'+promotion.id">
                        <img src="./../assets/image/default.webp" class="w-100 d-block rounded" alt="">
                        <h5 class="mt-3">{{promotion.name}}</h5>
                    </RouterLink>
                </div>
            </div>
        </div>
    </section>
    <!-- <div class="py-5 px-3 mt-5">
        <h6 class="text-center text-secondary" style="font-size: 10pt;">No promotions available at the moment.</h6>
    </div> --> 
</template>
<script setup>
    import { initTemplateScripts } from '@/assets/customer/js/script';
    import { onMounted, ref } from 'vue';
    import { RouterLink } from 'vue-router';

    const promotions=ref([
        {
            id:1,
            name:'Thadingyut Promotion',
        }
    ])

    onMounted(()=>{
        initTemplateScripts();
    })
</script>