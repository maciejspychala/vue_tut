var app = new Vue({
    el: '#app',
    data: {
        title: 'todo list',
        todos: [
            { text: 'git init' },
            { text: 'git add -A' },
            { text: 'git commit' }
        ],
        newTodo: ''
    },
    methods: {
        addTodo: function() {
            this.todos.push({ text: this.newTodo });
            this.newTodo = '';
        }
    }
});
