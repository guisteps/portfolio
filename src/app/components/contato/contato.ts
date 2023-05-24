import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'contato',
    templateUrl: './contato.html',
    styleUrls: ['./contato.scss']
})
export class ContatoComponent {

    form: FormGroup;

    constructor(public fb: FormBuilder, private snack: MatSnackBar) {
        this.form = fb.group({
            nome: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email]),
            msg: ''
        });
    }

    enviar() {
        if (this.form.valid) {
            this.form.reset();
            Object.keys(this.form.controls).forEach(key => {
                this.form.get(key)?.setErrors(null);
            });
            this.snack.open('Mensagem enviada.', 'X', { duration: 2000 });
        }
    }
}