<template>
  <div class="start-page">
    <nav>
      <ul>
        <li v-if="seenResume">
          <router-link class="nav-links" to="/GamePage">Recommencer</router-link>
        </li>
        <li v-if="seenStart">
          <router-link class="nav-links" to="/GamePage">
            <p class="nav-links-p" @click="toStart()">Jouer</p>
          </router-link>
        </li>
        <li>
          <router-link class="nav-links" to="/TotalStatistics">Statistiques</router-link>
        </li>
      </ul>
    </nav>

    <div class="video">
      <iframe
        class="video-frame"
        title="introduce video"
        src="https://www.youtube.com/embed/P0CqJc_Qjco"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>

    <h2 class="some-title">Le jeu des prépositions de lieu.</h2>
    <h1 class="question">Où est le mouton?</h1>

    <router-link class="button" to="/GamePage" @click="toStart()">
      <p class="button-p" @click="toStart()">JOUER</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "StartPage",

  data() {
    return {
      seenResume: false,
      seenStart: true
    };
  },

  computed: {
    CurrentDate: function() {
      let today = new Date();
      let day = today.getDate();
      let month = today.getMonth() + 1;
      let year = today.getFullYear();
      if (day < 10) {
        day = "0" + day;
      }
      if (month < 10) {
        month = "0" + month;
      }
      let date = day + "." + month + "." + year;
      return date;
    }
  },

  methods: {
    toStart() {
      let savedGames = {
        games: [[this.CurrentDate, 1, 0]]
      };

      if (!localStorage.getItem("savedGames")) {
        localStorage.setItem("savedGames", JSON.stringify(savedGames));
      } else {
        let unparsed = localStorage.getItem("savedGames");
        savedGames = JSON.parse(unparsed);
        savedGames.games.push([this.CurrentDate, 1, 0]);
        localStorage.setItem("savedGames", JSON.stringify(savedGames));
      }
    }
  },

  beforeMount: function() {
    if (!localStorage.getItem("savedGames")) {
      this.seenResume = false;
      this.seenStart = true;
    } else {
      this.seenResume = true;
      this.seenStart = false;
    }
  }
};
</script>


<style scoped>
.start-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

nav {
  background-color: #fff;
}

.nav-links {
  color: #c0ae36;
}

.nav-links-p {
  font-size: 25px;
  display: inline;
}

.nav-links:hover {
  color: #e8d83d;
}

.nav-links:active {
  color: #ffa1f6;
}

.nav-btn {
  color: #ffa1f6;
}

.video {
  display: flex;
  align-self: center;
  height: 308px;
  width: 608px;
  margin-bottom: 40px;
}

.video-frame {
  height: 100%;
  width: 100%;
}

h1 {
  margin: 15px 0 15px 0;
}

h2 {
  margin: 15px 0 15px 0;
}

.button-p {
  margin: 0 0 0 0;
  padding: 0 0 0 0;
  font-size: 50px;
}

.button {
  display: flex;
  align-self: center;
  justify-content: center;
  margin: 15px 0 15px 0;
  padding: 25px 40px;
  height: 55px;
  width: 150px;
  text-decoration: none;
  outline: none;
  font-weight: bold;
  color: #fff;
  border: none;
  border-radius: 50px;
  -webkit-border-radius: 50px;
  -moz-border-radius: 50px;
  background: #e8d83d;
  background: -moz-linear-gradient(top, #e8d83d 0%, #c0ae36 100%);
  background: -webkit-linear-gradient(top, #e8d83d 0%, #c0ae36 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#c0ae36', endColorstr='#c0ae36',GradientType=0 );
  background: linear-gradient(top, #e8d83d 0%, #c0ae36 100%);
  box-shadow: 0px 0px 20px #bababa, inset 0px 0px 1px #ffffff;
  -webkit-box-shadow: 0px 0px 20px #bababa, inset 0px 0px 1px #ffffff;
  -moz-box-shadow: 0px 0px 20px #bababa, inset 0px 0px 1px #ffffff;
}
.button:hover {
  background: -moz-linear-gradient(top, #e8d83d 0%, #fd80f1 100%);
  background: -webkit-linear-gradient(top, #e8d83d 0%, #fd80f1 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fd80f1', endColorstr='#fd80f1',GradientType=0 );
  background: linear-gradient(top, #e8d83d 0%, #fd80f1 100%);
}
.button:active {
  color: #fff;
  background: -moz-linear-gradient(top, #e8d83d 0%, #f85de9 100%);
  background: -webkit-linear-gradient(top, #e8d83d 0%, #f85de9 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f85de9', endColorstr='#f85de9',GradientType=0 );
  background: linear-gradient(top, #e8d83d 0%, #f85de9 100%);
}

@media screen and (max-width: 620px) {
  .video {
    width: 100%;
  }

  .video-frame {
    height: 100%;
    width: 100%;
  }
}

@media screen and (max-width: 414px) {
  .video {
    margin-top: 0;
    margin-bottom: 10px;
    height: 154px;
    width: 304px;
  }

  .video-frame {
    height: 100%;
    width: 100%;
  }

  h1 {
    font-size: 1.2rem;
    margin: 10px 0 30px 0;
  }

  h2 {
    font-size: 1rem;
    margin: 60px 0 10px 0;
  }

  ul {
    margin-right: 10px;
  }
  .nav-links {
    font-size: 1.2rem;
  }
  .nav-links-p {
    font-size: 1.2rem;
  }

  nav {
    height: 40px;
  }

  .button-p {
    font-size: 2rem;
  }

  .button {
    margin: 10px 0 0 0;
    padding: 25px 50px;
    height: 30px;
    width: 90px;
  }
}

@media screen and (max-height: 768px) {
  .video {
    margin-top: 40px;
    margin-bottom: 20px;
  }

  .video-frame {
    height: 100%;
    width: 100%;
  }

  h1 {
    margin: 10px 0 10px 0;
    font-size: 1.5rem;
  }

  h2 {
    margin: 20px 0 10px 0;
    font-size: 1.3rem;
  }

  nav {
    height: 60px;
  }

  .button-p {
    font-size: 2rem;
  }

  .button {
    margin: 10px 0 0 0;
    padding: 25px 50px;
    height: 30px;
    width: 90px;
  }
}
</style>