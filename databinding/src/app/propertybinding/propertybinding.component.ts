import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrls: ['./propertybinding.component.css']
})
export class PropertybindingComponent implements OnInit {

  public urlimg = 'https://picsum.photos/id/237/200/300';

  constructor() { }

  ngOnInit() {
  }

}
