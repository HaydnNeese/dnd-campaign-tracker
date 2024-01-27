import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavItem } from './../../../models/nav-item/nav-item';


@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [CommonModule, MatSidenavModule, RouterLink],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {
  navItems: NavItem[] = [
    {
      title: 'Campaigns',
      path: '/campaigns'
    },
    {
      title: 'Adventurers',
      path: '/adventurers'
    },
    {
      title: 'Magic Items'
    }
  ];
}
