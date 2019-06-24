<template>
  <div>
    <h1> Componentes </h1>

    <div class="conteudo">
     <p>Os componentes do Vue estendem elementos HTML básicos para encapsular o código reutilizável.</p>
     <p>Em alto nível, os componentes são elementos personalizados aos quais o compilador do Vue atribui comportamento.</p>
     <p>No Vue, um componente é essencialmente uma instância do Vue com opções pré-definidas.</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Componentes',
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
