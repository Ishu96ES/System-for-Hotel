import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AddFoodItemComponent } from '../add-food-item/add-food-item.component';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit() {
  }

  onAdd(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus =true;
    dialogConfig.disableClose = true;
    dialogConfig.width= "40%";
    this.dialog.open(AddFoodItemComponent,dialogConfig);
  }

}
