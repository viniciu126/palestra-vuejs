<template>
  <div>
    <transition name="modal">
      <div v-if="isOpen">
        <div class="overlay" @click.self="isOpen = false;">
          <div class="modal">
            <h1> Props </h1>
            <img src="https://miro.medium.com/max/153/1*IEQvukLdM_2_Y6HT1CJCqw.png">
            <img src="https://miro.medium.com/max/150/1*qd7SMJM6fEbA9HNn1ROz6w.png">
          </div>
        </div>
      </div>
    </transition>
    <button @click="isOpen = !isOpen;">
      {{ isOpen ? "Close" : "Props" }}
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
  height: 400px;
  margin: 0px auto;
  padding: 50px;
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
  padding: 20px
}
</style>