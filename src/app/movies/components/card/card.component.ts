import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/movie.interface';

@Component({
  selector: 'movie-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  @Input() showTitle: boolean = true;
  @Input()
  public movie!: Movie;
  ngOnInit(): void {


    if (!this.movie) {
      throw new Error('Method not implemented.');
    }

  }


}
