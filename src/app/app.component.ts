import { Component , signal} from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [HeaderComponent, UserInputComponent]
})
export class AppComponent {
  title = 'info-saver';
  name="";
  email="";
  phoneNumber="";
  address="";
image="";
$event: any;
data: any;

  showData(data: { name: string; email:string;phoneNumber:string;address:string; image:any }){
    // console.log(name);
    this.name=data.name
    this.phoneNumber=data.phoneNumber;
    this.email=data.email;
    this.address=data.address;
    this.image=data.image;
    console.log("this is insdie of parent "+this.name);
    console.log("the email "+this.email);
    console.log("the phone number "+this.phoneNumber);
    console.log("the address is "+this.address);
    console.log("the image is "+this.image);
  }

}

//   message=signal("1");
//   messages=1;
//   updateData(){
//     console.log("inside came successfully");
//  this.messages+=1;
//   // localStorage.setItem("message",JSON.stringify(message));
//   // localStorage.getItem("message");
//   // console.log(message);
//   }
//   onClick(){
//     this.message.set("6");
//   }
