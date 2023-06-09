import { Component, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/movie.interface';
import { MovieService } from '../../services/movies.service';
import { ActivatedRoute , Router} from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-show-movie',
  templateUrl: './show-movie.component.html',
  styleUrls:['./show-movie.component.css']
})
export class ShowMovieComponent implements OnInit {
public movie?:Movie;
constructor(
  private movieService:MovieService,
  private activedRouter:ActivatedRoute,
  private router:Router,
  
  ){}



  ngOnInit(): void {
    this.activedRouter.params
    .pipe(
      switchMap(({ id }) => this.movieService.getMovieById(id))
    ).subscribe(movie => {

      if (!movie) return this.router.navigate(['movies/home']);
    
    this.movie=movie;
    console.log(movie)
    return;
    })
  }


}
