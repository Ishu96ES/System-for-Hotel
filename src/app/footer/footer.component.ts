import { Component, OnInit } from '@angular/core';
import { FooterService } from './footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css','./footer.component-theme.scss']
})
export class FooterComponent implements OnInit {

  constructor(public footer:FooterService) { }

  ngOnInit() {
    
  }

}
