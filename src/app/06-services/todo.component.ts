
import { TodoService } from './todo.service';
import { TodoFormComponent } from '../04-forms/todo-form.component';

export  class TodoComponent {
    todo: any[] = [];
    message;

    constructor(private service: TodoService<TodoFormComponent>) {}

    ngOnInit() {
        this.service.getTodos().subscribe( t => this.todo = t);
    }

    add() {
        let newTodo = {title:'... '};
        this.service.add(newTodo).subscribe(
            t => this.todo.push(t),
            err => this.message = err
        ); 
    }

    delete(id) {
        if (confirm('Are you sure?'))
            this.service.delete(id).subscribe();
    }  
        
}