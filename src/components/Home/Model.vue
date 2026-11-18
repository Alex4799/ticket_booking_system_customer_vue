<template>
        <div>
        <div class="modal fade" id="tutorial" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="trailerLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content border-0 bg-transparent">
                    <div class="d-flex justify-content-end mb-2">
                        <button type="button" class="btn" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
                    </div>
                    <iframe id="videoTrailer" src="https://www.youtube.com/embed/omNKZFp6ajo?si=nwFk5BOwdTjR-qno" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
        </div>
        <div class="modal fade  add-to-home" id="addHomeScreen" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="trailerLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content bg-transparent border-0">
                    <div class="d-flex justify-content-end mb-2">
                        <button type="button" class="btn" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
                    </div>
                    <div class="modal-body">
                        <img src="./../../assets/image/mega.jpg" alt="" class="alert-icon-img">
                        <p>Do you want to install app to your home screen?</p>
                        <button id="install-button" class="btn" type="button">Install App</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="iosInstallModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="iosInstallLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content border-0 bg-transparent">
                    <div class="d-flex justify-content-end mb-2">
                        <button type="button" class="btn" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
                    </div>
                    <div class="modal-body">
                        <img src="./../../assets/image/mega.jpg" alt="" class="alert-icon-img">
                        <p>Do you want to install app to your home screen?</p>
                        <span>On Safari, tap the Share button (the square with an arrow) and select "Add to Home Screen".</span>
                        <button id="iosInstall-btn" class="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">Got it</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>