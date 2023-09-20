import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse,HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { TaskModel } from './Models/TasksModel';
import { catchError } from 'rxjs/operators';
import {from} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskListService {
  MemberID:any="";
  constructor(private _http:HttpClient) { }
  Url:String="https://localhost:44346/projectmgmt/api/v1/member/list";
 
  
  getTaskdetailsbyid(id:any):Observable<TaskModel>
  {
    debugger;    
    const url=`${this.Url}/${id}`
    return this._http.get<TaskModel>(url).pipe(catchError(this.errorHandler));
  }  

  errorHandler(error:HttpErrorResponse)
  {
    return throwError(error.message||"Unknow Server Error");
  }
}
