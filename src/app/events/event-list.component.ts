import {Component, OnInit} from '@angular/core'
import { EventService } from './shared/event-service';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { ToastrService } from '../common/toastr.service';

@Component({

  template: `
  <div>
  <h1>Upcoming Angular Events</h1>
  <hr/>
  <div class="row">
  <div class="col-md-5" *ngFor="let event of events">
  <thumb-nail (click)="handleEventClick(event.name)" [event]="event"></thumb-nail>
  </div>
  </div>
  </div>
     `
})
export class eventListComponent implements OnInit{
  events:any
  constructor(private eventService: EventService, private toastr: ToastrService){

  }
  ngOnInit(){
    this.eventService.getEvent().subscribe(events=>{this.events=events})

  }

  handleEventClick(eventName){
    this.toastr.success(eventName)

  }
}
