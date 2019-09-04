import {Routes} from '@angular/router'
import {eventListComponent} from './events/event-list.component'
import {EventDetails} from './events/events-detail/event-details.component'
import {CreateElementComponent} from './events/create-events.component'
import {Error404Component} from './error/404.component'
import { EventRouteActivator } from './events/events-detail/event-routeActivator.component';

export const appRoutes:Routes=[
  {path: 'events/new', component: CreateElementComponent, canDeactivate: ['remove']},
  {path:'events', component: eventListComponent},
  {path: 'events/:id', component: EventDetails, canActivate: [EventRouteActivator]},
  {path: '', redirectTo: '/events', pathMatch: 'full'},
  {path: '404', component: Error404Component}
]
