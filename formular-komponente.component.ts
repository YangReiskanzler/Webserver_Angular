import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-formular-komponente',
    templateUrl: './formular-komponente.component.html',
    styleUrls: ['./formular-komponente.component.css']
})

export class FormularKomponenteComponent {
    vorname: string = '';
    nachname: string = '';
    email: string = '';
    nachricht: string = '';
    zahl: number = 0;
    serverAntwort: string = '';

    constructor(private http: HttpClient) {}

    onSubmit() {
        const Data = {
            vorname: this.vorname,
            nachname: this.nachname,
            email: this.email,
            nachricht: this.nachricht,
            zahl: this.zahl
        };

        this.http.post<any>('http://localhost:3000/formular', Data)
            .subscribe(response => {
                this.serverAntwort = response.message;  // Annahme: Der Server sendet eine Antwort mit einer Nachricht zurück
            }, error => {
                console.error('Fehler beim Senden des Formulars: ', error);
            });
    }
}