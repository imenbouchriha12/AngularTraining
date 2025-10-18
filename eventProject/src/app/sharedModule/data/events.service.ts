import { Injectable } from '@angular/core';
import { Eventy } from '../../models/eventy';
@Injectable({
  providedIn: 'root'
})
export class EventsService {
 list:Eventy[]=[
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
      liked:false,


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
      liked:false,


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
      liked:false,


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
      liked:false,

    }
 ];
  constructor() { }
  getAllEvents(){
    return this.list;
  }
   getEventById(id:number){
    return this.list[id];
  }
}
