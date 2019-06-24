<template>
  <div>
    <h1> História </h1>

    <div class="conteudo">
        <p>Foi criado por Evan You enquanto ele trabalhava no Google.</p>
        <p>Depois de trabalhar com AngularJS (a primeira versão do Angular) em vários projetos dentro do Google ele</p> 
        <p>decidiu pegar os conceitos do que ele mais gostava do Angular,</p>
        <p>e criar uma versão mais leve e sem muita coisa extra que o Angular tinha.</p> 
    </div>

  </div>
</template>

<script>
export default {
  name: 'Historia',
  props: {
    msg: String
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
p{
    font-size:20px;
}
.conteudo{
    background-color:;
    display: inline-block;
}
</style>
