<template>
  <div>
    <h1> Vue-router </h1>

    <div class="conteudo">
     <p>Um componente essencial de uma SPA é o Router que é responsável por mostrar/esconder um ou mais elementos </p>
     <p>dependendo da URL que se acessa no browser.</p>
     <p>Esta é sua única responsabilidade, o que não significa que seja uma ferramenta simples!</p> 
    </div>

  </div>
</template>

<script>
export default {
  name: 'Router',
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
