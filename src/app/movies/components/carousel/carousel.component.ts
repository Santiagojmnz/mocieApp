import { Component, Input, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, AfterViewInit {
  @Input() images?: any;
  @ViewChild('swiperContainer') swiperContainer?: any;

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 2,
      spaceBetween: 10,
      navigation: true,
      autoplay: {
        delay: 500, // Tiempo de espera entre cada slide (en milisegundos)
        disableOnInteraction: true// Permite la interacción del usuario con el carrusel sin detener la reproducción automática
      }
    });
  }
}