<template>
  <div class="container">
    <nav>
      <ul>
        <li>
          <router-link class="nav-links" to="/">Jouer</router-link>
        </li>
        <li>
          <router-link class="nav-links" to="/CheatSheet">Aide</router-link>
        </li>
      </ul>
    </nav>
    <GameState :correctAnswers="correctAnswers" />
  </div>
</template>

<script>
import GameState from "@/components/GameState";

export default {
  name: "GamePage",

  components: {
    GameState
  },

  data() {
    return {
      correctAnswers: {
        1: [
          "le mouton est entre le cube et la colonne",
          "le mouton est entre la colonne et le cube",
          "Le mouton est entre le cube et la colonne.",
          "Le mouton est entre la colonne et le cube."
        ],
        2: [
          "le mouton est sur le cube et le cube est sur la colonne",
          "le mouton est sur le cube qui est sur la colonne",
          "le mouton est sur le cube et la colonne est sous le cube",
          "le mouton est sur le cube",
          "le mouton est au-dessus de la colonne",
          "Le mouton est sur le cube et le cube est sur la colonne.",
          "Le mouton est sur le cube qui est sur la colonne.",
          "Le mouton est sur le cube et la colonne est sous le cube.",
          "Le mouton est sur le cube.",
          "Le mouton est au-dessus de la colonne."
        ],
        3: [
          "le mouton est sur le cube et sous la colonne",
          "le mouton est sous la colonne et sur le cube",
          "le mouton est sur le cube",
          "le mouton est sous la colonne",
          "Le mouton est sur le cube et sous la colonne.",
          "Le mouton est sous la colonne et sur le cube.",
          "Le mouton est sur le cube.",
          "Le mouton est sous la colonne."
        ],
        4: [
          "le mouton est à gauche du cube et le cube est à gauche de la colonne",
          "le mouton est à gauche du cube qui est à gauche de la colonne",
          "le mouton est à gauche du cube et la colonne est à droite du cube",
          "le mouton est à gauche du cube",
          "le mouton est à gauche de la colonne",
          "Le mouton est à gauche du cube et le cube est à gauche de la colonne.",
          "Le mouton est à gauche du cube qui est à gauche de la colonne.",
          "Le mouton est à gauche du cube et la colonne est à droite du cube.",
          "Le mouton est à gauche du cube.",
          "Le mouton est à gauche de la colonne."
        ],
        5: [
          "le mouton est devant la colonne et derrière le cube",
          "le mouton est derrière le cube et devant la colonne",
          "le mouton est devant la colonne",
          "le mouton est derrière le cube",
          "Le mouton est devant la colonne et derrière le cube.",
          "Le mouton est derrière le cube et devant la colonne.",
          "Le mouton est devant la colonne.",
          "Le mouton est derrière le cube."
        ],
        6: [
          "le mouton est devant la colonne et la colonne est devant le cube",
          "le mouton est devant la colonne qui est derrière le cube",
          "le mouton est devant la colonne",
          "le mouton est devant le cube",
          "le mouton est devant la colonne et le cube",
          "le mouton est devant le cube et la colonne",
          "Le mouton est devant la colonne et la colonne est devant le cube.",
          "Le mouton est devant la colonne qui est derrière le cube.",
          "Le mouton est devant la colonne.",
          "Le mouton est devant le cube.",
          "Le mouton est devant la colonne et le cube.",
          "Le mouton est devant le cube et la colonne."
        ],
        7: [
          "le mouton est dans le cube et sous la colonne",
          "le mouton est dans le cube qui est sous la colonne",
          "le mouton est dans le cube",
          "le mouton est sous la colonne",
          "Le mouton est dans le cube et sous la colonne.",
          "Le mouton est dans le cube qui est sous la colonne.",
          "Le mouton est dans le cube.",
          "Le mouton est sous la colonne."
        ],
        8: [
          "le mouton est dans le cube et à droite de la colonne",
          "le mouton est dans le cube qui est à droite de la colonne",
          "le mouton est dans le cube",
          "le mouton est à droite de la colonne",
          "Le mouton est dans le cube et à droite de la colonne.",
          "Le mouton est dans le cube qui est à droite de la colonne.",
          "Le mouton est dans le cube.",
          "Le mouton est à droite de la colonne."
        ],
        9: [
          "le mouton est loin de la colonne et la colonne est à droite du cube",
          "le mouton est loin de la colonne qui est à droite du cube",
          "le mouton est loin de la colonne",
          "le mouton est loin du cube",
          "le mouton est loin du cube et de la colonne",
          "Le mouton est loin de la colonne et la colonne est à droite du cube.",
          "Le mouton est loin de la colonne qui est à droite du cube.",
          "Le mouton est loin de la colonne.",
          "Le mouton est loin du cube.",
          "Le mouton est loin du cube et de la colonne."
        ],
        10: [
          "le mouton est à droite de la colonne et le cube est loin du mouton",
          "le mouton est à droite de la colonne et le cube est loin derrière le mouton",
          "le mouton est à droite de la colonne",
          "le mouton est loin du cube",
          "le mouton est à gauche du cube",
          "Le mouton est à droite de la colonne et le cube est loin du mouton.",
          "Le mouton est à droite de la colonne et le cube est loin derrière le mouton.",
          "Le mouton est à droite de la colonne.",
          "Le mouton est loin du cube.",
          "Le mouton est à gauche du cube."
        ],
        11: [
          "le mouton est à gauche du cube et le cube est sous la colonne",
          "le mouton est à gauche du cube qui est sous la colonne",
          "le mouton est à gauche du cube",
          "le mouton est à gauche de la colonne",
          "Le mouton est à gauche du cube et le cube est sous la colonne.",
          "Le mouton est à gauche du cube qui est sous la colonne.",
          "Le mouton est à gauche du cube.",
          "Le mouton est à gauche de la colonne."
        ],
        12: [
          "le mouton est sur la colonne et la colonne est à gauche du cube",
          "le mouton est sur la colonne qui est à gauche du cube",
          "le mouton est sur la colonne",
          "le mouton est à gauche du cube",
          "Le mouton est sur la colonne et la colonne est à gauche du cube.",
          "Le mouton est sur la colonne qui est à gauche du cube.",
          "Le mouton est sur la colonne.",
          "Le mouton est à gauche du cube."
        ],
        13: [
          "le mouton est au-dessus de la colonne et la colonne est au-dessus du cube",
          "le mouton est au-dessus de la colonne qui est au-dessus du cube",
          "le mouton est au-dessus de la colonne",
          "le mouton est au-dessus du cube",
          "le mouton est au-dessus du cube et de la colonne",
          "le mouton est au-dessus de la colonne et du cube",
          "Le mouton est au-dessus de la colonne et la colonne est au-dessus du cube.",
          "Le mouton est au-dessus de la colonne qui est au-dessus du cube.",
          "Le mouton est au-dessus de la colonne.",
          "Le mouton est au-dessus du cube.",
          "Le mouton est au-dessus du cube et de la colonne.",
          "Le mouton est au-dessus de la colonne et du cube."
        ],
        14: [
          "le mouton est au-dessus de la colonne et au-dessous du cube",
          "le mouton est au-dessous du cube et au-dessus de la colonne",
          "le mouton est au-dessus de la colonne",
          "le mouton est au-dessous du cube",
          "Le mouton est au-dessus de la colonne et au-dessous du cube.",
          "Le mouton est au-dessous du cube et au-dessus de la colonne.",
          "Le mouton est au-dessus de la colonne.",
          "Le mouton est au-dessous du cube."
        ],
        15: [
          "le mouton est à gauche de la colonne et la colonne est à gauche du cube",
          "le mouton est à gauche de la colonne et le cube  est à droite de la colonne",
          "le mouton est à gauche de la colonne qui est à droite du cube",
          "le mouton est à gauche de la colonne",
          "le mouton est à gauche du cube",
          "le mouton est à gauche du cube et de la colonne",
          "le mouton est à gauche de le colonne et du cube",
          "Le mouton est à gauche de la colonne et la colonne est à gauche du cube.",
          "Le mouton est à gauche de la colonne et le cube  est à droite de la colonne.",
          "Le mouton est à gauche de la colonne qui est à droite du cube.",
          "Le mouton est à gauche de la colonne.",
          "Le mouton est à gauche du cube.",
          "Le mouton est à gauche du cube et de la colonne.",
          "Le mouton est à gauche de le colonne et du cube."
        ],
        16: [
          "le mouton est derrière le cube et le cube est derrière la colonne",
          "le mouton est derrière le cube et la colonne est derrière le cube",
          "le mouton est derrière le cube qui est derrière la colonne",
          "le mouton est derrière le cube",
          "le mouton est derrière la colonne",
          "le mouton est derrière le cube et la colonne",
          "le mouton est derrière la colonne et le cube",
          "Le mouton est derrière le cube et le cube est derrière la colonne.",
          "Le mouton est derrière le cube et la colonne est derrière le cube.",
          "Le mouton est derrière le cube qui est derrière la colonne.",
          "Le mouton est derrière le cube.",
          "Le mouton est derrière la colonne.",
          "Le mouton est derrière le cube et la colonne.",
          "Le mouton est derrière la colonne et le cube."
        ],
        17: [
          "le mouton est sous le cube et la colonne est sur le cube",
          "le mouton est sous le cube qui est sous la colonne",
          "le mouton est sous le cube et le cube est sous la colonne",
          "le mouton est sous le cube",
          "le mouton est sous le cube et la colonne",
          "le mouton est sous le cube et au-dessous de la colonne",
          "le mouton est au-dessous de la colonne et sous le cube",
          "Le mouton est sous le cube et la colonne est sur le cube.",
          "Le mouton est sous le cube qui est sous la colonne.",
          "Le mouton est sous le cube et le cube est sous la colonne.",
          "Le mouton est sous le cube.",
          "Le mouton est sous le cube et la colonne.",
          "Le mouton est sous le cube et au-dessous de la colonne.",
          "Le mouton est au-dessous de la colonne et sous le cube."
        ],
        18: [
          "le mouton est au-dessous de la colonne et la colonne est au-dessous du cube",
          "le mouton est au-dessous de la colonne et le cube est au-dessus de la colonne",
          "le mouton est au-dessous de la colonne qui est au-dessous du cube",
          "le mouton est au-dessous de la colonne",
          "le mouton est au-dessous du cube",
          "le mouton est au-dessous du cube et de la colonne",
          "le mouton est au-dessous de la coloone et du cube",
          "Le mouton est au-dessous de la colonne et la colonne est au-dessous du cube.",
          "Le mouton est au-dessous de la colonne et le cube est au-dessus de la colonne.",
          "Le mouton est au-dessous de la colonne qui est au-dessous du cube.",
          "Le mouton est au-dessous de la colonne.",
          "Le mouton est au-dessous du cube.",
          "Le mouton est au-dessous du cube et de la colonne.",
          "Le mouton est au-dessous de la coloone et du cube."
        ],
        19: [
          "le mouton est à droite du cube et la colonne est loin du mouton",
          "le mouton est à droite du cube et ils sont loin de la colonne",
          "le mouton est à droite du cube",
          "le mouton est loin de la colonne",
          "le mouton est loin de la colonne et à droite du cube",
          "le mouton est à droite du cube et loin de la colonne",
          "Le mouton est à droite du cube et la colonne est loin du mouton.",
          "Le mouton est à droite du cube et ils sont loin de la colonne.",
          "Le mouton est à droite du cube.",
          "Le mouton est loin de la colonne.",
          "Le mouton est loin de la colonne et à droite du cube.",
          "Le mouton est à droite du cube et loin de la colonne."
        ],
        20: [
          "le mouton est dans le cube et le cube est sur la colonne",
          "le mouton est dans le cube qui est sur la colonne",
          "le mouton est dans le cube",
          "le mouton est sur la colonne",
          "le mouton est sur la colonne et dans le cube",
          "le mouton est dans le cube et sur la colonne",
          "Le mouton est dans le cube et le cube est sur la colonne.",
          "Le mouton est dans le cube qui est sur la colonne.",
          "Le mouton est dans le cube.",
          "Le mouton est sur la colonne.",
          "Le mouton est sur la colonne et dans le cube.",
          "Le mouton est dans le cube et sur la colonne."
        ],
        21: [
          "le mouton est sur le cube et la colonne est à gauche du cube",
          "le mouton est sur le cube et le cube est à droite de la colonne",
          "le mouton est sur le cube qui est à droite de la colonne",
          "le mouton est sur le cube",
          "le mouton est à gauche de la colonne",
          "le mouton est sur le cube et à gauche de la colonne",
          "le mouton est à gauche de la colonne et sur le cube",
          "Le mouton est sur le cube et la colonne est à gauche du cube.",
          "Le mouton est sur le cube et le cube est à droite de la colonne.",
          "Le mouton est sur le cube qui est à droite de la colonne.",
          "Le mouton est sur le cube.",
          "Le mouton est à gauche de la colonne.",
          "Le mouton est sur le cube et à gauche de la colonne.",
          "Le mouton est à gauche de la colonne et sur le cube."
        ],
        22: [
          "les cubes sont autour du mouton",
          "le mouton est entre les cubes",
          "le mouton est au milieu des cubes",
          "le mouton est au centre des cubes",
          "Les cubes sont autour du mouton.",
          "Le mouton est entre les cubes.",
          "Le mouton est au milieu des cubes.",
          "Le mouton est au centre des cubes."
        ]
      }
    };
  }
};
</script>

<style>
html,
body {
  height: 100%;
  background-color: #fff;
  margin: 0 0 0 0;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 0 0 0;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 80px;
  width: 100%;
  background-color: #e8d83d;
}

ul {
  display: flex;
  justify-content: flex-start;
  align-content: center;
  padding: 0;
  margin-right: 40px;
}

li {
  height: 100%;
  background-color: transparent;
  list-style-type: none;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
}

.nav-links {
  margin: 0 20px 0 20px;
  text-decoration: none;
  color: #fff;
  font-size: 25px;
  font-weight: 600;
  outline: none;
}

.nav-links:hover {
  color: #fff5fe;
}

.nav-links:active {
  color: #ffa1f6;
}

@media screen and (max-width: 414px) {
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
}

@media screen and (max-height: 768px) {
  nav {
    height: 60px;
  }
}
</style>

