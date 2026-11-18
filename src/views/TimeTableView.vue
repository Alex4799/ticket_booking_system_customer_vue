<template>
    <section id="time-table">
        <div class="header">
            <h5 class="text-center mx-auto">
                <span class="fw-bold">Nanobots Cinema</span>
                <br>
                <span>Movie Show Time (ရုံများတွင် ပြသမည့်ရုပ်ရှင် နှင့် ပွဲချိန်များ)</span>
            </h5>
            <div class="my-5" v-for="cinema in cinemas">
                <RouterLink :to="'/timeTable/'+cinema.id">
                    <span><i class="fa-solid fa-location-dot me-2"></i>{{ cinema.name }} ({{ cinema.location }})</span>
                    <span class="ms-5"><i class="fa-solid fa-angle-right"></i></span>
                </RouterLink>
            </div>
        </div>
    </section>
</template>
<script setup>
    import { initTemplateScripts } from '@/assets/customer/js/script';
    import { onMounted, ref } from 'vue';
    import { RouterLink } from 'vue-router';

    const cinemas=ref([
        {
            id:1,
            name:'Mega Ace Cineplex',
            location:'TIMES CITY',
        }
    ])

    onMounted(()=>{
        initTemplateScripts();
    })
</script>