import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-clases',
    templateUrl: './clases.component.html',
    styles: []
})
export class ClasesComponent implements OnInit {

    alerta: string;
    loading = false;
    propiedades = {
        danger: false
    };

    constructor() {
        this.alerta = 'alert-danger';
    }

    ngOnInit() {
    }
    ejecutar() {
        this.loading = true;
        setTimeout(() => {
            this.loading = false;
        }, 3000);
    }
}
