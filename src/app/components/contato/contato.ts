import { Component, OnDestroy } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmailService } from "../../services/email.service";
import { Subscription } from "rxjs";

@Component({
    selector: 'contato',
    templateUrl: './contato.html',
    styleUrls: ['./contato.scss']
})
export class ContatoComponent implements OnDestroy {

    subscriptions: Subscription[] = [];
    form: FormGroup;

    constructor(public fb: FormBuilder, private snack: MatSnackBar, private mailSrv: EmailService) {
        this.form = fb.group({
            name: new FormControl('', [Validators.required]),
            mail: new FormControl('', [Validators.required, Validators.email]),
            message: ''
        });
    }

    enviar() {
        if (!this.form.valid)
            return;

        let params: { [key: string]: any } = {};
        Object.keys(this.form.controls).forEach(key => {
            params[key] = this.form.get(key)?.value;
        });

        const sub = this.mailSrv.send(params).subscribe(data => {
            this.form.reset();
            Object.keys(this.form.controls).forEach(key => { this.form.get(key)?.setErrors(null); });
            this.snack.open('Mensagem enviada.', 'X', { duration: 2000 });
        });
        this.subscriptions.push(sub);
    }


    ngOnDestroy(): void {
        this.subscriptions.forEach(sub => { sub.unsubscribe(); });
    }
}