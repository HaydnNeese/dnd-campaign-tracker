import { Component } from '@angular/core';
import { PageContainerComponent } from '../../components/layouts/page-container/page-container.component';

@Component({
  selector: 'app-campaigns',
  standalone: true,
  imports: [PageContainerComponent],
  templateUrl: './campaigns.component.html',
  styleUrl: './campaigns.component.css'
})
export class CampaignsComponent {

}
