import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  /* @Input nos ayuda a recibir una información desde un componente padre.in2 */
  @Input() heroe: any = {};
  @Input() index: number;

  /* @Output y EventEmitter nos permite emitir un evento desde el componente hijo hasta el componente padre. */
  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor( private router: Router) {
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verHeroe(): any {
    this.router.navigate(['/heroe', this.index]);
    // this.heroeSeleccionado.emit( this.index );
  }

}
