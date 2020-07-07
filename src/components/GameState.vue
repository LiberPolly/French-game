<template>
  <div>
    <div class="game-state">
      <h1 id="question" class="question" v-if="seenQuestion">Où est le mouton?</h1>
      <h1 id="result" class="result" v-if="seenMsg">{{result}}</h1>
      <img class="game-img" alt="game img" :src="currentImg" v-if="seenImg" />
      <Check v-if="seenCheck" />
      <Cross v-if="seenCross" />
      <Statistics
        v-if="seenStatistics"
        :currentQuestion="currentQuestion"
        :mistakes="mistakes"
        :style="{top: statisticsCoords.y + 'px', left: statisticsCoords.x + 'px' }"
      />
      <form @submit.prevent="onSubmit" v-if="seenForm">
        <input
          name="input"
          placeholder="Où?"
          type="text"
          v-model="title"
          autofocus
          autocomplete="off"
        />
      </form>
    </div>
    <div class="progress" v-if="seenProgress">
      <p>{{progress}}</p>
    </div>
  </div>
</template>

<script>
import Check from "@/components/Check";
import Cross from "@/components/Cross";
import Statistics from "@/components/Statistics";

export default {
  name: "GameState",

  components: {
    Check,
    Cross,
    Statistics
  },

  props: {
    correctAnswers: Object
  },

  data() {
    return {
      title: " ",
      seenQuestion: true,
      seenMsg: false,
      seenForm: true,
      seenProgress: true,
      seenImg: true,
      seenCheck: false,
      seenCross: false,
      seenStatistics: false,
      currentQuestion: 0,
      result: "",
      timerId: "",
      mistakes: 0
    };
  },

  computed: {
    savedGames: function() {
      let LocalStorage = localStorage.getItem("savedGames");
      let savedGames = JSON.parse(LocalStorage);
      return savedGames;
    },

    currentGame: function() {
      let games = this.savedGames.games;
      let currentGameNumber = games.length;
      let currentGame = games[currentGameNumber - 1];
      return currentGame;
    },

    lastQuestion: function() {
      let key;
      for (key in this.correctAnswers) {
        key++;
      }
      return key - 1;
    },

    currentImg: function() {
      return require(`../assets/${this.currentQuestion}.png`);
    },

    progress: function() {
      return `${this.currentQuestion}/${this.lastQuestion}`;
    },

    statisticsCoords: function() {
      let coords = {
        x: document.documentElement.clientWidth / 2 - 182,
        y: 180
      };
      return coords;
    }
  },

  methods: {
    onSubmit() {
      console.log(this.lastQuestion);
      let newAnswer = this.title.trim().toLowerCase();
      this.checkAnswer(newAnswer);
    },

    checkAnswer(a) {
      let currentAnswers = this.correctAnswers[this.currentQuestion];

      if (
        currentAnswers.includes(a) &&
        this.currentQuestion < this.lastQuestion
      ) {
        this.currentQuestion++;
        this.showResult("Bravo!", "#3e993e", "seenCheck");
        this.saveState("new question");
      } else if (
        !currentAnswers.includes(a) ||
        this.currentQuestion < this.lastQuestion
      ) {
        this.showResult("Proposez une autre réponsse!", "#fd0000", "seenCross");
        this.mistakes++;
        this.saveState("new mistake");
      } else {
        this.showResult("Fin!", "#424b4f", "seenCheck", () =>
          clearTimeout(this.timerId)
        );
      }
      this.title = "";
      console.log(currentAnswers);
    },

    showResult(msg, color, loader, callback) {
      let message = document.querySelector("h1");

      if (!callback) {
        this.timerId = setTimeout(() => {
          this.seenMsg = false;
          this.seenQuestion = true;
          this.seenImg = true;
          if (loader === "seenCross") this.seenCross = false;
          if (loader === "seenCheck") this.seenCheck = false;
          message.style.color = "#424b4f";
        }, 1200);
        this.seenMsg = true;
        this.seenQuestion = false;
        this.seenImg = false;
        if (loader === "seenCross") this.seenCross = true;
        if (loader === "seenCheck") this.seenCheck = true;
        this.result = msg;
        message.style.color = color;
      } else {
        callback();
        setTimeout(() => {
          this.result = msg;
          message.style.color = color;
          this.seenForm = false;
          this.seenProgress = false;
          this.seenImg = false;
          this.seenCheck = false;
          this.seenStatistics = true;
        }, 1200);
        this.seenMsg = true;
        this.seenQuestion = false;
        this.seenForm = false;
        this.seenImg = false;
        this.result = "Bravo!";
        this.seenCheck = true;
        message.style.color = "#3e993e";
      }
    },

    saveState(change) {
      if (change == "new question") {
        this.currentGame.splice(1, 1, this.currentQuestion);
        this.savedGames.games.splice(-1, 1, this.currentGame);
        let newState = JSON.stringify(this.savedGames);
        localStorage.setItem("savedGames", newState);
      } else if (change == "new mistake") {
        this.currentGame.splice(2, 1, this.mistakes);
        this.savedGames.games.splice(-1, 1, this.currentGame);
        let newState = JSON.stringify(this.savedGames);
        localStorage.setItem("savedGames", newState);
      }
    }
  },

  beforeMount: function() {
    this.currentQuestion = this.currentGame[1];
    this.mistakes = this.currentGame[2];
  }
};
</script>

<style scoped>
.game-state {
  min-height: calc(100vh - 200px);
}

h1 {
  margin-top: 120px;
  color: #424b4f;
}

.game-img {
  width: 416px;
  height: 449px;
}

form {
  display: flex;
  justify-content: center;
}

input {
  display: block;
  margin-top: 20px;
  padding: 1rem 1rem;
  min-width: 90%;
  border: none;
  border-radius: 2px;
  outline: none;
  font-size: 30px;
  text-align: center;
  color: #424b4f;
  background-color: #f1efd9;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

::-webkit-input-placeholder {
  color: #e0d56d;
}

::-moz-placeholder {
  color: #e0d56d;
}

:-moz-placeholder {
  color: #e0d56d;
}

:-ms-input-placeholder {
  color: #e0d56d;
}

.progress {
  align-self: center;
  height: 50px;
  color: #424b4f;
  font-size: 1rem;
}

@media screen and (max-width: 414px) {
  h1 {
    margin-top: 50px;
    margin-bottom: 5px;
    font-size: 1.2rem;
  }

  .game-img {
    width: 188px;
    height: 204.5px;
    margin-top: -10px;
    margin-bottom: -50px;
  }

  input {
    margin-top: 0px;
    font-size: 1rem;
  }

input {
  margin-top: 0;
  padding: 0.4rem 0.8rem;
  font-size: 1rem;
}


.progress {
  height: 0.8rem;
  font-size: 0.8rem;
} 
}
</style>
