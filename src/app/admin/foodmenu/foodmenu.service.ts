import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';  // Firebase modules for Database, Data list and Single object
import { Foodmenu } from './foodmenu';


@Injectable({
  providedIn: 'root'
})
export class FoodmenuService {

  menusRef: AngularFireList<any>;    // Reference to menu data list, its an Observable
  menuRef: AngularFireObject<any>;   // Reference to menu object, its an Observable too
  
// Inject AngularFireDatabase Dependency in Constructor
  constructor(private db:AngularFireDatabase) { }

    // Create Student
    AddFoodmenu(menu: Foodmenu) {
      this.menusRef.push({
        name: menu.name,
        type: menu.type,
        price: menu.price
      })
    }

        // Fetch Single Student Object
    GetFoodmenu(id: string) {
      this.menuRef = this.db.object('menus-list/' + id);
      return this.menuRef;
    }

    // Fetch Students List
    GetFoodmenusList() {
      this.menusRef = this.db.list('menus-list');
      return this.menusRef;
    }  


}
