import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classbinding',
  templateUrl: './classbinding.component.html',
  styleUrls: ['./classbinding.component.css']
})
export class ClassbindingComponent implements OnInit {
  public aplicarClasse = false;
  aplicarStyle = false;
  constructor() { }

  setarStyle(){
     let styles = {
      'background-color': this.aplicarStyle ? 'red' : 'transparent',
      'font-weight': this.aplicarStyle ? 'bold': 'normal'
    }
    return styles;
  }

  ngOnInit() {
  }

}
