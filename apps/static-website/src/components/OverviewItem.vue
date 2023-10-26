<template>
    <article class="overview-card">
          <h3 class="overview-card__title">{{ props.metric }}</h3>
          <img width="20" height="20" class="overview-card__image" :src="getIcon(props.socialNetwork)" alt="">
          <span class="overview-card__counter">{{ formatNumber(props.views, 0) }}</span>
          <div class="overview-card__indicator" :class="getClassIndicator()">
            <img width="8" height="4" :alt="altImage()" :src="getIndicator(props.percentage)" />
            <span>{{props.percentage}}%</span>
          </div>
        </article>
</template>

<script setup>
import formatNumber from '../utils/formatters';
import { getIcon, getIndicator } from '../utils/images';

const props = defineProps({
    metric: String,
    socialNetwork: String,
    percentage: Number,
    views: Number,
});

function getClassIndicator() {
    const val = props.percentage >= 0 ? 'success' : 'error';
    return `overview-card__indicator--${val}`;
}

function altImage () {
  return props.percentage >= 0 ? 'up arrow, views increase today' 
  : 'down arrow, views decrease today';
}

</script>

<style lang="scss" scoped>

</style>