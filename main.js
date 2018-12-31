Vue.component('todo' , {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app = new Vue({
    el: '#app',
    data: {
        title: 'todo list',
        todos: [
            { id: 0, text: 'git init' },
            { id: 1, text: 'git add -A' },
            { id: 2, text: 'git commit' }
        ],
        newTodo: ''
    },
    methods: {
        addTodo: function() {
            this.todos.push({ id: this.todos.length, text: this.newTodo });
            this.newTodo = '';
        }
    }
});
