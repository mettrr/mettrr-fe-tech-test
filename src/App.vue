<!-- Root component It will serve as the point from which,
 our page components will be rendered-->
<template>
    <div id="app" class="" >
        <div class="container">
            <div class="md-toolbar main-header md-theme-default md-elevation-2 ">
                <div class="md-toolbar-row">
                    <div class="md-toolbar-section-start">
                        <a href="" class="md-button md-icon-button logo md-theme-default">
                            <div class=" md-rippple">
                                <div class="md-button-content">
                                    <img src="./assets/mettrr-logo.png">
                                </div>
                            </div>
                        </a>
                        <div class="md-title">
                            <h1 class="md-title">{{msg}}</h1>
                        </div>
                    </div>
                    <div class="md-toolbar-section-end">
                        <div class="md-title">
                            <h4 class="">{{candidate}}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-wrapper md-layout-row">
            <div class="main-nav-container">
                <div class="md-content main-nav md-scrollbar md-theme-light-green">
                    <div class="main-nav-content">
                         <!--we added the name parameter to our routes. 
            In this case the name of the route is Hello just 
            like the component it points to -->
                        <router-link :to="{ name: 'Home' }">Home</router-link>
                           <!--we added two <router-link> tags using two different methods.
                The router uses <router-link> to create html links to routes 
                you created-->
                        <router-link to="/country-list">Country list</router-link>
                    </div>
                </div>
            </div>
            <div class="page-container main-container centered">
                <div class="page-container-section">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                msg: 'Mettrr Tech Test',
                candidate: 'Alexandre Gadaix',
            };
        },
    };
</script>

<style lang="scss">
    // @import "../node_modules/vue-material/dist/theme/engine.scss"; // Import the theme engine

    // @include md-register-theme("default", (
    // primary: md-get-palette-color(blue, A200) // The primary color of your application
    // ));

    // @import "../node_modules/vue-material/dist/theme/all.scss";
    body {
        font-family: Roboto Mono,monospace;
        #app {
            
           .container{
                min-height: 100%;
                padding-top: 64px;
                display: -webkit-box;
                display: flex;
                -webkit-box-orient: vertical;
                -webkit-box-direction: normal;
                flex-direction: column;
                font-family: Roboto Mono,monospace;
                transition: .4s cubic-bezier(.4,0,.2,1);
                transition-property: padding-top;

                .main-header{
                    margin: auto;
                    max-width: 100%;
                    position: fixed;
                    top: 0;
                    right: 0;
                    left: 0;
                    z-index: 3;
                    transition: .3s cubic-bezier(.4,0,.2,1),box-shadow .4s cubic-bezier(.25,.8,.25,1) .1s;
                    will-change: box-shadow,max-width,background-color;
                }
            }
           .container-wrapper{
            -webkit-box-flex: 1;
            flex: 1;
            padding-left: 230px!important;

            .main-nav-container{
                .main-nav{
                    width: 230px;
                    padding: 24px 16px 112px;
                    display: -webkit-box;
                    display: flex;
                    -webkit-box-align: start;
                    align-items: flex-start;
                    -webkit-box-orient: vertical;
                    -webkit-box-direction: normal;
                    flex-direction: column;
                    overflow: auto;
                    position: fixed;
                    top: 64px;
                    bottom: 0;
                    left: 0;
                    transition: .3s cubic-bezier(.4,0,.2,1);
                    transition-property: top;

                    a{
                        display: block;
                        font-size: 14px;
                        line-height: 2em;
                        }
                    }
                }
            }


            .main-container {
                -webkit-box-flex: 1;
                flex: 1;
                position: relative;
                z-index: 1;
            }
            .page-container.centered {
                max-width: 1100px;
                margin: 0 auto;
                padding: 16px;
                transition: .4s cubic-bezier(.4,0,.2,1);

                .page-container-section{
                    letter-spacing: .01em;
                    line-height: 1.6em;

                    
                }
            }
               
        }
        .md-menu-content.md-select-menu{
            background: white !important;
        }
    }
</style>
