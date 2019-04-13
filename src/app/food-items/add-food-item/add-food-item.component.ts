import { Component, OnInit } from '@angular/core';
import { FoodItemService } from '../food-item.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-food-item',
  templateUrl: './add-food-item.component.html',
  styleUrls: ['./add-food-item.component.css']
})
export class AddFoodItemComponent implements OnInit {

  constructor(
    private service:FoodItemService,
    private firestore: AngularFirestore
    ) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      itemName: '',
      itemType: '',
      description: '',
      price : undefined
    }
  }
 
  onSubmit(form: NgForm) {
    let data = Object.assign({}, form.value);
    delete data.id;
    if (form.value.id == null)
      this.firestore.collection('foods').add(data);
    else
      this.firestore.doc('/' + form.value.id).update(data);
    this.resetForm(form);
  }

}
