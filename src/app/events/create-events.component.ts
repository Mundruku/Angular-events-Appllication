import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
template:`<h1>New Events</h1>
<hr/>
<div class="col-md-6">
<h3>[Crate Event Files Will go here ]</h3>
<br/>
<br/>
<button type="submit" class="btn btn-primary">Submit</button>
<button type="submit" class="btn btn-default" (click)="click()">Cancel</button>

</div>
`
})
export class CreateElementComponent{
trial: boolean=true

  constructor(private route: Router){

  }

  click(){
    this.route.navigate(['/events'])

  }


}
