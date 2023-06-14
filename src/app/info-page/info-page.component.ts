import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.scss']
})
export class InfoPageComponent implements OnInit {

  constructor(private _location: Location, private router: Router) {}
  ngOnInit(): void {}

  gotoBack() {
    this._location.back();
  }

  toNext() {
    this.router.navigateByUrl('/details');
  }

}
