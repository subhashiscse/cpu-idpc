import { Component, OnInit } from '@angular/core';
import { NavigationMenuList } from 'src/config/navigation-menu';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  navigationList :any = NavigationMenuList;
  constructor() { }

  ngOnInit(): void {
  }

}
