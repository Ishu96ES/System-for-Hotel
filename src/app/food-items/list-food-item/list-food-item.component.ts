import { Component, OnInit } from '@angular/core';
import { FoodItem } from '../food-item.model';
import { FoodItemService } from '../food-item.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { firestore } from 'firebase';
import * as firebase from 'firebase';

@Component({
  selector: 'app-list-food-item',
  templateUrl: './list-food-item.component.html',
  styleUrls: ['./list-food-item.component.css']
})
export class ListFoodItemComponent implements OnInit {

  list: any;
  constructor(
    private service:FoodItemService,
    private firestore:AngularFirestore,
    private toastr: ToastrService
  ) { }

  p: number = 1;
  ngOnInit() {
    this.service.getItems().subscribe(actionArray => {
      
      this.list = actionArray.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          itemName: e.payload.doc.data()['itemName'],
          itemType: e.payload.doc.data()['itemType'],
          price: e.payload.doc.data()['price'],
          description: e.payload.doc.data()['description']
        };
      })
      console.log(this.list);
    });
  }
  showimage() {
    
    var storageRef = firebase.storage().ref();
    var spaceRef = storageRef.child('meuns/1.jpg');
    storageRef.child('menus/1.jpg').getDownloadURL().then(function(url) {
        var test = url;
        alert(url);
        document.querySelector('img').src = test;

    }).catch(function(error) {

    });


}
  
  onEdit(fitem) {
    fitem.isEdit = true;
    fitem.EditName = fitem.itemName;
    fitem.EditType = fitem.itemType;
    fitem.EditPrice = fitem.price;
    fitem.EditDescription = fitem.description;
  }
 
  onUpdate(data) {
    let fitem = {};
    fitem['itemName'] = data.EditName;
    fitem['itemType'] = data.EditType;
    fitem['price'] = data.EditPrice;
    fitem['description'] = data.EditDescription;
    this.service.updateItems(data.id, fitem);
    data.isEdit = false;
  }
 
  onDelete(id: string) {
    if (confirm("Are you sure to delete this record?")) {
      this.firestore.doc('foods/' + id).delete();
      this.toastr.warning('Deleted successfully','menu.add');
    }
  }

}
