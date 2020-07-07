<template>
  <div>
    <nav>
      <ul class="nav-ul">
        <li>
          <router-link class="nav-links" to="/GamePage">Recommencer</router-link>
        </li>
        <li>
          <router-link class="nav-links" to="/CheatSheet">Aide</router-link>
        </li>
      </ul>
    </nav>
    <div class="cheat-sheet-div">
      <img class="cheat-sheet-img" alt="cheat sheet" src="../src/assets/cheat-sheet.jpg" />
    </div>
  </div>
</template>


<style scoped>
.cheat-sheet-div {
  margin-top: 80px;
}

.cheat-sheet-img {
  margin: 0;
}

@media screen and (max-width: 1240px) {
  .cheat-sheet-img {
    height: 100%;
    width: 100%;
  }
}

@media screen and (max-width: 414px) {
  .cheat-sheet-img {
    height: 150%;
    width: 150%;
  }

  .nav-ul {
    margin-right: 10px;
  }
  
  .nav-links {
    font-size: 1.2rem;
    margin: 8px;
  }

  .nav-links-p {
    font-size: 1.2rem;
  }

  nav {
  height: 40px;
}
}
</style>

