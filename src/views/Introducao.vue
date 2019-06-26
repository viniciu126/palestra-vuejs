<template>
  <div>
    <h1> O que é o vuejs? </h1>

    <div class="conteudo">
        <p> O Vue é uma framework progressivo JavaScript que se concentra na criação de componentes reutilizáveis . </p> 
        <p>Como ele só funciona na “camada de visualização”, pode ser integrado facilmente a outros projetos e bibliotecas.</p>
    </div>


  </div>
</template>

<script>
export default {
  name: 'Introducao',
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
    display: inline-block;
}
</style>
