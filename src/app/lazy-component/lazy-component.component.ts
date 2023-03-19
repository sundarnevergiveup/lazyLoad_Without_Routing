import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-component',
  templateUrl: './lazy-component.component.html',
  styleUrls: ['./lazy-component.component.scss']
})
export class LazyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
