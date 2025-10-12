import { Component, OnInit } from '@angular/core';
import { Eventy } from '../../../models/eventy';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../../../sharedModule/data/events.service';

@Component({
  selector: 'app-detail-event',
  templateUrl: './detail-event.component.html',
  styleUrl: './detail-event.component.css'
})
export class DetailEventComponent implements OnInit {
//read url
//get data
//injecter service
//fetch list event by id
//

 event?: Eventy;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventsService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.event = this.eventService.getAllEvents().find(e => e.id === id);
  }
  nbPlace(event: any) {
    event.nbPlaces--; 

  
}
}
