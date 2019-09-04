import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { eventListComponent } from './events/event-list.component';
import { eventThumbnailComponent } from './events/event-thumbnail.component';
import { navBarComponent } from './nav/nav-bar.component';
import { EventService } from './events/shared/event-service';
import { ToastrService } from './common/toastr.service';
import { EventDetails } from './events/events-detail/event-details.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { CreateElementComponent } from './events/create-events.component';
import { Error404Component } from './error/404.component';
import { EventRouteActivator } from './events/events-detail/event-routeActivator.component';

@NgModule({
  declarations: [
    AppComponent,
    eventListComponent,
    eventThumbnailComponent,
    navBarComponent,
    EventDetails,
    CreateElementComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService, ToastrService, EventRouteActivator,
   {provide: 'remove', useValue: status}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function status(component:CreateElementComponent) {
 if(component.trial)
 return window.confirm("Are you sure you want to leave this page without saving Your")

}
