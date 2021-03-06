import { Component, OnInit } from '@angular/core';
import {TestService} from "../test.service";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  title: string;

  constructor(private testService: TestService) {
    this.testService.getTitle().subscribe(data => this.title = data);
  }

  ngOnInit() {
  }

}
