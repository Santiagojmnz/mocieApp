import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import {  Movie } from '../interfaces/movie.interface';
import { environments } from '../../../environments/environments';

@Injectable({providedIn: 'root'})
export class MovieService {


    private baseUrl: string = environments.baseUrl;
    private api_key: string = environments.api_key;
    constructor(private http: HttpClient) { }



    getMovies():Observable<Movie[]>{
    
    return this.http.get<Movie[]>(`${this.baseUrl}/now_playing?api_key=${this.api_key}&language=es-MX`);
    }

    getMovieById(id:string):Observable<Movie|undefined>{
   
    return this.http.get<Movie>(`${this.baseUrl}/${id}?api_key=${this.api_key}&language=es-MX`)
.pipe(
    catchError(error=>of(undefined))
    )    
}
    
}