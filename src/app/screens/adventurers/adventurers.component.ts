import { Component } from '@angular/core';
import { PageContainerComponent } from '../../components/layouts/page-container/page-container.component';

@Component({
  selector: 'app-adventurers',
  standalone: true,
  imports: [PageContainerComponent],
  templateUrl: './adventurers.component.html',
  styleUrl: './adventurers.component.css'
})
export class AdventurersComponent {

}
