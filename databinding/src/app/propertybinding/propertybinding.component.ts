import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrls: ['./propertybinding.component.css']
})
export class PropertybindingComponent implements OnInit {

  public urlimag = 'https://picsum.photos/200/300.jpg';

  constructor() { }

  ngOnInit() {
  }

}
