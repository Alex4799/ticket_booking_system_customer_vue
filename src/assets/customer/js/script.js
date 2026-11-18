// src/assets/customer/js/script.js

export function initTemplateScripts() {

  // 1. Active Link Handler for Navigation
  const currentHTMLPage = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => link.classList.remove('active'));
  navLinks.forEach(link => {
    try {
      const linkPath = new URL(link.href).pathname;
      if (currentHTMLPage === linkPath) {
        link.classList.add('active');
      }
    } catch (e) {}
  });


  // 2. Light Mode Toggle
  const body = document.documentElement;
  const themeToggles = document.querySelectorAll('.theme-toggle');
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'light') {
    body.classList.add('light');
    themeToggles.forEach(toggle => toggle.checked = false);
  } else {
    body.classList.remove('light');
    themeToggles.forEach(toggle => toggle.checked = true);
  }

  themeToggles.forEach(toggle => {
    toggle.replaceWith(toggle.cloneNode(true));
  });
  
  document.querySelectorAll('.theme-toggle').forEach(toggle => {
    toggle.addEventListener('change', function () {
      const isDark = this.checked;
      if (isDark) {
        body.classList.remove('light');
        localStorage.setItem('theme', 'dark');
      } else {
        body.classList.add('light');
        localStorage.setItem('theme', 'light');
      }
    });
  });


    // 3. Search Movie Selected Button
  const cinemaForm = document.getElementById('cinema-form');

  if (cinemaForm) {
      cinemaForm.onsubmit = function(event) {
          event.preventDefault();
          this.submit();
      };
  }

  const customSelects = document.querySelectorAll(".custom-select");
  const selectBtns = document.querySelectorAll(".select-button");

  selectBtns.forEach((btn) => {
      btn.onclick = (event) => {
          event.preventDefault();

          const customSelect = btn.closest(".custom-select");

          if (customSelect) {
              customSelect.classList.toggle("active");

              btn.setAttribute(
                  "aria-expanded",
                  customSelect.classList.contains("active") ? "true" : "false"
              );
          }
      };
  });

  // Event delegation: works for dynamically added li elements
  document.addEventListener("click", function(event) {

      const option = event.target.closest(".select-dropdown li");

      if (!option) return;

      const customSelect = option.closest(".custom-select");

      if (!customSelect) return;

      const selectedValue = customSelect.querySelector(".selected-value");
      const btn = customSelect.querySelector(".select-button");

      if (selectedValue && btn) {
          selectedValue.textContent = option.querySelector("label").textContent;

          customSelect.classList.remove("active");
          btn.setAttribute("aria-expanded", "false");
      }
  });


  // 4. Popular Swiper (အသစ်ပေါင်းထည့်လိုက်တဲ့ Code)
  const popularContainer = document.querySelector('.popularSwiper');
  if (popularContainer) {
    const wrapper = popularContainer.querySelector('.swiper-wrapper');
    const MIN_SLIDES = 12;
    
    if (wrapper) {
      const originalSlides = Array.from(wrapper.children);
      
      if (wrapper.children.length < MIN_SLIDES && originalSlides.length > 0) {
        let i = 0;
        while (wrapper.children.length < MIN_SLIDES) {
          const cloned = originalSlides[i % originalSlides.length].cloneNode(true);
          wrapper.appendChild(cloned);
          i++;
        }
      }
      
      const totalSlides = wrapper.querySelectorAll('.swiper-slide').length;

      new Swiper('.popularSwiper', {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 20,
        speed: 5000,
        freeModeMomentum: false,
        allowTouchMove: true,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        },
        loopedSlides: totalSlides
      });
    }
  }


  // 5. Other Swiper Initializations (Safe Check)
  if (document.querySelector('.mySwiper3')) {
    new Swiper(".mySwiper3", {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      grabCursor: true,
      navigation: { nextEl: ".button-next2", prevEl: ".button-prev2" },
      breakpoints: { 0: { slidesPerView: 1 }, 770: { slidesPerView: 2 }, 1200: { slidesPerView: 3 } }
    });
  }

  if (document.querySelector('.mySwiper2')) {
    new Swiper(".mySwiper2", {
      spaceBetween: 30,
      slidesPerView: 2,
      grabCursor: true,
      pagination: { el: ".swiper-pagination", clickable: true },
      breakpoints: { 0: { slidesPerView: 1 }, 500: { slidesPerView: 2 }, 992: { slidesPerView: 2 }, 1300: { slidesPerView: 3 } }
    });
  }

  if (document.querySelector('.mySwiper5')) {
    new Swiper(".mySwiper5", {
      spaceBetween: 30,
      slidesPerView: 3,
      grabCursor: true,
      autoplay: { delay: 5000, disableOnInteraction: false },
      pagination: { el: ".swiper-pagination", clickable: true },
      breakpoints: { 0: { slidesPerView: 1 }, 500: { slidesPerView: 2 }, 992: { slidesPerView: 3 }, 1300: { slidesPerView: 4 } }
    });
  }

  if (document.querySelector('.mySwiper6')) {
    new Swiper(".mySwiper6", {
      spaceBetween: 23,
      slidesPerView: 5,
      grabCursor: true,
      pagination: { el: ".swiper-pagination", clickable: true },
      breakpoints: { 0: { slidesPerView: 1 }, 300: { slidesPerView: 2 }, 800: { slidesPerView: 3 }, 992: { slidesPerView: 4 }, 1200: { slidesPerView: 5 }, 1300: { slidesPerView: 6 } }
    });
  }

  if (document.querySelector('.mySwiper7')) {
    new Swiper(".mySwiper7", {
      spaceBetween: 30,
      slidesPerView: 2,
      grabCursor: true,
      navigation: { nextEl: ".button-next7", prevEl: ".button-prev7" },
      pagination: { el: ".swiper-pagination", clickable: true },
      breakpoints: { 0: { slidesPerView: 1 }, 500: { slidesPerView: 2 }, 992: { slidesPerView: 3 }, 1300: { slidesPerView: 4 } }
    });
  }

  if (document.querySelector('.mySwiper8')) {
    new Swiper(".mySwiper8", {
      spaceBetween: 30,
      slidesPerView: 4,
      loop: true,
      grabCursor: true,
      autoplay: { delay: 6000, disableOnInteraction: false },
      navigation: { nextEl: ".button-next8", prevEl: ".button-prev8" },
      breakpoints: { 0: { slidesPerView: 1 }, 700: { slidesPerView: 2 }, 980: { slidesPerView: 3 }, 1200: { slidesPerView: 4 }, 1300: { slidesPerView: 4 } }
    });
  }


  // 6. jQuery Elements (Footer, Promos, Payment, Showtimes)
  if (typeof $ !== 'undefined') {
    $('#drop-items').hide();
    $('#toggle-btn').off('click').on('click', function(){
      $('#drop-items').toggle(500);
      $('#down').toggle();
      $('#up').toggle();
    });

    $('#promo-code > .d-flex').off('click').on('click', function(){
      $('#promo-form').slideToggle(500);
    });

    $('.payment-content').not(':first').hide();
    $('.custom-radio').each(function() {
      if ($(this).find('input').is(':checked')) {
        $(this).addClass('active').removeClass('inactive');
      } else {
        $(this).addClass('inactive').removeClass('active');
      }
    });

    $('.custom-radio').off('click').on('click', function(){
      $(this).find('input[type="radio"]').prop('checked', true);
      $('.payment-content').hide();
      const target = $(this).find('input[type="radio"]').data('target');
      $(target).show();

      $('.custom-radio').each(function() {
        if ($(this).find('input').is(':checked')) {
            $(this).addClass('active').removeClass('inactive');
        } else {
            $(this).addClass('inactive').removeClass('active');
        }
      });
    });

    $('.ct-toggle-btn').off('click').on('click', function(){
      $(this).closest('.cinema-section').find('.select-time').slideToggle(500);
      $(this).find('.cinema-down').toggle();
      $(this).find('.cinema-up').toggle();
    });
  }


  // 7. Category Active Link & Scroll
  const categoryContent = document.querySelector('#category-content');
  const genrePh = document.querySelector('.genre-scroll-container');
  const categoryLinks = document.querySelectorAll('.category-link');

  if (categoryLinks.length > 0) {
    const currentURL = new URL(window.location.href);
    const currentPath = currentURL.pathname + currentURL.search;

    categoryLinks.forEach(link => {
      try {
        const linkURL = new URL(link.href, window.location.origin);
        const linkPath = linkURL.pathname + linkURL.search;
        if (currentPath === linkPath) {
          link.classList.add('active');
        }
      } catch(e) {}

      link.onclick = function () {
        if (categoryContent) sessionStorage.setItem('genre-scroll-y', categoryContent.scrollTop);
        if (genrePh) sessionStorage.setItem('genre-scroll-x', genrePh.scrollLeft);
      };
    });

    const genreScrollY = sessionStorage.getItem('genre-scroll-y');
    const genreScrollX = sessionStorage.getItem('genre-scroll-x');
    if (categoryContent && genreScrollY !== null) categoryContent.scrollTop = parseInt(genreScrollY, 10);
    if (genrePh && genreScrollX !== null) genrePh.scrollLeft = parseInt(genreScrollX, 10);
  }


  // 8. Movie Cell Category View Switcher
  let cellContent = document.querySelectorAll('#movie-cell-category li a');
  const movieList = document.getElementById('movie-list-show');
  const movieCell = document.getElementById('movie-cell-show');

  if (cellContent.length > 0 && movieList && movieCell) {
    function detailsClick(event){
      event.preventDefault();
      const clickedElement = event.target.tagName === 'I' ? event.target.parentElement : event.target;
      const elementClass = clickedElement.dataset.elementClass;

      if(clickedElement.classList.contains('cell-active')) return;
      cellContent.forEach(d => d.classList.remove('cell-active'));
      clickedElement.classList.add('cell-active');

      localStorage.setItem('selectedElementClass', elementClass);
      movieList.style.display = elementClass === 'movieList' ? 'block' : 'none';
      movieCell.style.display = elementClass === 'movieCell' ? 'flex' : 'none';
    }

    cellContent.forEach(item => {
      item.onclick = detailsClick;
    });

    const selectedElementClass = localStorage.getItem('selectedElementClass');
    if(selectedElementClass){
      cellContent.forEach(item => {
        if(item.dataset.elementClass === selectedElementClass){
          item.classList.add('cell-active');
          movieList.style.display = selectedElementClass === 'movieList' ? 'block' : 'none';
          movieCell.style.display = selectedElementClass === 'movieCell' ? 'flex' : 'none';
        } else {
          item.classList.remove('cell-active');
        }
      });
    }
  }


  // 9. Showtime Select Date
  const selectDates = document.querySelectorAll('.js-select-date');
  const firstDateButton = document.getElementById('first-date-button');
  const scrollContainer = document.querySelector('#select-date > ul');

  if (selectDates.length > 0) {
    const storedDate = localStorage.getItem('activeDate');
    let foundMatch = false;
    if(storedDate){
      selectDates.forEach(button => {
        const span = button.querySelector('span');
        if(span && span.textContent.trim() === storedDate.trim()){
          button.classList.add('js-select-active');
          foundMatch = true;
          setTimeout(() => {
            const storedScroll = localStorage.getItem('scrollPosition');
            if(scrollContainer && storedScroll){
              scrollContainer.scrollLeft = parseInt(storedScroll);
            }
          }, 0);
        }
      });
    }

    if(!foundMatch && firstDateButton){
      firstDateButton.classList.add('js-select-active');
      const span = firstDateButton.querySelector('span');
      if(span) {
        localStorage.setItem('activeDate', span.textContent.trim());
      }
      if(scrollContainer){
        scrollContainer.scrollLeft = 0;
        localStorage.setItem('scrollPosition', '0');
      }
    }

    selectDates.forEach(button => {
      button.onclick = function(){
        selectDates.forEach(btn => btn.classList.remove('js-select-active'));
        button.classList.add('js-select-active');
        const span = button.querySelector('span');
        if(span) {
          localStorage.setItem('activeDate', span.textContent.trim());
        }
        if(scrollContainer){
          localStorage.setItem('scrollPosition', scrollContainer.scrollLeft);
        }
      };
    });
  }


  // 10. Seat Plan Selection & Drag Scrolling
  const seatPlan = document.getElementById('seat-plan');
  const seatPlanRow = document.querySelectorAll('.seat-plan-row');
  const seats = document.querySelectorAll('.seat');
  const swipeLeft = document.getElementById('swipe-left');

  if (seatPlanRow.length > 0) {
    seatPlanRow.forEach(sr => {
      const totalSeats = sr.querySelectorAll('.seat').length;
      if (totalSeats > 20) {
        sr.style.display = 'grid';
        sr.style.gridTemplateColumns = `auto repeat(${totalSeats}, auto)`;
      }
    });

    if (swipeLeft && seatPlan) {
      if (seatPlan.scrollWidth > seatPlan.clientWidth) {
        swipeLeft.style.display = 'block';
      } else {
        swipeLeft.style.display = 'none';
      }
    }

    seats.forEach(seatClick => {
      seatClick.onclick = function(){
        if(seatClick.classList.contains('available')){
          seatClick.classList.toggle('selected');
        }
      };
    });
  }


  // 11. Video Modal Reset Handler
  const modals = document.querySelectorAll('.modal');
  modals.forEach(function(modal) {
    const video = modal.querySelector('iframe');
    if (video) {
      modal.addEventListener('hidden.bs.modal', function () {
        video.src = video.src;
      });
    }
  });

}