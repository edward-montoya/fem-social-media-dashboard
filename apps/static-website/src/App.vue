<template>
    <header class="header">
        <h1 class="header__title">Social Media Dashboard</h1>
        <span class="header__subtitle">Total Followers: 23,004</span>
      <hr />
      <div class="mode">
        <span class="mode__label">Dark Mode</span>
        <label class="switch">
          Switch
          <input :value="theme.value === 'dark'" @change="toogleTheme" class="switch__input" type="checkbox" />
          <span class="switch__slider switch__slider--round"></span>
        </label>
      </div>
    </header>
    <main>
      <section class="dashboard">
        <h2 class="sr-only">Dashboard</h2>
        <div class="dashboard__content">
          <DashboardItem v-for="item in dashboard" v-bind="item" />
        </div>
      </section>
      <section class="overview">
        <h2 class="overview__title">Overview - Today</h2>
        <div class="overview__content">
            <OverviewItem v-for="item in overview" v-bind="item" />
        </div>
      </section>
    </main>
    <footer class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://nicolasmontoya.com">Edward Montoya</a>.
    </footer>
</template>

<script setup>
import { onMounted, watch, shallowRef } from "vue";
import DashboardItem from "./components/DashboardItem.vue";
import OverviewItem from "./components/OverviewItem.vue";

const theme = shallowRef('dark');
const dashboard = shallowRef([
    {
        socialNetwork: 'facebook',
        followers: 1987,
        views: 12,
        account: '@nathanf'
    },
    {
        socialNetwork: 'twitter',
        followers: 1044,
        views: 99,
        account: '@nathanf'
    },
    {
        socialNetwork: 'instagram',
        followers: 11000,
        views: 12,
        account: '@nathanf'
    },
    {
        socialNetwork: 'youtube',
        followers: 8239,
        views: -144,
        account: '@nathanf'
    }
]);

const overview = shallowRef([
    {
        metric: 'Page Views',
        socialNetwork: 'facebook',
        percentage: 3,
        views: 87,
    },
    {
        metric: 'Likes',
        socialNetwork: 'facebook',
        percentage: -2,
        views: 52,
    },
    {
        metric: 'Likes',
        socialNetwork: 'instagram',
        percentage: 2257,
        views: 5462,
    },
    {
        metric: 'Profile Views',
        socialNetwork: 'instagram',
        percentage: 1375,
        views: 52000,
    },
    {
        metric: 'Retweets',
        socialNetwork: 'twitter',
        percentage: 303,
        views: 117,
    },
    {
        metric: 'Likes',
        socialNetwork: 'twitter',
        percentage: 553,
        views: 507,
    },
    {
        metric: 'Likes',
        socialNetwork: 'youtube',
        percentage: -19,
        views: 107,
    },
    {
        metric: 'Total Views',
        socialNetwork: 'youtube',
        percentage: -12,
        views: 1407,
    },
]);

onMounted(() => {
    var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    if (storedTheme) {
        theme.value = storedTheme;
    }
});

watch(theme, async (oldValue, newValue) => {
    if (oldValue !== newValue) {
        document.documentElement.setAttribute('data-theme', newValue);
    }
})

const toogleTheme = () => {
    if (theme.value === "light") {
        theme.value = "dark";
    } else {
        theme.value = "light"
    }
    localStorage.setItem('theme', theme.value);
}

</script>

<style lang="scss" scoped>

</style>