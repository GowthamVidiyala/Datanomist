import { Registration } from './Registration';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import  { RegistrationService } from './registration.service';
//used for chips
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';

export interface MedicalHistory {
  name: string;
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.sass']
})
export class RegistrationComponent implements OnInit {

  // initializing Model Data
  registrationInput : Registration = {
    name: "",
    emailId: "",
    password: "",
    phoneNumbers: "",
    age: null,
    gender: "",
    street: "",
    area: "",
    city: "",
    state: "",
    medicalHistory:""
  };

  //Password Icon
  hide = true;

  //sending output data from registration component to App component  
  @Output() emitRegistrationResult = new EventEmitter(); 

  constructor(private regService : RegistrationService) { }

  ngOnInit(): void {
  }

//----------------Slider Data ----------------------//
  //Slider to add yrs
  formatLabel(value: number) {
    if (value > 1) {
      return Math.round(value) + 'yrs';
     }
     else
     return Math.round(value) + 'yr';
    }

  //To set Slide Data to Patient age
    pitch(event: any) {
      this.registrationInput.age=event.value;
    }

//-----------------------------------------------------//


//----------------Chips Data----------------------------//

visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  medHis: MedicalHistory[] = [
    {name: 'None'}
  ];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    this.registrationInput.medicalHistory  = this.registrationInput.medicalHistory+",".concat(event.value);

    // Add our medical history
    if ((value || '').trim()) {
      this.medHis.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: MedicalHistory): void {
    const index = this.medHis.indexOf(fruit);

    if (index >= 0) {
      this.medHis.splice(index, 1);
    }
  }

//-------------------------------------------------------//
  //Sending data to Registration Service
  onRegisterSubmit(data)
  {
     this.registrationInput =data.value;
     console.log("Registration Component Done");
     console.log(this.registrationInput.emailId); 
    //  let isRegistrationSuccess : boolean =false;
    
     this.regService.sendRegisterData(this.registrationInput).
     subscribe(
       response => {
        //  isRegistrationSuccess = true;
         this.emitRegistrationResult.emit("Registration Successful");
         console.log("Registration Successs Bro",response)
      },
       error => {
//        isRegistrationSuccess = false; 
        this.emitRegistrationResult.emit("Registration Failed");
        console.log("Error occured at Registration",error) 
      })
  }
}

