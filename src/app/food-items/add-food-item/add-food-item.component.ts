import { Component, OnInit } from '@angular/core';
import { FoodItemService } from '../food-item.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { element } from '@angular/core/src/render3';
import * as firebase from 'firebase';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-food-item',
  templateUrl: './add-food-item.component.html',
  styleUrls: ['./add-food-item.component.css']
})
export class AddFoodItemComponent implements OnInit {
  

  constructor(
    private service:FoodItemService,
    private firestore: AngularFirestore,
    private toastr: ToastrService,
    public dialogRef : MatDialogRef<AddFoodItemComponent>
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

  onFileUpload(event){
    const file = event.target.files[0];
    var filename = file.itemName;
    var storageRef = firebase.storage().ref('/menus'+ filename);
    var uploadTask = storageRef.put(file);

  uploadTask.on('state_changed', function(snapshot){

  }, function(error) {
  // Handle unsuccessful uploads
  }, function() {
  // Handle successful uploads on complete
  // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    var downloadURL = uploadTask.snapshot.downloadURL;
    console.log(downloadURL);
  });

  
    }
 
  onSubmit(form: NgForm) {
    let data = Object.assign({}, form.value);
    delete data.id;
    if (form.value.id == null)
      this.firestore.collection('foods').add(data);
    else
      this.firestore.doc('/' + form.value.id).update(data);
    this.resetForm(form);
    this.onClose();
    this.toastr.success('Submitted successfully');

  }

  onClose(){
    this.dialogRef.close();
    }

}
