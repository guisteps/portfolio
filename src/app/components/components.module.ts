import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header";
import { SobreComponent } from "./sobre/sobre";
import { ProjetosComponent } from "./projetos/projetos";
import { ContatoComponent } from "./contato/contato";
import { IconsModule } from "../icons.module";
import { HomeComponent } from "./home/home";
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MatSnackBarModule } from "@angular/material/snack-bar";


@NgModule({
    declarations: [
        HeaderComponent,
        SobreComponent,
        ProjetosComponent,
        ContatoComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        IconsModule,
        MatInputModule,
        MatSnackBarModule,
        ReactiveFormsModule
    ],
    exports: [
        HeaderComponent,
        SobreComponent,
        ProjetosComponent,
        ContatoComponent,
        HomeComponent
    ],
    providers: [],
})

export class ComponentModule { }