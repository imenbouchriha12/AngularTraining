import { Component, OnInit } from '@angular/core';
import { Eventy } from '../../models/eventy';
import { EventsService } from '../../shared-module/data/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  allEvents: Eventy[] = [];
  filteredEvents: Eventy[] = [];

  constructor(private eventsService: EventsService) {}

  ngOnInit(): void {
    // Charger tous les événements au départ
    this.allEvents = this.eventsService.getAllEvents();
    this.filteredEvents = [...this.allEvents];
  }

  // 🧠 Méthode appelée à chaque changement de filtre
  updateFilteredEvents(filteredList: Eventy[]) {
    this.filteredEvents = filteredList;
  }
}
