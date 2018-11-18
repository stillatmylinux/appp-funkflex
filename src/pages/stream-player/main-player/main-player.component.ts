import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-player',
  templateUrl: 'main-player.component.html',
  styles: ['main-player.component.scss']
})
export class MainPlayerComponent implements OnInit {

  @Input('radioState') radioState;

  constructor() { }

  ngOnInit() {
  }

}
