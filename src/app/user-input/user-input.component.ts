import { Component, EventEmitter, Output } from '@angular/core';
import {FormsModule} from '@angular/forms'
@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() data= new EventEmitter<{
    image:any,
    name:string,
    email:string,
    phoneNumber:string;
    address:string;
  }>();
enteredFullName:any;
enteredEmail: any;
enteredAddress: any;
enteredContactNumber: any;
enteredPhoneNumber: any;
chossenImage: any;

onSubmit(){
  console.log("you are catched the data here the below ");
  console.log(this.enteredFullName);
  this.data.emit({
    image : this.chossenImage,
    name: this.enteredFullName,
    email: this.enteredEmail,
    phoneNumber:this.enteredPhoneNumber,
    address:this.enteredAddress,

  });
}
datastore(){

}
}
