<template>
    <transition name="fade">
        <div
            class="loader-background"
            v-show="loading"
        >
            <div class="loader"></div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'LoadingSpinner',
    props: {
        loading: {
            type: Boolean,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.loader {
    position: absolute;
    top: 50%;
    left: 50%;
    color: #7551ff;
    position: relative;
    width: 4em;
    height: 4em;
    border-radius: 50%;
    box-shadow: inset 0 0 0 .5em;
    transform: translate(-50%, -50%) translateZ(0);

    &:before,
    &:after {
        content: '';
        position: absolute;
        top: -0.1em;
        left: -0.1em;
        width: 2.1em;
        height: 4.1em;
        background: #fff;
        border-radius: 4em 0 0 4em;
        transform-origin: 2.1em 2.1em;
        animation: load 2s infinite ease 1.5s;
    }

    &:after {
        background: #fff;
        border-radius: 0 4em 4em 0;
        left: 2.1em;
        transform-origin: 0px 2.1em;
        animation: load 2s infinite ease;
    }

    &-background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;    
        background: #fff;
    }
}


@keyframes load {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

</style>
