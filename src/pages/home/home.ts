import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DisplayPage } from '../display/display';
import Emparr from '../Array';
import { Details } from '../Info';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {




  constructor(public navCtrl: NavController) {

  }

 


  List(Name,Surname,ID,Role){

    let B = new Details(Name,Surname,ID,Role);
Emparr.push(B)
     this.navCtrl.push(DisplayPage);

    console.log(Emparr);



  
      }
      
}
