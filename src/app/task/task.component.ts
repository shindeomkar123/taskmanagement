import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'

import { taskItem } from './../task-list/task-list.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  modalRef!: BsModalRef;
  message!: string;

  @Input()
  taskItem!: taskItem;
  
  @Output() taskDeleteEvent = new EventEmitter()
  deleteTask: any;

  onTaskDelete( template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
  
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  confirm(): void {
    this.taskDeleteEvent.emit(this.taskItem);
    this.modalRef.hide();
  }
 
  decline(): void {
    this.message = 'Declined!';
    this.modalRef.hide();
  }
  

}
