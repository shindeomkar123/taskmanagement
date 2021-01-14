import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { task } from '../app.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  taskId: any;
  taskName: any;
  constructor(private modalService: BsModalService) {}

  @Input()
  taskListItems!: any[];
  
  ngOnInit(): void {}
 
  droppedItems: any = [];
  modalRef!: BsModalRef;
  
  onItemDrop(e: any, index: number) {
    // Get the dropped data here
    const dragItem = e.dragData;
    if(!!this.taskListItems){
      const items = this.taskListItems[dragItem.taskListId].taskItems.filter(
        (el:taskItem) => {
          return el.task.id !== dragItem.task.id;
        }
      );
      this.taskListItems[dragItem.taskListId].taskItems = items;
      dragItem.taskListId = index;
      this.taskListItems[index].taskItems.push(dragItem);
      console.log('TaskItems', this.taskListItems[dragItem.taskListId].taskItems);
    }
   
  }

  deleteTask(event:taskItem){
    const taskTodlt = event ;
    
    //find out element
    const taskListItem = this.taskListItems?.find(el=>el.id===taskTodlt.taskListId);
    taskListItem.taskItems.splice(taskTodlt.task,1);
  }

  onDeletelist(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  confirm(taskList:taskList): void {
    console.log('tasklist',taskList)
    this.taskListItems?.splice(taskList.id,1);
    this.modalRef.hide();
  }
 
  decline(): void {
    this.modalRef.hide();
  }

  onAddTask(taskListId:number,val:string) {
    this.taskId = this.taskId + 1;
    const newTask:task[]=[];
    const taskPayload = {id:this.taskId,name:val};
    
    // Add task initially to the todo state
    
    this.taskListItems[taskListId].taskItems.push({ taskListId:taskListId,task:taskPayload});
    this.taskName = '';
  }
}

export interface taskList {
  id: number;
  label: string;
  name: string;
  taskItems: taskItem[];
}

export interface taskItem {
  taskListId: number;
  task: task;
}
