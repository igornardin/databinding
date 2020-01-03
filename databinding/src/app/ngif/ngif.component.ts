import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {

  mostrarVersaoAtual: boolean = false;
  mudarVersao(){
    this.mostrarVersaoAtual = !this.mostrarVersaoAtual;
  }
  constructor() { }

  ngOnInit() {
  }

}
