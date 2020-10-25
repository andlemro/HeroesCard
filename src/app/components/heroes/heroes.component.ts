import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  constructor(
    private heroesServices: HeroesService,
    private router: Router
    ) { }

  heroes: Heroe[] = [];

  ngOnInit(): void {
    this.heroes = this.heroesServices.getHeroes();
  }

  verHeroe(idx: number): any {
    this.router.navigate(['/heroe', idx]);
  }

}
