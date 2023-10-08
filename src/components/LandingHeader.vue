<template>
  <header>
        <div class="header_content">
                <div class="header_line">
                    <div class="header_items">
                        <router-link to="/"><p>Home</p></router-link>
                    </div>
                    <div class="header_items">
                        <router-link to="/members"><p>Members</p></router-link>
                    </div>
                    <div class="header_items">
                        <router-link to="/raids"><p>Raids</p></router-link>
                    </div>
                    <div class="header_items">
                        <router-link to="/login"><p>Reward system</p></router-link>
                    </div>
            </div>
            <div class="header_inner">
                <h1>Join Luroki—conquer the World of Warcraft.</h1>
            </div>
            <div class="header_background">
                <div class="background_inner">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#B7EFC5" width="800px" height="800px" viewBox="0 0 512 512" version="1.1" xml:space="preserve">

                        <g id="Axe">
                        
                        <g id="XMLID_1374_">
                        
                        <path d="M16.466,474.754c-3.402,4.839-4.724,10.753-3.701,16.617c1.023,5.866,4.269,10.981,9.141,14.406    c10.054,7.067,23.985,4.638,31.054-5.418l81.419-113.879l-37.115-24.743L16.466,474.754z" id="XMLID_1375_"/>
                        
                        <path d="M380.491,37.29c7.067-10.055,4.637-23.986-5.418-31.053c-4.87-3.424-10.78-4.746-16.648-3.723    c-5.866,1.024-10.981,4.27-14.404,9.14l-18.627,27.34c12.817,7.766,25.881,15.031,39.178,21.784L380.491,37.29z" id="XMLID_1376_"/>
                        
                        <polygon id="XMLID_1377_" points="108.789,345.473 145.905,370.217 182.939,317.965 145.82,293.219   "/>
                        
                        <path d="M475.354,124.398c-5.536,20.532-14.844,46.991-30.006,71.249    c-20.207,32.324-51.227,51.038-71.123,60.375c6.488,9.106,12.754,18.402,18.78,27.898c15.111-5.964,51.096-23.048,72.341-57.041    c22.617-36.187,31.362-78.549,34.226-96.499C491.441,128.545,483.371,126.544,475.354,124.398z" id="XMLID_1378_"/>
                        
                        <path d="M428.453,185.085c13.983-22.372,22.595-47.007,27.733-66.144    c-60.251-18.217-117.023-45.376-169.41-81.092l-53.532,76.156c49.191,35.64,92.351,77.73,128.9,125.63    C379.433,232.029,409.576,215.281,428.453,185.085z" id="XMLID_1379_"/>
                        
                        <path d="M157.345,276.956l37.121,24.747l86.669-122.282c-10.86-10.227-22.12-20.06-33.771-29.491    L157.345,276.956z" id="XMLID_1380_"/>
                        
                        </g>
                        
                        </g>
                        
                        <g id="Layer_1"/>
                        
                        </svg>
                </div>
            </div>
        </div>
        
    </header>
</template>

<script>
export default {
  name: 'land-header',
  components: {
    },
  data() {
    return {
    }
  },
 computed: {
    },
 methods: {
    },
 mounted(){
    }
}
</script>

<style scoped>
header {
    background-color: #2dc653;
    align-items: center;
    background-color: #2dc653;
    display: flex;
    flex-direction: column;
    flex: none;
    flex-wrap: nowrap;
    gap: 10px;
    height: 800px;
    justify-content: center;
    overflow: hidden;
    padding: 100px 50px;
    position: relative;
    width: 100%;
}

.header_inner {
    outline: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-shrink: 0;
    transform: none;
    z-index: 10;
}

.header_inner h1 {
    font-family: "Silkscreen", sans-serif;
    font-size: 64px;
    line-height: 1.1em;
    text-align: center;
    color: rgb(16, 69, 29);
    font-weight: 400;
}

.header_content {
    align-items: center;
    display: flex;
    flex: 1 0 0px;
    flex-direction: column;
    flex-wrap: nowrap;
    height: 100%;
    justify-content: space-between;
    max-width: 1000px;
    overflow: visible;
    padding: 0;
    position: relative;
    z-index: 5;
}

.header_line {
    align-items: center;
    display: flex;
    flex: none;
    flex-direction: row;
    flex-wrap: nowrap;
    height: min-content;
    justify-content: space-between;
    overflow: hidden;
    padding: 0;
    position: relative;
    width: 100%;
}

.header_items {
    font-family: "Archivo", sans-serif;
    text-align: left;
    color: rgb(16, 69, 29);
    font-size: 20px;
    z-index: 10;
}

.header_items p:hover {
    cursor: pointer;
    color: #fff;
}


.header_items a:active, /* активная/посещенная ссылка */
 /* при наведении */
.header_items a {
    text-decoration: none;
    cursor: pointer;
    color: rgb(16, 69, 29);
}

.header_items a:hover {
    color: #fff;

}

.header_background {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    max-width: 1000px;
    padding: 0;
    position: relative;
    z-index: 1;
    height: 514px;
    position: absolute;
    margin-top: 2vh;
}

.background_inner {
    width: 236px;
    height: 100%;
    background: linear-gradient(135deg, rgb(58, 210, 96), rgb(100, 220, 130));
    clip-path: circle(40%);
    z-index: -1;


}

.background_inner svg {
    width: inherit;
    height: inherit;
}

@media (min-width: 810px) and (max-width: 1199px) {
    .header_inner h1 {
        font-family: "Silkscreen", sans-serif;
        font-size: 40px;
        text-align: center;
    }
}

@media (max-width: 809px) {

    .header_inner h1 {
        font-family: "Silkscreen", sans-serif;
        font-size: 48px;
        line-height: 1em;
        text-align: center;
        color: rgb(16, 69, 29);
        font-weight: 400;
    }
}
</style>