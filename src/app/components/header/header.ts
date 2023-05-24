import { Component } from "@angular/core";

@Component({
    selector: 'header',
    templateUrl: './header.html',
    styleUrls: ['./header.scss']
})
export class HeaderComponent {

    constructor() {
    }

    scrollTo(id: string) {
        const element = document.getElementById(id);
        if (element) {
            const startY = window.pageYOffset; // posição atual da tela
            const endY = element.offsetTop; // posição final da tela
            const distance = endY - startY; // distância a percorrer
            const duration = 500; // duração da animação em milissegundos
    
            let start: number | null = null;
            function step(timestamp: number) {
                if (!start) start = timestamp;
                const elapsed = timestamp - start;
                const progress = Math.min(elapsed / duration, 1); // progresso da animação (de 0 a 1)
                const ease = easeInOutQuad(progress); // função de interpolação (ease-in-out)
                window.scrollTo(0, startY + (distance * ease)); // rola a tela para a posição desejada
                if (elapsed < duration) {
                    window.requestAnimationFrame(step); // continua a animação
                }
            }
            window.requestAnimationFrame(step); // inicia a animação

            function easeInOutQuad(t: number) {
                return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
            }
        }
    }

}