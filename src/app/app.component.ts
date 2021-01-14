import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'task-management';
  listName!: string;
  taskName!: string;
  taskItem:task | undefined ;
   
  taskListId=0;
  taskId=0;

  taskListItems: taskList[] = [];
  
  onAddTaskList() {
    this.taskListId = this.taskListId + 1;
    const newTaskIteams: taskItem[] = []
    const payload = {id:this.taskListId,label:'',name:this.listName,taskItems:newTaskIteams};
    this.taskListItems = this.taskListItems.concat(payload);
    this.listName = '';
  }
}



export interface task {
  id?:number,
  name:string | undefined;
}

export interface taskList {
  id?: number;
  label?: string | undefined;
  name: string;
  taskItems: taskItem[];
}

export interface taskItem {
  taskListId: number;
  task: task;
}
