<template>
    <article class="overview-card">
          <h3 class="overview-card__title">
            <a class="overview-card__link" :aria-label="cardDescription" :href="hrefAccount">
              {{ props.metric }}
            </a>
          </h3>
          <img width="20" height="20" class="overview-card__image" :src="getIcon(props.socialNetwork).value" alt="">
          <span class="overview-card__counter">{{ formatNumber(props.views, 0) }}</span>
          <div class="overview-card__indicator" :class="getClassIndicator">
            <img width="8" height="4" :alt="altImage" :src="getIndicator(props.percentage).value" />
            <span>{{props.percentage}}%</span>
          </div>
        </article>
</template>

<script setup>
import formatNumber from '../utils/formatters';
import useImages from '../utils/images';
import { computed } from 'vue';

const props = defineProps({
    metric: String,
    socialNetwork: String,
    percentage: Number,
    views: Number,
    account: String,
});

const { getIcon, getIndicator, basePath } = useImages();

const getClassIndicator = computed(() => {
  const val = props.percentage >= 0 ? 'success' : 'error';
    return `overview-card__indicator--${val}`;
});

const altImage = computed(() => props.percentage >= 0 ? 'up arrow, views increase today' 
  : 'down arrow, views decrease today');

const hrefAccount = computed(() => `${basePath(props.socialNetwork)}/${props.account}/${props.metric}`);

const cardDescription = computed(() => `${props.metric} of ${props.account} at ${props.socialNetwork}`)

</script>

<style lang="scss" scoped>

</style>