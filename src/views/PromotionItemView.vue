<template>
    <section class="container-lg" id="promotion-details">
        <div id="promotion-content">
            <h4>Thadingyut Promotion</h4>
            <hr>
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <img src="./../assets/image/default.webp" alt="" class="w-100 d-block rounded">
                </div>
                <div class="col-lg-8 col-md-8 px-5 order-md-first">
                    <div class="mb-4">
                        <strong>Promotion Period :</strong>
                        <p>12th July - 26th July | while stocks last</p>
                    </div>
                    <div class="mb-4">
                        <strong>What's in the offer :</strong>
                        <p style="margin-top: -10px">Buy 4 tickets, get 1 Otto Squishy & 1 Exclusive Activity Pack</p>
                    </div>
                    <div class="mb-4">
                        <strong>Promotion :</strong>
                        <p>1,000 MMK off for Mega Ace</p>
                    </div>
                    <div class="mb-4">
                        <strong>Promo Code :</strong>
                        <p>12345</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>
<script setup>
    import { initTemplateScripts } from '@/assets/customer/js/script';
    import { onMounted } from 'vue';

    onMounted(()=>{
        initTemplateScripts();
    })
</script>