<template>
  <div :class="['todo-item', todo.completed ? 'completed' : '']">
    <input 
      type="checkbox"
      class="toggle"  
      v-model="todo.completed"
    >
    <label>{{todo.content}}</label>
    <button class="delete" @click="deleteTodo"></button>
  </div>
</template>
<script>
export default {
  props: {
    todo: {
      required: true
    }
  },
  methods: {
    deleteTodo() {
      this.$emit("del", this.todo.id);
    }
  }
};
</script>

<style  scoped>
.todo-item {
  position: relative;
  background: #ffffff;
  font-size: 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}
.todo-item:hover .delete:after {
  content: "x";
}
.todo-item label {
  white-space: pre-line;
  word-break: break-all;
  padding: 15px 60px 15px 15px;
  margin-left: 45px;
  display: block;
  line-height: 1.2;
  transition: color 0.4s;
}
.completed label {
  color: #d9d9d9;
  text-decoration: line-through;
}
.toggle {
  text-align: center;
  height: 40px;
  position: absolute;
  top: 0;
  left: 20px;
  bottom: 0;
  margin: auto 0;
  border: none;
  outline: none;
}
.delete {
  position: absolute;
  top: 35%;
  right: 10px;
}
</style>