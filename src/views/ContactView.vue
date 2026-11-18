<template>
    <!-- cinema details start  -->
    <section class="container-lg" id="cinema-details">
        <div class="d-flex align-content-center justify-content-between">
            <div id="span-block">
                <span></span>
                <h4 class="fw-bold">Participating Cinemas</h4>
            </div>
            <div class="swiper-btn2s">
                <button class="btn button-prev2 me-2">
                    <i class="fa-solid fa-chevron-left"></i>
                </button>
                <button class="btn button-next2">
                    <i class="fa-solid fa-chevron-right"></i>
                </button>
            </div>
        </div>
        <hr>
        <div class="swiper mySwiper3">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="cinema-detail-content">
                        <div id="cinema1" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="./../assets/image/mega.jpg" class="d-block w-100" alt="cinema_photo">
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#cinema{{$item->id}}" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#cinema{{$item->id}}" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div class="py-2">
                            <h5>Mega Ace Cineplex</h5>
                            <div class="d-flex align-items-center">
                                <i class="fa-solid fa-mobile-screen me-3"></i>
                                <span class="pt-3">09123456789</span>
                            </div>
                            <div class="d-flex align-items-center mt-1">
                                <i class="fa-solid fa-map-location-dot me-3"></i>
                                <span>TimesCity 7th floor, Kamayut, Yangon</span>
                            </div>
                            <div class="mt-4 d-flex justify-content-end">
                                <a href="">
                                    <button class="btn" id="ticket-btn">
                                        <label>Write Review</label>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="py-5 px-3 mt-5">
            <h6 class="text-center text-secondary" style="font-size: 10pt;">No cinemas available at the moment.</h6>
        </div> -->

    </section>
    <!-- cinema details end  -->


    <!-- contact us start  -->
    <section class="px-5" id="contact-us">
        <div class="row">
            <div class="col-lg-4 col-md-4 pt-3" id="contact-us-info">
                <h6>GET IN TOUCH</h6>
                <p>Whether you’re curious about our cinemas, in love with our service, or have feedback for us, we’d love to hear from you.</p>
                <div class="mt-4">
                    <strong class="d-block">Customer Relations Hotline</strong>
                    <div id="contact-block">
                        <span class="mb-3"></span>
                        <p>0000</p>
                    </div>
                </div>
                <div class="mt-4">
                    <strong class="d-block">Our Social Page</strong>
                    <!-- <div class="d-flex align-items-center mt-4">
                        <div class="d-flex me-4 mb-1" id="footer-icon">
                            <a href=""><img src="image/default.webp" class="w-100 img-thumbnail" alt=""></a>
                        </div>
                    </div> -->
                    <div class="mt-4">
                        <h6 class="text-secondary" style="font-size: 10pt;">No social pages available yet.</h6>
                    </div>
                </div>
            </div>
            <div class="col-lg-8 col-md-8 px-4" id="contact-us-form">
                <div>
                    <form action="" method="POST">
                        <div class="row form-group">
                            <div class="col-lg-6 col-sm-6 mb-4">
                                <label>Name *</label>
                                <input type="text" value="" class="form-control" name="name" placeholder="Enter Your Name">
                            </div>
                            <div class="col-lg-6 col-sm-6 mb-4">
                                <label>Email *</label>
                                <input type="email" value="" class="form-control" name="email" placeholder="Enter Your Email">
                            </div>
                        </div>

                        <div class="form-group mb-4">
                            <label>Subject *</label>
                            <input type="text" value="" class="form-control" name="subject" placeholder="Enter Your Subject">
                        </div>

                        <div class="form-group mb-4">
                            <label>Message *</label>
                            <textarea name="message" class="form-control" rows="6" placeholder="Enter Your Message"></textarea>
                        </div>

                        <div class="d-flex align-items-center justify-content-end">
                            <button type="submit" class="btn" id="ticket-btn">Send Your Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <!-- contact us end -->
</template>
<script setup>
    import { initTemplateScripts } from '@/assets/customer/js/script';
    import { onMounted } from 'vue';

    onMounted(()=>{
        initTemplateScripts();
    })
</script>