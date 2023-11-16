import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet],
    template: `
        <h1>Welcome to {{pokemonListe[1]}}!</h1>
    `
})
export class AppComponent implements OnInit {
    title = 'Pokemon';
    pokemonListe = ['Bulbizarre', 'Salamèche', 'Carapuce'];

    ngOnInit() {
        console.table(this.pokemonListe);
    }
}
