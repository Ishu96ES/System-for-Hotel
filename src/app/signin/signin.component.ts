import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { NavtabsService } from '../navigation/navtabs/navtabs.service';
import { FooterService } from '../footer/footer.service';
import { HeaderService } from '../navigation/header/header.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ForgetpasswordComponent } from '../user/forgetpassword/forgetpassword.component';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  

  constructor(public dialog:MatDialog,public authService: AuthService) { }

  ngOnInit() {
    
  }

  onForgotpassowrd(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus =true;
    this.dialog.open(ForgetpasswordComponent);
  }

  
  backClicked() {
    window.history.back();
  }
}



