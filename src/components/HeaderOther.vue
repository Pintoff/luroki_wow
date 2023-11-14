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
        </div>
    </header>
</template>

<script>
export default {
  name: 'header-other',
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
    height: 224px;
    justify-content: center;
    overflow: hidden;
    padding: 100px 50px;
    position: relative;
    width: 100%;
}

.header_content {
    width: inherit;
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
}

.header_items p:hover {
    cursor: pointer;
    color: #fff;
}


.header_items a:active, 
.header_items a {
    text-decoration: none;
    cursor: pointer;
    color: rgb(16, 69, 29);
}

.header_items a:hover {
    color: #fff;

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

@media (max-width: 500px) {
    .header_items {
    font-size: 18px;
}


.header_line {
    align-items: flex-start;
    flex-direction: column;
}

}
</style>