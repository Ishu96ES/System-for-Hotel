import { Component, OnInit } from '@angular/core';
import { FoodItem } from '../food-item.model';
import { FoodItemService } from '../food-item.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-food-item',
  templateUrl: './list-food-item.component.html',
  styleUrls: ['./list-food-item.component.css']
})
export class ListFoodItemComponent implements OnInit {

  list: FoodItem[];
  constructor(
    private service:FoodItemService,
    private firestore:AngularFirestore,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.service.getItems().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data(),
        } as unknown as FoodItem;
      });
    });
  }
  onEdit(fitem:FoodItem) {
    this.service.formData = Object.assign({}, fitem);
  }
 
  onDelete(id: string) {
    if (confirm("Are you sure to delete this record?")) {
      this.firestore.doc('foods/' + id).delete();
      this.toastr.warning('Deleted successfully','menu.add');
    }
  }

}
