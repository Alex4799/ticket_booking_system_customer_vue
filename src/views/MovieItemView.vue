<template>
    <!-- movie details start  -->
    <section id="movie-details">
        <div class="mb-4">
            <div id="movie-cover-poster">
                <img src="./../assets/image/default.webp" alt="">
                <span></span>
            </div>
            <div class="row mx-auto" id="movie-detail-content">
                <div class="col-lg-4">
                    <img src="./../assets/image/mov2.jpg" class="mx-auto d-block"  alt="">
                </div>
                <div class="col-lg-8 pe-5">
                    <h1>Garfield</h1>
                    <div class="mt-4">
                        <div class="first-side">
                            <div class="d-flex align-items-center flex-wrap mb-3">
                                <div>
                                    <label for="">•  Friday, September 18, 2025</label>
                                </div>
                                <div>
                                    <label for="">• 2h 2min</label>
                                </div>
                            </div>
                            <div id="detail-rating">
                                <span><i class="fa-solid fa-star"></i></span>
                                <span>8/10</span>
                            </div>
                        </div>
                        <div class="d-flex align-items-center mt-4" id="detail-flex">
                            <div class="me-5 w-100">
                                <div class="d-flex align-items-center flex-wrap mb-3">
                                    <h6 class="mb-0 me-2"> Genre : </h6>
                                    <span>
                                       Animation
                                    </span>
                                </div>
                                <div class="d-flex align-items-center flex-wrap mb-3">
                                    <h6 class="mb-0 me-2">Directed By : </h6>
                                    <span>Naoya Ando</span>
                                </div>
                            </div>
                            <div class="ms-5 w-100">
                                <div class="d-flex align-items-center flex-wrap mb-3">
                                    <h6 class="mb-0 me-2">Spoken Language : </h6>
                                    <span>Engglish</span>
                                </div>
                                <div class="d-flex align-items-center flex-wrap mb-3">
                                    <h6 class="mb-0 me-2">Subtitles : </h6>
                                    <span>English</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p class="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aspernatur pariatur, soluta officia necessitatibus iusto iure rem cum, ab exercitationem quam voluptas aperiam magnam beatae quaerat error praesentium quod nostrum?</p>
                    <div class="d-flex align-items-center justify-content-between mt-5">
                        <a href="">
                            <button class="btn fs-6" id="ticket-btn">
                                <span><i class="fa-solid fa-ticket"></i></span>
                                <label>Book Ticket</label>
                            </button>
                        </a>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#trailer" class="fs-6" id="circle-play"><i class="fa-solid fa-circle-play"></i> Watch Trailer</a>
                    </div>
                </div>
            </div>
        </div>
        <div id="more-cover-poster">
            <h4>Photos</h4>
            <div class="swiper mySwiper5 mt-4">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img src="./../assets/image/default.webp" alt="">
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </div>
        <div id="movie-cast">
            <h4>Movie Cast</h4>
            <div class="swiper mySwiper6 mt-4 px-1">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img src="./../assets/image/user.png" alt="">
                        <h5>
                            <span>Ryan Cris</span>
                        </h5>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
            <!-- <div class="py-5 px-3 mt-3">
                <h6 class="text-center text-secondary" style="font-size: 10pt;">No cast available at the moment.</h6>
            </div> -->
        </div>
    </section>

    <!-- youtube modal  -->
    <div class="modal fade" id="trailer" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="trailerLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content border-0 bg-transparent">
                <div class="d-flex justify-content-end mb-2">
                    <button type="button" class="btn" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
                </div>
                <iframe id="videoTrailer" src="https://www.youtube.com/embed/JQix0eKwlww?si=Od5Qz6rMn2LFay_i" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
    </div>
    <!-- movie details end  -->
</template>
<script setup>
    import { useRoute } from 'vue-router';
    import { initTemplateScripts } from '@/assets/customer/js/script';
    import { onMounted } from 'vue';

    onMounted(()=>{
        initTemplateScripts();
    })

    const route=useRoute();
</script>