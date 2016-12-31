import { Component } from '@angular/core';


@Component({
    selector: 'app',
    template: `<p>This is the application</p>`
})
export class AppComponent { 

    constructor() {
        console.log('Constructing App Component');
    }

}