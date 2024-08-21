import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-module1',
  templateUrl: './module1.component.html'
})
export class Module1Component {

  constructor(private router: Router) { }

  navigateToModule2() {
    this.router.navigate(['/module2/child2']);
  }
}
