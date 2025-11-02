import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EventsService } from '../../../shared-module/data/events.service';
import { Eventy } from '../../../models/eventy';

@Component({
  selector: 'events-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  @Output() filtersChanged = new EventEmitter<Eventy[]>(); // ✅ ici

  events: Eventy[] = [];
  filteredEvents: Eventy[] = [];

  locations: string[] = [];
  prixList: number[] = [];
  dates: string[] = [];
  statusList = ['Disponible', 'Non disponible'];

  selectedLocation = '';
  selectedPrix = '';
  selectedDate = '';
  selectedStatus = '';

  constructor(private eventsService: EventsService) {}

  ngOnInit(): void {
    this.events = this.eventsService.getAllEvents();
    this.filteredEvents = [...this.events];

    this.locations = [...new Set(this.events.map(e => e.location))];
    this.prixList = [...new Set(this.events.map(e => e.price))];
    this.dates = [...new Set(this.events.map(e => e.date.toISOString().split('T')[0]))];
  }

  applyFilters() {
    this.filteredEvents = this.events.filter(e => {
      const status = e.nbPlaces > 0 ? 'Disponible' : 'Non disponible';
      return (
        (this.selectedLocation === '' || e.location === this.selectedLocation) &&
        (this.selectedPrix === '' || e.price.toString() === this.selectedPrix) &&
        (this.selectedDate === '' || e.date.toISOString().split('T')[0] === this.selectedDate) &&
        (this.selectedStatus === '' || status === this.selectedStatus)
      );
    });

    console.log('✅ Événements filtrés :', this.filteredEvents);
    this.filtersChanged.emit(this.filteredEvents); // ✅ envoi au parent
  }

  removeAll() {
    this.selectedLocation = '';
    this.selectedPrix = '';
    this.selectedDate = '';
    this.selectedStatus = '';
    this.filteredEvents = [...this.events];
    this.filtersChanged.emit(this.filteredEvents); // ✅ réinitialisation
  }
}
