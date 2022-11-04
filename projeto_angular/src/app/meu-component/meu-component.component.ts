import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './meu-component.component.html',
  styleUrls: ['./meu-component.component.css']
})
export class MeuComponentComponent implements OnInit {

  @Output()
  clicado = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  fuiClicado():void {
    this.clicado.emit();
  }

  fuiAlterado():void {
    console.log(this.valor);
    this.valorChange.emit(this.valor);
  }

  @Input()
  valor = '';

  @Output()
  valorChange = new EventEmitter();

}
