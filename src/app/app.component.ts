import { Component, AfterViewInit } from '@angular/core';
import { Swiper } from 'swiper/dist/js/swiper.esm.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const x = new Swiper('.swiper-container', {
      setWrapperSize: true,
      spaceBetween: 5
    });
  }
}
