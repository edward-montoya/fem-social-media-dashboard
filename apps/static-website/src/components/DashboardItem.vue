<template>
    <article class="dashboard__item dashboard__item--meta">
            <h3 class="sr-only">{{ props.socialNetwork }}</h3>
            <a class="dashboard__link">
              <img :src="getIcon(props.socialNetwork)" alt="">
              <span>{{ props.account }}</span>
            </a>
            <div class="dashboard__counter">
              <span class="dashboard__counter-value">{{ formatFollowers() }}</span>
              <span class="dashboard__label">Followers</span>
            </div>
            <div class="dashboard__indicator" :class="getClassIndicator()">
              <img :src="getIndicator(props.views)" />
              <span>{{ getViews() }} Today</span>
            </div>
          </article>
</template>

<script setup>
import formatter from '../utils/formatters';
import { getIcon, getIndicator } from '../utils/images';

const props = defineProps({
    socialNetwork: String,
    followers: Number,
    account: String,
    views: Number,
});

function getViews() {
    return Math.abs(props.views);
}

function formatFollowers() {
    return formatter(props.followers, 0);
}

function getClassIndicator() {
    const val = props.views >= 0 ? 'success' : 'error';
    return `dashboard__indicator--${val}`;
}

</script>
