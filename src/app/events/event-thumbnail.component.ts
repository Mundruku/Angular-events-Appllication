import { Component, Input, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'thumb-nail',
  template: `<div class="well hoverwell thumbnail" [routerLink]="['/events',event.id]">
  <h2>{{event?.name}}</h2>
  <div>Date: {{event?.date}}</div>
  <div [class.green]="event?.time==='8:00 am'" [ngSwitch]="event?.time">
  Time: {{event?.time}}
  <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
  <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
  <span *ngSwitchDefault> (Normal Start)</span>
  </div>
  <div>Price: \${{event?.price}}</div>
  <div>
  <span>Location: {{event?.location.address}}</span>
  <span class="pad-left">{{event?.location.city}},  {{event?.location.country}}</span>
  </div>
  <div *ngIf="event?.onlineUrl">
  Online Url: {{event?.onlineUrl}}
  </div>
  </div>`,
  styles: [`.pad-left{margin-left: 10px;}
  .well div{color: #bbb;}
  .thumbnail{
    min-height: 210px;
  }
  .green {
    color: #003300 !important;
  }
  `
]

})
export class eventThumbnailComponent{
  @Input() event:any

}
