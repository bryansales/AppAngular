import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Pessoa } from 'src/app/Pessoa';
import { PessoasService } from 'src/app/pessoas.service';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {


formulario:any;
tituloFormulario :string | undefined;
pessoas : Pessoa[] | any;
visibilidadeFormulario : boolean = false;
visibilidadeTabela : boolean = true;

 constructor(private PessoasServices : PessoasService){}

  ngOnInit(): void {

    
    this.PessoasServices.PegarTodos().subscribe(resultado => {

      this.pessoas = resultado;
    });

this.tituloFormulario = "Nova Pessoa";

    this.formulario = new FormGroup({
      id: new FormControl(null),
      nome : new FormControl(null),
      sobrenome : new FormControl(null),
      idade : new FormControl(null),
      profissao: new FormControl(null)
    });

  }

  ExibirFormularioCadastro() :void{

    this.visibilidadeTabela = false;
    this.visibilidadeFormulario = true;
  }

  ExibirTabela() :void{

    this.visibilidadeTabela = true;
    this.visibilidadeFormulario = false;
  }

  ExibirFormularioAlteracao(Id:number) : void{

    this.visibilidadeTabela = false;
    this.visibilidadeFormulario = true;

    this.PessoasServices.PegarPeloId(Id).subscribe(pessoa => {
      this.tituloFormulario = `Atualizar ${pessoa.nome} ${pessoa.sobrenome}`;
      this.formulario = new FormGroup({
        id: new FormControl(pessoa.id),
        nome : new FormControl(pessoa.nome),
        sobrenome : new FormControl(pessoa.sobrenome),
        idade : new FormControl(pessoa.idade),
        profissao : new FormControl(pessoa.profissao)
      });
    })
 
  }

  DeletarPessoa(id : number) : void {

     if(confirm("Tem certeza que deseja excluir essa pessoa") == true){
      this.PessoasServices.DeletarPessoa(id).subscribe( retorno =>{

        alert("Pessoa deletada com sucesso!");
        this.PessoasServices.PegarTodos().subscribe(pessoas => {

          this.pessoas = pessoas;
        });
        this.visibilidadeTabela = true;
        this.visibilidadeFormulario = false;

      });
     };

     
  }


  EnviarFormulario() :void{
  
    const Pessoa : Pessoa = this.formulario.value;

      if(Pessoa.id > 0){

        this.PessoasServices.AtualizarPessoa(Pessoa).subscribe(retorno => {

          this.visibilidadeFormulario = false;
          this.visibilidadeTabela = true;

          alert("Pessoa atualizada com sucesso!")

          this.PessoasServices.PegarTodos().subscribe(pessoas => {

            this.pessoas = pessoas;
          });

        });

      }
      else{

         Pessoa.id = 0;
        this.PessoasServices.SalvarPessoa(Pessoa).subscribe(resultado => {
      
          this.visibilidadeTabela = true;
          this.visibilidadeFormulario = false;
            alert('Pessoa inserida com sucesso!');
      
            this.PessoasServices.PegarTodos().subscribe(pessoas => {
      
              this.pessoas = pessoas;
            });
          });

      }

  }

}
