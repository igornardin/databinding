import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-formularioreativo',
  templateUrl: './formularioreativo.component.html',
  styleUrls: ['./formularioreativo.component.css']
})
export class FormularioreativoComponent implements OnInit {
  
  nome = new FormControl('Angular');

  atualizarNome(){
    this.nome.setValue('Henrique');
  }

  constructor() { }

  ngOnInit() {
  }

}
