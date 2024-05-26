import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PensamentoService } from '../pensamento.service';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-criar-pensamento',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf, NgClass],
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css'
})

export class CriarPensamentoComponent implements OnInit {

  formulario!: FormGroup;
  constructor(
    private service: PensamentoService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({

      id: [idAleatorio().toString()],

      conteudo:['', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.pattern(/(.|\s)*\S(.|\s)*/)
      ])],

      autoria:['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/),
        Validators.minLength(3)
      ])],

      modelo:['modelo1'],

      favorito: [false]

    })
  }

  criarPensamento()
  { console.log(this.formulario.get('autoria')?.errors)
    if(this.formulario.valid){
        this.service.criar(this.formulario.value).subscribe(() => {
          this.router.navigate(['/listarPensamento'])
        })
      }
  }

  cancelar()
  {
    this.router.navigate(['listarPensamento'])
  }

  habilitarBotao(): string {
  if(this.formulario.valid) {
    return 'botao'
  } else {
    return 'botao__desabilitado'
  }
}

}
function idAleatorio(): number {
   return Math.floor(Math.random() * 100000090);
}
