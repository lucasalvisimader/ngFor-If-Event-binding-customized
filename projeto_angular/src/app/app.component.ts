import { Component } from '@angular/core';
import { bufferToggle } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto_angular';
  
  tecnologias: string[] = ['java','\'-\'','hello','world'];
  tecnologia: string = '';

  fotos: { id:number, arquivo: any }[] = [];

  adicionarFotos():void {
    this.fotos.push({id: this.fotos.length + 1, arquivo:undefined});
  }

  mostrarFotos():void {
    console.log(this.fotos);
  }

  isJava() {
    if(this.tecnologia === 'java') return true
    return false
  }
  isCarinha() {
    if(this.tecnologia === '\'-\'') return true
    return false
  }
  isHello() {
    if(this.tecnologia === 'hello') return true
    return false
  }
  isWorld() {
    if(this.tecnologia === 'world') return true
    return false
  }

  escolherCor() {
    if(this.isJava()) return 'blue'
    else if (this.isCarinha()) return 'deeppink'
    else if (this.isHello()) return 'crimson'
    else return 'green'
  }

  contador = 0;

  fuiClicado():void {
    this.contador++;
  }

  appValor = 'esfirra'
}
