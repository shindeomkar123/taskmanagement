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

  taskListItems: taskList[] = [
    {
      id: 0,
      label: 'TO_DO',
      name: 'To Do',
      taskItems: [
        { taskListId: 0, task: { id: 0, name: 'code' } },
        { taskListId: 0, task: { id: 1, name: 'code' } },
        { taskListId: 0, task: { id: 2, name: 'code' } },
        { taskListId: 0, task: { id: 3, name: 'code' } },
      ],
    },
    { id: 1, label: 'REVIEW', name: 'Review', taskItems: [] },
    { id: 2, label: 'COMPLETED', name: 'Completed', taskItems: [] },
  ];
 
  // onAddTask() {
  //   this.taskId = this.taskId + 1;
  //   const newTask:task[]=[];
  //   const taskPayload = {id:this.taskId,name:this.taskName};
    
  //   // Add task initially to the todo state
    
  //   this.taskListItems[].taskItems.push({ taskListId:0,task:taskPayload});
  //   this.taskName = '';
  // }
  
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
