import { Component, OnInit, AfterViewInit } from '@angular/core';
import AOS from 'aos';
import Typewriter from 'typewriter-effect/dist/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    AOS.init();
  }

  ngAfterViewInit() {
    new Typewriter('#typewriter', {
      strings: ['npx create-matchstick-app my-app', 'cd my-app', 'ng serve'],
      autoStart: true,
      loop: true,
    });
  }
}
