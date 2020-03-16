
export default class TodoRepositoryImpl {
    todo = []

    addTodoList(data:any){
        return Object.assign({}, this.todo, {
            todo: this.todo.concat(data)
        });
    }
}