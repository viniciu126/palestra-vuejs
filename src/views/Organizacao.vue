<template>
  <div>
    <h1> Organização e padrões de projeto em vuejs </h1>
    <div class="conteudo">
      <ModalOrdem></ModalOrdem>
      <ModalFilter></ModalFilter>
      <ModalProps></ModalProps>
      <ModalEspaco></ModalEspaco>
      <ModalIdentacao></ModalIdentacao>
    </div>
  </div>
</template>

<script>
import ModalOrdem from '../views/modals/ModalOrdem.vue'
import ModalFilter from '../views/modals/ModalFilter.vue'
import ModalProps from '../views/modals/ModalProps.vue'
import ModalEspaco from '../views/modals/ModalEspaco.vue'
import ModalIdentacao from '../views/modals/ModalIdentacao.vue'

export default {
  name: 'Organizacao',
  props: {
    msg: String
  },
  components: {
    ModalOrdem,
    ModalFilter,
    ModalProps,
    ModalEspaco,
    ModalIdentacao
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
