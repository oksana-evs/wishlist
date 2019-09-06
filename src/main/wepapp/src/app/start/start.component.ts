import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Wishlist} from "../entities/wishlist";

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  wishlist: FormGroup;

  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.wishlist = new FormGroup({
      name: new FormControl(''),
      item1: new FormControl(''),
      item2: new FormControl(''),
      item3: new FormControl('')
    });
  }

  onSubmit({value} : {value: Wishlist}) {
    //TODO: pass this value to backend and save it in some wishlist array
    console.log(value)
  }
}
