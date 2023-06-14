import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toNext() {
    this.router.navigateByUrl('/info')
  }
}
