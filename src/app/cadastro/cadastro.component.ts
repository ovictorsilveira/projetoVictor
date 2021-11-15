import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public telaLogin():void {
    this.router.navigate(['login']);

}

}
