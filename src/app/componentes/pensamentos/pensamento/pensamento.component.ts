import { CommonModule, NgClass, NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from './pensamento';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  standalone: true,
  imports: [NgClass, NgFor, RouterModule, CommonModule],
  styleUrls: ['./pensamento.component.css'],
})

export class PensamentoComponent implements OnInit {

  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: 'I love Angular',
    autoria: 'Wander França',
    modelo: 'modelo3'
  }

  constructor() { }

  ngOnInit(): void {
  }

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

}
