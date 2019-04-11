import { Component, OnInit } from '@angular/core';
import { FooterService } from 'src/app/footer/footer.service';
import { HeaderService } from 'src/app/navigation/header/header.service';
import { NavtabsService } from 'src/app/navigation/navtabs/navtabs.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public footer:FooterService,public header:HeaderService,public nav:NavtabsService) { }

  ngOnInit() {
    this.footer.hide();
    this.header.hide();
    this.nav.hide();
  }

}
