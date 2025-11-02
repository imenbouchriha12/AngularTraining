import { Component, Input, OnInit } from '@angular/core';
import { Eventy } from '../../../models/eventy';
import { EventsService } from '../../../shared-module/data/events.service';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListEventComponent implements OnInit {
  @Input() listEvents: Eventy[] = []; // ✅ pour recevoir les filtres du parent

  title: string = '';
  searchText: string = '';

  constructor(private data: EventsService) {}

  ngOnInit(): void {
    // Si pas encore filtré, on affiche tout
    if (this.listEvents.length === 0) {
      this.listEvents = this.data.getAllEvents();
    }
  }

  nbLike(event: Eventy) {
    if (!event.liked) {
      event.nbLike++;
      event.liked = true;
    } else {
      event.nbLike--;
      event.liked = false;
    }
  }

  nbPlace(event: Eventy) {
    event.nbPlaces--;
  }

  search(): Eventy[] {
    if (!this.searchText) return this.listEvents;
    const text = this.searchText.toLowerCase();
    return this.listEvents.filter(e => e.title.toLowerCase().includes(text));
  }
}
