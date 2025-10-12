import { Component, OnInit } from '@angular/core';
import { Eventy } from '../../../models/eventy';
import { EventsService } from '../../../sharedModule/data/events.service';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css'] 
})
export class ListEventComponent implements OnInit {

  title:string;
searchText: string = '';

listEvents:Eventy[];

constructor(private data:EventsService){}
ngOnInit(): void {  
this.listEvents=this.data.getAllEvents();

}
nbLike(event: any) {
  if (!event.liked) {
    event.nbLike += 1;
    event.liked = true;
  } else {
    event.nbLike -= 1;
    event.liked = false;
  }
}

nbPlace(event: any) {
    event.nbPlaces--; 

  
}
search(): Eventy[] {
  if (!this.searchText) return this.listEvents; 
  const text = this.searchText.toLowerCase();
  return this.listEvents.filter(e => e.title.toLowerCase().includes(text));
}

}
