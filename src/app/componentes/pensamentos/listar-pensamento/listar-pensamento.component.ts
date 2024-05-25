import { NgFor, NgIf } from '@angular/common';
import { PensamentoService } from './../pensamento.service';
import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento/pensamento';
import { PensamentoComponent } from "../pensamento/pensamento.component";
import { RouterLink } from '@angular/router';


@Component({
    selector: 'app-listar-pensamento',
    templateUrl: './listar-pensamento.component.html',
    standalone: true,
    styleUrls: ['./listar-pensamento.component.css'],
    imports: [NgFor, NgIf, PensamentoComponent, RouterLink]
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos: Pensamento[] = [];
  paginaAtual: number = 1;

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
    this.service.listar(this.paginaAtual).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
    })
  }
}
