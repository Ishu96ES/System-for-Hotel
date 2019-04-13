import { Injectable } from '@angular/core';
import { FoodItem } from './food-item.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FoodItemService {

  formData : FoodItem;

  constructor(private firestore: AngularFirestore) { }
  getItems() {
    return this.firestore.collection('foods').snapshotChanges();
  }
}
