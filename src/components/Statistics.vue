<template>
  <div id="statDiv" class="stat-div">
    <img class="main-logo" alt="logo du jeu" src="../assets/logo.png" width="315px" height="195px" />
    <table class="stat-table">
      <tr>
        <td>Questions validées:</td>
        <td>{{currentQuestion}}</td>
      </tr>
      <tr>
        <td>Nombres d'erreurs:</td>
        <td>{{mistakes}}</td>
      </tr>
    </table>
    <router-link class="button" to="/">
      <p>Jouer&nbsp;encore!</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Statistics",

  props: {
    mistakes: Number,
    currentQuestion: Number
  }
};
</script>  

<style scoped>
.stat-div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
}

.main-logo {
  align-self: center;
  margin-bottom: 30px;
}

.stat-table {
  align-self: center;
  margin-top: 20px;
  border-collapse: collapse;
}

td {
  width: 180px;
  height: 60px;
  font-size: 18px;
  font-weight: 50;
  text-align: center;
}

td:first-child {
  text-align: center;
}

td:last-child {
  text-align: center;
}

.button p {
  display: inline;
  margin: 5px 0 0 0;
  padding: 0 0 0 0;
  font-size: 24px;
}

.button {
  display: flex;
  align-self: center;
  justify-content: center;
  margin: 15px 0 15px 0;
  padding: 20px 0 4px 0;
  height: 55px;
  width: 190px;
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
  .stat-div {
    top: 130px !important;
    left: 55px !important;
  }

  .main-logo {
    margin-top: -35px;
    margin-bottom: 0;
    height: 67px;
    width: 93px;
  }

  h1 {
    font-size: 1.3rem;
    margin: 0;
  }

  td {
    font-size: 1rem;
    width: 80px;
    height: 60px;
  }

  .button p {
    margin: -12px 0 0 0;
    font-size: 1.2rem;
    width: 100%;
  }

  .button {
    margin: 10px 0 0 0;
    padding: 25px 50px;
    height: 20px;
    width: 60px;
  }
}
</style>