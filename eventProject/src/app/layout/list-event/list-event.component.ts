import { Component, OnInit } from '@angular/core';
import { Eventy } from '../../models/eventy';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css'] 
})
export class ListEventComponent implements OnInit {

  title:string;

listEvents:Eventy[];

constructor(){}
ngOnInit(): void {  
  this.listEvents = [
    {
      id: 1,
      title: 'Angular Training',
      description: 'Angular v18',
      date: new Date('2025-11-10'),
      location: 'Tunis',
      price: 50,
      organizerId: 10,
      imageUrl: '/images/Angular.png',
      nbPlaces: 25,
      nbLike: 10,

    },
    {
      id: 2,
      title: 'DevFest Sousse 2025',
      description: 'Conférence technologique organisée par Google Developers Group',
      date: new Date('2025-12-05'),
      location: 'Sousse',
      price: 40,
      organizerId: 11,
      imageUrl: '/images/devf.png',
      nbPlaces: 300,
      nbLike: 0,

    },
    {
      id: 3,
      title: 'Startup Weekend Tunis',
      description: 'Compétition de 54h pour créer et pitcher un projet innovant',
      date: new Date('2025-10-20'),
      location: 'Tunis',
      price: 20,
      organizerId: 12,
      imageUrl: '/images/startup.jpg',
      nbPlaces: 100,
      nbLike: 0,

    },
    {
      id: 4,
      title: 'AI & Data Science Conference',
      description: 'Rencontre internationale sur l’IA et la science des données',
      date: new Date('2025-11-25'),
      location: 'Sfax',
      price: 100,
      organizerId: 13,
      imageUrl: '/images/ai.jpeg',
      nbPlaces: 150,
      nbLike: 0,

    }
  ];
  this.listEvents = this.listEvents.map(e => ({ ...e, liked: false }));

}
toggleLike(event: any) {
  if (!event.liked) {
    event.nbLike += 1;
    event.liked = true;
  } else {
    event.nbLike -= 1;
    event.liked = false;
  }
}

}
