<template>
  <div>
    <h1> Vuex </h1>

    <div class="conteudo">
     <p>O Vuex é um padrão de gerenciamento de estado + biblioteca para aplicativos Vue.js.</p>
     <p>Ele serve como um store centralizado para todos os componentes em uma aplicação,
     com regras garantindo que o estado só possa ser mutado de forma previsível. </p>
     <p>Ele também se integra com a extensão oficial Vue devtools para fornecer recursos avançados sem configurações adicionais,</p>
     <p>como depuração viajando pelo histórico de estado (time travel) e exportação/importação de registros de
     estado em determinado momento.</p> 
    </div>

  </div>
</template>

<script>
export default {
  name: 'Vuex',
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
