import { Routes } from '@angular/router';
import { CampaignsComponent } from './screens/campaigns/campaigns.component';
import { AdventurersComponent } from './screens/adventurers/adventurers.component';

export const routes: Routes = [
    {path: 'campaigns', component: CampaignsComponent},
    {path: 'adventurers', component: AdventurersComponent},
    {path: '', redirectTo: 'campaigns', pathMatch: 'full'}
];
