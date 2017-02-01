Vue.component('fruit-item', {
  props: ['fruit'],
  template: `<li>{{ fruit }}</li>`
})

Vue.component('change-fruit-button', {
  template: `<button v-on:click="changeFruit">Change!</button>`,
  methods: {
    changeFruit: function () {
      this.$emit('change', ['pear', 'peach', 'cranberry'])
    }
  }
})

new Vue({
  el: '#app',
  data: {
    fruits: ['banana', 'apple', 'kiwi']
  },
  methods: {
    changedata: function (newdata) {
      this.fruits = newdata
    }
  }
})
