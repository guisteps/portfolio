import { Component, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { GithubRet } from "../../model/GithubRet.model";
import { GithubService } from "../../services/github.service";

@Component({
    selector: 'projetos',
    templateUrl: './projetos.html',
    styleUrls: ['./projetos.scss']
})
export class ProjetosComponent implements OnDestroy {

    subscriptions: Subscription[] = [];
    ultimosRepos: GithubRet[] = [];

    constructor(private gitSrv: GithubService) {
        this.obRepos();
    }

    obRepos() {
        const sub = this.gitSrv.getRepos().subscribe(data => {
            this.ultimosRepos = data.sort(this.compararDatas).splice(0, 4);
        });
        this.subscriptions.push(sub);
    }


    compararDatas(a: GithubRet, b: GithubRet): number {
        const dataA = new Date(a.updated_at);
        const dataB = new Date(b.updated_at);
        return dataB.getTime() - dataA.getTime();
    }

    navegar(url: string) {
        window.open(url);
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(sub => { sub.unsubscribe(); })
    }
}