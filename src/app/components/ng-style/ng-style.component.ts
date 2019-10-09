import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ng-style',
    template: `
    <p [ngStyle]="{'font-size': '20px'}">
        Inline template!
    </p>
    <p [style.fontSize.px]="creciente">
        Click the button...
    </p>
    <button class="btn btn-outline-primary" (click)="creciente = creciente + 5">
        <i class="fa fa-plus"></i>
    </button>
    <button class="btn btn-outline-danger" (click)="creciente = creciente - 5">
        <i class="fa fa-minus"></i>
    </button>
  `,
    styles: []
})
export class NgStyleComponent implements OnInit {
    creciente: number;

    constructor() {
        this.creciente = 10;
    }

    ngOnInit() {
    }

}
