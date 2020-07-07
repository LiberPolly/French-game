<template>
  <div class="container">
    <nav>
      <ul>
        <li>
          <router-link class="nav-links" to="/">Jouer</router-link>
        </li>
        <li>
          <router-link class="nav-links" to="/TotalStatistics">Statistiques</router-link>
        </li>
      </ul>
    </nav>
    <div id="totalStatistics" class="total-statistics">
      <h1>Statistiques</h1>
    </div>
    <button class="button" @click="clearStatistics()" v-if="seenBtn">
      <p>
        Remettre
        <br/> à&nbsp;zéro
      </p>
    </button>
  </div>
</template>

<script>
export default {
  name: "TotalStatistics",

  data() {
    return {
      seenBtn: true
    };
  },

  methods: {
    clearStatistics() {
      localStorage.clear();
      document.location.reload(true);
    }
  },

  mounted: function() {
    const statisticsDiv = document.querySelector("#totalStatistics");

    if (!localStorage.getItem("savedGames")) {
      let h2 = document.createElement("h2");
      h2.innerHTML = "Let's play and make statistics!";
      statisticsDiv.append(h2);
      this.seenBtn = false;
    } else {
      let savedGamesObj = JSON.parse(localStorage.getItem("savedGames"));
      let savedGames = savedGamesObj.games;

      savedGames.forEach(game => {
        let date = game[0];
        let passedQuestions = game[1];
        let mistakes = game[2];

        let gameDiv = document.createElement("div");

        gameDiv.innerHTML = `
          <table style="color: #424b4f; font-size: 1.1rem; display: inline-block; margin-bottom: 20px;">
            <tr style="height: 40px; width: 600px;">
              <td>${date}</td>
              <td style="width: 200px;">Questions validées: ${passedQuestions}</td>
              <td>Erreurs: ${mistakes}</td>
            </tr>
          </table>`;

        statisticsDiv.append(gameDiv);
      });
    }
  }
};
</script>

<style scoped>
.total-statistics {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 100px;
}

.button p {
  display: inline;
  margin: 0 0 0 0;
  padding: 0 0 0 0;
  font-size: 28px;
}

.button {
  display: flex;
  align-self: center;
  justify-content: center;
  margin: 15px 0 15px 0;
  padding: 12px 0 20px 0;
  height: 85px;
  width: 180px;
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

@media screen and (max-width: 414px) {
  h1 {
    font-size: 1.3rem;
    margin-top: 0;
  }
}
</style>