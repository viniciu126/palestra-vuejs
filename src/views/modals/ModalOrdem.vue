<template>
  <div>
    <transition name="modal">
      <div v-if="isOpen">
        <div class="overlay" @click.self="isOpen = false;">
          <div class="modal">
            <h1> Defina uma ordem de código </h1>
            <p> Defina uma ordem dentro do script que deverá ser seguida em todos os componentes. </p>
            <img src="https://miro.medium.com/max/285/1*nkoaupckAQZPn_XiI43qcQ.png">
          </div>
        </div>
      </div>
    </transition>
    <button @click="isOpen = !isOpen;">
      {{ isOpen ? "Close" : "Ordem no código" }}
    </button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      isOpen: false
    };
  }
};
</script>

<style scoped>
.modal {
  width: 500px;
  height: 600px;
  margin: 0px auto;
  padding: 20px;
  background-color: rgb(71, 69, 69);
  border-radius: 5px;
  transition: all 0.2s ease-in;
  font-family: Helvetica, Arial, sans-serif;
}
.fadeIn-enter {
  opacity: 0;
}

.fadeIn-leave-active {
  opacity: 0;
  transition: all 0.2s step-end;
}

button {
  padding: 7px;
  margin-top: 10px;
  background-color: rgba(0, 128, 79, 0.13);
  color: white;
  font-size: 1.1rem;
  border-radius: 5px;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

img{
  width: 50%;
}
</style>