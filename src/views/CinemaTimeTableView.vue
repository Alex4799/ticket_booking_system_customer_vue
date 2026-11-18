<template>
    <section id="timetable-view">
        <div id="selected-movie-label" class="d-flex align-items-center justify-content-between flex-wrap gap-1">
            <div class="d-flex align-items-center flex-wrap gap-1">
                <div>
                    <RouterLink to="/timeTable">
                        <button class="btn"><i class="fa-solid fa-chevron-left"></i></button>
                    </RouterLink>
                </div>
                <div class="ms-2 mb-2">
                    <h5>Mega Ace Cineplex (TIMES CITY)</h5>
                </div>
            </div>
            <div class="mb-2">
                <div class="dropdown py-2 dropdown-menu-end">
                    <button class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <i class="fa-solid fa-calendar me-2"></i>2025-08-28
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="">2025-08-29</a></li>
                        <li><a class="dropdown-item" href="">2025-08-30</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div id="cinema-schedule">
            <div class="cinema-block">
                <div class="row">
                    <div class="col-sm-6 mb-4">
                        <div class="showtime-container">
                            <h6>
                                <span class="me-1">1.</span>
                                Trapped In Yellow
                            </h6>
                            <div class="showtime">
                                <div class="w-75">
                                    <a href="">
                                        <img src="./../assets/image/mov1.webp" alt="">
                                    </a>
                                </div>
                                <div class="w-100">
                                    <div>
                                        <label for="">Hall</label>
                                        <p>Premium Hall</p>
                                    </div>
                                    <div>
                                        <label for="">Date</label>
                                        <p>2026-09-27</p>
                                    </div>
                                    <div>
                                        <label for="">Start Time & End Time</label>
                                        <p class="mt-1">
                                            <a href="#">
                                                <button class="btn" id="ticket-btn">
                                                    10:00 AM - 11:51 AM
                                                </button>
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="py-5 px-3 mt-5">
                        <h6 class="text-center text-secondary" style="font-size: 10pt;">Showtimes not available yet.</h6>
                    </div> -->
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
    import { initTemplateScripts } from '@/assets/customer/js/script';
    import { onMounted } from 'vue';
    import { useRoute,RouterLink } from 'vue-router';

    onMounted(()=>{
        initTemplateScripts();
    })
    const route=useRoute();
</script>