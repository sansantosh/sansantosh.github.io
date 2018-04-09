import Vue from 'vue'
import UserForm from '@/components/UserForm'

describe('UserForm.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(UserForm)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue.js App')
  })
})
