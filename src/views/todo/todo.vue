<template>
  <section class="rel-app">
    <input 
      type="text"
      placeholder="接下来要做什么"  
      autofocus=true
      class='add-input'
      @keyup.enter="addtodo"
    >
  <Item
    v-for="todo in filterTodos"
    :todo="todo"
    :key="todo.id"
    @del="delate"
    
  />
    <Tab
      :filter="filter" 
      :todo="todos"
      @taggle="tagglefilter"
      @clearAllcompleted='clearAllcompleted'
    />
  </section>
</template>
<script>
import Item from "./item.vue";
import Tab from "./tabs.vue";
import Vue from "vue"
var id=0;
export default {
  data:function() {
    return {
      todos: [],
      filter: 'all'
    };
  },
  components: {
    Item,
    Tab
  },
  computed:{
    filterTodos(){
      if(this.filter==="all"){
        return this.todos
      }
      const completed = this.filter === 'completed'
      return this.todos.filter(todo => completed === todo.completed)
    }
  },
  methods: {
   addtodo(e) {
      var obj = {
        id:id++,
        content:e.target.value.trim(),
        completed:false
      };
      this.todos.unshift(obj);
      e.target.value = ''
    },
    delate(id){
      this.todos.splice(this.todos.findIndex(todo=>todo.id==id),1)
    },
    tagglefilter(tag){
      this.filter=tag
      console.log(this.filter)
    },
    clearAllcompleted() {
      this.todos = this.todos.filter(todo => !todo.completed)
    }
  }
};
</script>
<style  scoped>
.rel-app {
  width: 600px;
  margin: 0 auto;
  box-shadow: 0 0 5px #666;
}
.add-input {
  position: relative;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  outline: none;
  color: inherit;
  padding: 6px;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  padding: 16px 16px 16px 60px;
}
</style>