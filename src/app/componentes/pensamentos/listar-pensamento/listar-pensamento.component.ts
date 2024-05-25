import { NgFor, NgIf } from '@angular/common';
import { PensamentoService } from './../pensamento.service';
import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento/pensamento';
import { PensamentoComponent } from "../pensamento/pensamento.component";
import { RouterLink } from '@angular/router';
import { BotaoCarregarMaisComponent } from "./botao-carregar-mais/botao-carregar-mais.component";


@Component({
    selector: 'app-listar-pensamento',
    templateUrl: './listar-pensamento.component.html',
    standalone: true,
    styleUrls: ['./listar-pensamento.component.css'],
    imports: [NgFor, NgIf, PensamentoComponent, RouterLink, BotaoCarregarMaisComponent]
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos: Pensamento[] = [];
  paginaAtual: number = 1;
  haMaisPensamentos: boolean = true;

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
    this.service.listar(this.paginaAtual).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
    })
  }

  carregarMaisPensamentos() {
    this.service.listar(++this.paginaAtual)
      .subscribe(listaPensamentos => {
        this.listaPensamentos.push(...listaPensamentos);
        if(!listaPensamentos.length) {
          this.haMaisPensamentos = false
        }
      })
  }

}
