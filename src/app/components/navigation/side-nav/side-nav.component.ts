import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NavItem } from './../../../models/nav-item/nav-item';


@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [CommonModule, MatSidenavModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent implements OnInit {
  navItems: NavItem[] = [
    {
      title: 'Characters'
    },
    {
      title: 'Sessions'
    },
    {
      title: 'Magic Items'
    }
  ];

  ngOnInit(): void {
  }
}
