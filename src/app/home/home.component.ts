import { Component,OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
userForm: FormGroup = new FormGroup({});
submitted= false;

constructor(private formBuilder: FormBuilder) {}

ngOnInit():void{
  
}

intializeForm(){
  this.userForm=this.formBuilder.group({

  })
}
}