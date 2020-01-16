import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() section: String;
  titleSection: string;
  subtitleSection: string;

  constructor() { }

  ngOnInit() {
    switch(this.section){
      case 'general':
        this.titleSection = 'Noticias generales';
        break;
      case 'archivo':
        this.titleSection = 'Noticias archivadas';
        this.subtitleSection = 'Nuestras noticias archivadas'
        break;
      case 'formulario':
        this.titleSection = 'Añadir una noticia';
        break;
      case 'singleNew':
        this.titleSection = 'Sección de lectura';
        break;
      case undefined:
        this.titleSection = 'FinaNews';
        this.subtitleSection = 'El portal referencia de noticias fintech';
        break;
      default:
        this.titleSection = 'No está registrado en el switch';
        break;
    }
  }

}
