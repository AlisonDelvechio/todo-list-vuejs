var list = [];

const todoList = {
    data() {
        return {
            list: window.list,
            newItem: { 
                description: null,
                active: false
            }
        } 
    },
    methods: {
        addItem: function() {
            if (this.newItem.description) {
                this.list.push(this.newItem);
                this.newItem = {};

                localStorage.setItem('list', JSON.stringify(this.list));
            } else {
                alert("Não é possível inserir vazio!");
            }
        },
        updateStorage: function() {
            localStorage.setItem('list', JSON.stringify(this.list));
        }
    },
    created() {
        this.list = localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : this.list;
    },
};

Vue.createApp(todoList).mount('#app');