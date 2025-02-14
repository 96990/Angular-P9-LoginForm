import { Directive, ElementRef, inject } from "@angular/core";

@Directive({
    selector: '[appLog]',
    standalone: true
})
export class LogDirective{
    private elementRef = inject(ElementRef);

    constructor(){
        console.log("Log Directive");
        console.log(this.elementRef.nativeElement);
    }
}