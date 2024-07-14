import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  public Nome = "Bryan sales";
  public Nome2 = "teste Bryan sales";
  public VarJson = {Id : 1 , Nome:"Bryan", Sobrenome: "Sales"}
  public Data = new Date();

  filtro:string ="";
  livros: string[] = ['Angular','C#'];

  addNovoValor(valor:string){

    this.livros.push(valor);
    

  }

}
