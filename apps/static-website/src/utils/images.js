import { computed } from 'vue';

export default function useImages() {
    const getIcon = (icon) => computed(() => new URL(`../../assets/images/icon-${icon}.svg`, import.meta.url).href);
    const getIndicator = (views) => computed(() => {
        const dir = views < 0 ? 'down' : 'up';
        return new URL(`../../assets/images/icon-${dir}.svg`, import.meta.url).href;
    });
    function basePath(socialNetwork) {
        switch (socialNetwork) {
            case 'facebook': 
                return 'https://facebook.com/';
            case 'youtube':
                return 'https://youtube.com/';
            case 'instagram':
                return 'https://instragram.com/';
            case 'twitter' || 'x':
                return 'https://x.com/';
            default:
                throw new Error('Social network is not supported');
        }
    }
    return {
        getIcon,
        getIndicator,
        basePath
    }
}


