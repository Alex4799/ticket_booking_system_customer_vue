<template>
    <section class="container">
        <div class="row py-3">
            <div class="col-md-6 offset-md-3">
                <div id="user-contact-info">
                    <h5>Ticket Check</h5>
                    <form action="" method="post">
                        <div class="form-group my-3">
                            <label for="" class="mb-2">Enter your booking code</label>
                            <div>
                                <div class="d-flex align-items-center">
                                    <span class="bg-secondary py-2 px-3 rounded me-2 text-white" style="font-size: 11pt;">OID-</span>
                                    <input type="text" name="id" value="" class="form-control" id="">
                                </div>
                            </div>
                        </div>
                        <div class="form-group my-4">
                            <label for="" class="mb-2">Enter your order email</label>
                            <div>
                                <input type="email" name="email" value="" class="form-control">
                            </div>
                        </div>
                        <div class="d-flex justify-content-end">
                            <button type="button" class="btn" id="ticket-btn">Check</button>
                        </div>
                    </form>
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