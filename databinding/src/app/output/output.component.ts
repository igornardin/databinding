import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  @Output() enviarVoto = new EventEmitter<boolean>();
  votou = false;

  constructor() { }

  vote(concorda: boolean){
    this.enviarVoto.emit(concorda);
    this.votou = true;
  }
  ngOnInit() {
  }

}
