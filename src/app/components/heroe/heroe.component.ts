import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.services';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe: any = {};

  constructor( private activaredRouter: ActivatedRoute,
               private heroesService: HeroesService
    ) {

    this.activaredRouter.params.subscribe( params => {
      this.heroe = this.heroesService.getHeroe( params['id'] );
    });

   }

  ngOnInit(): void {
  }

}
