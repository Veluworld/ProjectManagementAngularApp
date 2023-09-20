export class TaskModel{
    taskId : Number;
    memberName:string;
    taskName:String;
    memberId: Number;
    deliverables:String;
    startDate : Date;
    endDate : Date;
    
    constructor(_taskId:number,_memberName:string,_taskName:string,_memberId: number,_deliverables:String,_startDate:Date, _endDate:Date)
    {
        this.taskId=_taskId;
        this.memberName=_memberName;
        this.taskName=_taskName;
        this.memberId = _memberId;
        this.deliverables=_deliverables;
        this.startDate=_startDate;
        this.endDate = _endDate;
    }
}   
   


