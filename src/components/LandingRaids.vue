<template>
  <main>
    <div class="raid_title">
        <h2>Raid victories</h2>
    </div>
    <div class="raid_collection">

        <div class="raid_item">
            <div class="raid_wrap">
                <img src="../assets/img/six.jpg" alt="">
            </div>
        </div>

        <div class="raid_item">
            <div class="raid_wrap">
                <img src="../assets/img/second.jpg" alt="">
            </div>
        </div>

        <div class="raid_item">
            <div class="raid_wrap">
                <img src="../assets/img/third.jpg" alt="">
            </div>
        </div>

        <div class="raid_item">
            <div class="raid_wrap">
                <img src="../assets/img/four.jpg" alt="">
            </div>
        </div>

        <div class="raid_item">
            <div class="raid_wrap">
                <img src="../assets/img/five.jpg" alt="">
            </div>
        </div>

        <div class="raid_item">
            <div class="raid_wrap">
                <img src="../assets/img/six.jpg" alt="">
            </div>
        </div>

    </div>
  </main>
</template>

<script>
export default {
  name: 'land-raids',
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
main {
    align-items: center;
    background-color: #FFF;
    display: flex;
    flex: none;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 60px;
    height: min-content;
    justify-content: flex-start;
    overflow: hidden;
    padding: 100px;
    position: relative;
    width: 100%;
}

.raid_collection {
    display: grid;
    flex: none;
    gap: 20px;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(3,minmax(200px,1fr));
    grid-template-rows: repeat(2,min-content);
    height: min-content;
    justify-content: center;
    max-width: 1000px;
    mix-blend-mode: luminosity;
    overflow: visible;
    padding: 0;
    position: relative;
    width: 100%;
}

.raid_title h2 {
    font-family: "Silkscreen", sans-serif;
    font-size: 40px;
    text-align: center;
}

.raid_item {
    -webkit-filter: grayscale(1);
    align-self: start;
    aspect-ratio: .98 / 1;
    border-radius: 40px;
    filter: grayscale(1);
    flex: none;
    height: 326px;
    justify-self: start;
    overflow: hidden;
    position: relative;
    width: 100%;
    will-change: transform;
}


.raid_wrap {
    position: absolute;
    border-radius: inherit;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
.raid_wrap img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    object-position: center;
    object-fit: cover;
    image-rendering: auto;
}


@media (max-width: 809px) {
    .raid_collection {
        grid-template-columns: repeat(2,minmax(100px,1fr));
    }

    .raid_item {
        border-radius: 20px;
        height: 168px;
    }
}

@media (max-width: 700px) {
    .raid_collection {
        grid-template-columns: repeat(1,minmax(120px,1fr));
    }

    .raid_item {
        border-radius: 20px;
        height: 25vh;
    }
}


</style>