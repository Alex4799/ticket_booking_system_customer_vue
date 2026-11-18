<template>
    <ul class="navbar-nav m-auto" id="nav-order">
        <li class="nav-item">
            <RouterLink class="nav-link" to="/">Home</RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink class="nav-link" to="/movie">Movies</RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink class="nav-link" to="/timeTable">Time Table</RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink class="nav-link" to="/promotion">Promotions</RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink class="nav-link" to="/ticket">Ticket</RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink class="nav-link" to="/about">About Us</RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink class="nav-link" to="/contact">Contact</RouterLink>
        </li>
    </ul>
</template>
<script setup>
    import { RouterLink } from 'vue-router';
</script>