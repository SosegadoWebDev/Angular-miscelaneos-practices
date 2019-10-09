import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[appResaltado]'
})
export class ResaltadoDirective {
    constructor(private el: ElementRef) {
        console.log('directiva llamada');
        // console.log(el.nativeElement);
        // EelementRef(nativeElement) captura el elemento del dom para angular
        // el.nativeElement.style.backgroundColor = 'yellow';
    }
    // Hostlisterner para escuchar al elemento de la directiva
    @Input('appResaltado') nuevoColor: string;
    @HostListener('mouseenter') mouseEntro() {
        // this.el.nativeElement.style.backgroundColor = 'gray';
        // console.log(this.nuevoColor);
        this.resaltar(this.nuevoColor || 'black');
    }
    @HostListener('mouseleave') mouseSalio() {
        // this.el.nativeElement.style.backgroundColor = null;
        this.resaltar(null);
    }
    private resaltar(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
}
