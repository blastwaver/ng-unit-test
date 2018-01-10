import { TodoComponent } from './todo.component'; 
import { TodoService } from './todo.service'; 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from'

describe('TodosComponent', () => {
  let component: TodoComponent;
  let service: TodoService<TodoComponent>;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodoComponent(service);
  });

  it('should set todo property with the items returned from server', () => {
    spyOn(service, 'getTodos').and.callFake(()=>{
        return Observable.from([[
            {id:1, title: 'a'},
            {id:2, title: 'b'},
            {id:3, title: 'c'}
        ]]);
    });

    component.ngOnInit();
    expect(component.todo.length).toBeGreaterThan(0);
  });
});