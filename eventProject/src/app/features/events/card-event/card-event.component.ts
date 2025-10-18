import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Eventy } from '../../../models/eventy';

@Component({
  selector: 'app-card-event',
  templateUrl: './card-event.component.html',
  styleUrl: './card-event.component.css'
})
export class CardEventComponent {
@Input()e:Eventy;

@Output() notifLike:EventEmitter<Eventy> = new EventEmitter();
@Output() nbPlaces:EventEmitter<Eventy> = new EventEmitter();
nbLike(e: any) {
 this.notifLike.emit(e);
}

nbPlace(e: any) {
this.nbPlaces.emit(e);
}
}
