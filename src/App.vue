<template>
  <div id="app">
    <img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png">
    
    <div>
      <nav id="menu">
        <ul>
          <li><router-link to="/introducao" class="router-link"> Introdução </router-link> </li>
          <li><router-link to="/historia" class="router-link"> História </router-link> </li>
          <li><router-link to="/vuex" class="router-link"> Vuex </router-link>  </li>
          <li><router-link to="/organizacao" class="router-link"> Organização e padrões de projeto em vuejs </router-link></li>  
          <li><router-link to="/componentes" class="router-link"> Componentes </router-link>  </li>
          <li><router-link to="/router" class="router-link"> Vue-router </router-link>  </li>
        </ul>
      </nav>
    </div>

    <router-view></router-view>

  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #FFFFFF;
  margin-top: 60px;
}
img{
  width: 120px;
}
.router-link{
  font-size:20px;
  color: #FFFFFF;
  text-decoration: none;
}
#menu ul {
  padding:0px;
  margin:0px;
  list-style:none;
}
#menu ul li { 
  display: inline; 
}
#menu ul li a {
  padding: 2px 10px;
  display: inline-block;
  /* visual do link */
  text-decoration: none;
}
#menu ul li a:hover {
  border-bottom:3px solid green;
}

</style>
