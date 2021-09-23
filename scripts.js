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
            } else {
                alert("Não é possível inserir vazio!");
            }
        },
        clearList: function() {
            this.list = [];
        }
    },
};

Vue.createApp(todoList).mount('#app');