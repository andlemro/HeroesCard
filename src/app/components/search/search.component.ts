import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  heroes: any[] = [];
  termino: string;

  constructor( private activaredRouter: ActivatedRoute,
               private heroesService: HeroesService,
               private router: Router
    ) { }

  ngOnInit(): void {
    this.activaredRouter.params.subscribe( params => {
      this.termino = params['termino'];
      this.heroes = this.heroesService.buscarHeroes( params['termino'] );
      console.log( this.heroes );
    });
  }

  verHeroe(idx: number): any {
    this.router.navigate(['/heroe', idx]);
  }

}
