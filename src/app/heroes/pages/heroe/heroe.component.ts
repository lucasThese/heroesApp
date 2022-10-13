import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  constructor( private activatedRout: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRout.params
        .subscribe(({id}) => console.log(id));
  }

}
