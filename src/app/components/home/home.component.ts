import {
    Component,
    OnInit,
    OnChanges,
    // DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
} from '@angular/core';

@Component({
    selector: 'app-home',
    template: `
    <div class="container">
        <h2>Demo <small>angular</small></h2>
        <hr>
        <app-ng-style></app-ng-style>
        <hr>
        <app-css></app-css>
        <p>
            parrafo debajo de app-css
        </p>
        <hr>
        <app-clases></app-clases>
            <p [appResaltado]="'blue'">
                directiva personalizada
            </p>
        <hr>
        <app-ng-switch></app-ng-switch>
    </div>
    `,
    styles: []
})
export class HomeComponent implements
    OnInit,
    OnChanges,
    // DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {

    constructor() {
        console.log('contructor called');
    }
    ngOnInit() {
        console.log('onInit');
    }
    ngOnChanges() {
        console.log('OnChanges');
    }
    // DoCheck,
    ngAfterContentInit() {
        console.log('AfterContentInit');
    }
    ngAfterContentChecked() {
        console.log('AfterContentChecked');
    }
    ngAfterViewInit() {
        console.log('afterViewInit');
    }
    ngAfterViewChecked() {
        console.log('AfterViewCheked');
    }
    ngOnDestroy() {
        console.log('OnDestroy');
    }

}
