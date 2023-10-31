<template>
    <article :class="`dashboard__item dashboard__item--${socialNetwork}`">
            <h3 class="sr-only">{{ props.socialNetwork }}</h3>
            <a :aria-label="cardLinkDescription" class="dashboard__link" :href="hrefAccount">
              <img width="20" height="20" :src="getIcon(props.socialNetwork).value" alt="">
              <span>{{ props.account }}</span>
            </a>
            <div class="dashboard__counter">
              <span class="dashboard__counter-value">{{ formatFollowers }}</span>
              <span class="dashboard__label">{{ socialNetwork=='youtube' ? 'subscribers' : 'followers' }}</span>
            </div>
            <div class="dashboard__indicator" :class="getClassIndicator">
              <img width="8" height="4" :alt="altImage" :src="getIndicator(props.views).value" />
              <span>{{ getViews }} Today</span>
            </div>
          </article>
</template>

<script setup>
import formatter from '../utils/formatters';
import useImages from '../utils/images';
import { computed } from 'vue';

const props = defineProps({
    socialNetwork: String,
    followers: Number,
    account: String,
    views: Number,
});

const { getIcon, getIndicator, basePath } = useImages();

const getViews = computed(() => Math.abs(props.views));

const formatFollowers = computed(() => formatter(props.followers, 0));

const getClassIndicator = computed(() => {
  const val = props.views >= 0 ? 'success' : 'error';
    return `dashboard__indicator--${val}`;
})

const altImage = computed(() => props.percentage >= 0 ? 'up arrow, percentage increase' 
  : 'down arrow, percentage decrease');

const hrefAccount = computed(() => basePath(props.socialNetwork) + props.account);

const cardLinkDescription = computed(() => 'go to ' + props.account + ' at ' + props.socialNetwork);

</script>
