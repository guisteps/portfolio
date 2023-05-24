import { Component } from "@angular/core";

@Component({
    selector: 'sobre',
    templateUrl: './sobre.html',
    styleUrls: ['./sobre.scss']
})
export class SobreComponent {

    download() {
        window.open('/assets/cv_guilherme_passos.pdf');
    }
}