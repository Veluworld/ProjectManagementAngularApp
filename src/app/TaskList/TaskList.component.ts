import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { Router } from '@angular/router';
import { TaskListService } from '../tasklistservice';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-loan-dashboard',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TaskListComponent implements OnInit {
  //searchloandetails:FormGroup;
  MemberID:any="";
  tasklist:any=[];
  todisplay=false;
  public errMsg:any;
  loandetailsresponse:any;
  role:any="";
  constructor(private _taskservice:TaskListService,private _router:Router,private _frombuilder:FormBuilder) 
  { 
   
  }

  ngOnInit() {   
    this.tasklist.data=this.GetTaskList();
  }

  GetTaskList()
  {    
    this.MemberID = 2;
    this._taskservice.getTaskdetailsbyid(this.MemberID).subscribe(a=>{    
      this.tasklist.data=a;
    },(error)=>{
      debugger;
      Swal.fire("Task data!!",error,'error');
      this.tasklist.data=0;
    });
  }
 
  Clear()
  {    
    this.tasklist.data=0;
  }

}
