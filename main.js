Vue.component('todo' , {
    props: ['todo'],
    template: '<div><input type="checkbox" v-model="todo.done"> {{ todo.text }}</div>'
})

var app = new Vue({
    el: '#app',
    data: {
        title: 'todo list',
        todos: [
            { id: 0, done: true, text: 'git init' },
            { id: 1, done: false, text: 'git add -A' },
            { id: 2, done: false, text: 'git commit' }
        ],
        newTodo: '',
        yesno: ''
    },
    computed: {
        isAwesome: function() {
            return this.yesno === 'yes';
        }
    },
    methods: {
        addTodo: function() {
            this.todos.push({ id: this.todos.length, done: false, text: this.newTodo });
            this.newTodo = '';
        },
        disabledAdd: function(text) {
            return this.newTodo.length === 0;
        }
    },
    created: function() {
        console.log('xd');
        axios.get('https://yesno.wtf/api')
            .then(resp => app.yesno = resp.data.answer)
            .catch(err => console.log(err));
    }
});
