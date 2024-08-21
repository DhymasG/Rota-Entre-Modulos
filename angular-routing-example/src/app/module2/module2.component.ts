import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-module2',
  templateUrl: './module2.component.html'
})
export class Module2Component {

  constructor(private router: Router) { }

  navigateToModule1() {
    this.router.navigate(['/module1/child1']);
  }
}
