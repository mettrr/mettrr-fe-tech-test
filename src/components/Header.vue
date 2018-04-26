<template>
    <v-toolbar fixed>
        <v-toolbar-title>Mettrr</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="">
            <v-btn flat @click="navigateTo({name: 'home'})">Home</v-btn>
            <v-btn flat @click="navigateTo({name: 'countryList'})">country</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
    methods: {
        navigateTo(route) {
            this.$router.push(route);
        },
    },
};
</script>
<style lang="scss">
	header {
		margin-bottom: 20px;
		.navbar-brand {
			font-family: "Rammetto One", cursive;
			font-size: 1.5em;
		}
	}
</style>