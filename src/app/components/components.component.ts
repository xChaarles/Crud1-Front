import { Component } from '@angular/core';
import { SidemenuComponent } from '../shared/sidemenu/sidemenu.component';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [SidemenuComponent,RouterModule],
  templateUrl: './components.component.html',
  styles: ``
})
export default class ComponentsComponent {

}
