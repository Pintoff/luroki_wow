<template>
  <main>
    <div class="guild_heroes">
        <div class="guild_heroes_title">
            <h2>Guild Heroes</h2>
        </div>
        <div class="guild_heroes_text">
            <h2>Meet some of our finest members, equipped with skill and ready to take on any battle.</h2>
        </div>
        </div>
        <div class="hero_profiles">
            <div class="hero_frame">
                <div class="img_wrap">
                    <img src="../assets/img/artas.jpg" alt="">
                </div>
                <div class="hero_text">
                    <div class="hero_name">
                        <h3>Артасвторой</h3>
                    </div>
                    <div class="hero_about">
                        <p>Чемпион всех ключей и создатель гильдии</p>
                    </div>
                </div>
            </div>

            <div class="hero_frame">
                <div class="img_wrap">
                    <img src="../assets/img/polina.jpg" alt="">
                </div>
                <div class="hero_text">
                    <div class="hero_name">
                        <h3>Баобабка</h3>
                    </div>
                    <div class="hero_about">
                        <p>Полина</p>
                    </div>
                </div>
            </div>

            <div class="hero_frame">
                <div class="img_wrap">
                    <img src="../assets/img/rezektus.jpg" alt="">
                </div>
                <div class="hero_text">
                    <div class="hero_name">
                        <h3>Резектус</h3>
                    </div>
                    <div class="hero_about">
                        <p>Свожу в маски за 200к</p>
                    </div>
                </div>
            </div>

        </div>
  </main>
  <footer>
    <div class="foot_faq">
        <div class="faq_title">
            <h2>Guild queries</h2>
        </div>
        <div class="faq_list">

            <div class="faq_item">
                <div class="item_title">
                    <h2>How to become a member?</h2>
                </div>
                <div class="item_text">
                    <h2>Simply reach out to any of our officers in-game or contact us through the website or discord. We’ll gladly guide newcomers to our ranks and help you become a member.</h2>
                </div>
            </div>

            <div class="faq_item">
                <div class="item_title">
                    <h2>What’s our primary focus?</h2>
                </div>
                <div class="item_text">
                    <h2>We balance PvE and PvP activities, making sure there’s always something exciting for everyone. The guild masters carefully plan and organize events throughout the week.</h2>
                </div>
            </div>

            <div class="faq_item">
                <div class="item_title">
                    <h2>Do we provide gear assistance?</h2>
                </div>
                <div class="item_text">
                    <h2>Absolutely! Our experienced guild crafters and raiders often help members acquire essential gear and materials, ensuring we are always ready for the challenges ahead.</h2>
                </div>
            </div>

        </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'land-members',
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
@import url('https://fonts.googleapis.com/css2?family=Bowlby+One&family=Silkscreen&display=swap');

main {
    align-items: center;
    background-color: #92e6a7;
    display: flex;
    flex: none;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 60px;
    height: min-content;
    justify-content: center;
    overflow: hidden;
    padding: 100px;
    position: relative;
    width: 100%;
}

.guild_heroes {
    align-items: center;
    display: flex;
    flex: none;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 20px;
    height: min-content;
    justify-content: flex-start;
    max-width: 1000px;
    overflow: hidden;
    padding: 0;
    position: relative;
    width: 100%;
}

.hero_profiles {
    align-items: center;
    display: flex;
    flex: none;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 20px;
    height: min-content;
    justify-content: center;
    max-width: 1000px;
    overflow: visible;
    padding: 0;
    position: relative;
    width: 100%;
}

.hero_frame {
    align-items: center;
    background-color: #7de196;
    border-radius: 30px;
    display: flex;
    flex: 1 0 0px;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 20px;
    height: 300px;
    justify-content: center;
    overflow: visible;
    padding: 40px;
    position: relative;
    transition: .3s;
}

.hero_profiles:hover > :not(:hover) {
    opacity: .4;
}

.img_wrap {
    -webkit-filter: grayscale(1);
    aspect-ratio: 1 / 1;
    border-radius: 64px;
    filter: grayscale(1);
    flex: none;
    height: auto;
    overflow: hidden;
    position: relative;
    width: 80px;
    will-change: transform;
}

.img_wrap img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    object-position: center;
    object-fit: cover;
    image-rendering: auto;
}

.hero_name {
    outline: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-shrink: 0;
    transform: none;
}

.hero_name h3 {
    font-family: "Bowlby One", sans-serif;
    font-size: 20px;
    line-height: 1.4em;
    text-align: center;
    text-transform: uppercase;
}


.hero_about {
    outline: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-shrink: 0;
    transform: none;
}

.hero_about p {
    font-family: "Archivo", "Archivo Placeholder", sans-serif;
    line-height: 1.5em;
    text-align: left;
    font-weight: 400;
}


.guild_heroes_title h2 {
    font-family: "Silkscreen", sans-serif;
    font-size: 40px;
    text-align: center;
}

.guild_heroes_text h2 {
    font-family: "Archivo", "Archivo Placeholder", sans-serif;
    font-size: 32px;
    font-weight: 700;
    letter-spacing: -0.05em;
    line-height: 1.3em;
    text-align: center;
}


.foot_faq {
    align-content: center;
    align-items: center;
    background-color: #25a244;
    display: flex;
    flex: none;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 60px;
    height: min-content;
    justify-content: center;
    overflow: hidden;
    padding: 100px;
    position: relative;
    width: 100%;
}

.faq_list {
    align-content: flex-start;
    align-items: flex-start;
    display: flex;
    flex: none;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 100px;
    height: min-content;
    justify-content: center;
    max-width: 1000px;
    overflow: hidden;
    padding: 0;
    position: relative;
    width: 100%;
}

.faq_item {
    align-content: flex-start;
    align-items: flex-start;
    display: flex;
    flex: 1 0 0px;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 10px;
    height: min-content;
    justify-content: center;
    max-width: 100%;
    overflow: visible;
    padding: 0;
    position: relative;
    width: 1px;
}

.faq_title h2 {
    font-family: "Silkscreen", sans-serif;
    font-size: 64px;
    line-height: 1.1em;
    text-align: center;
    font-weight: 400;
    color: #B7EFC5;
}

.item_title h2 {
    font-family: "Archivo", "Archivo Placeholder", sans-serif;
    font-size: 30px;
    font-weight: 500;
    letter-spacing: -0.025em;
    line-height: 1.5em;
    text-align: left;
}

.item_text h2 {
    font-family: "Archivo", "Archivo Placeholder", sans-serif;
    font-weight: 500;
    line-height: 1.5em;
    text-align: left;
    color: rgb(255, 255, 255);
}

@media (max-width: 809px) {
    main {
        gap: 40px;
        padding: 60px 20px;
    }

    .hero_profiles {
        flex-direction: column;
    }

    .hero_frame {
        width: -webkit-fill-available;
    }

    .foot_faq {
        align-items: flex-start;
        gap: 40px;
        padding: 20px;
    }

    .faq_list {
        flex-direction: column;
        gap: 40px;
    }

    .faq_item {
        flex: none;
        width: 100%;
    }
}
</style>