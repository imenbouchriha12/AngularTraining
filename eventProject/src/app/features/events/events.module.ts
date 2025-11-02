import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { ListEventComponent } from './list-event/list-event.component';
import { FormsModule, ɵInternalFormsSharedModule } from '@angular/forms';
import { DetailEventComponent } from './detail-event/detail-event.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { CardEventComponent } from './card-event/card-event.component';
import { SharedModuleModule } from "../../shared-module/shared-module.module";


@NgModule({
  declarations: [
    EventsComponent,
    ListEventComponent,
    DetailEventComponent,
    SideBarComponent,
    CardEventComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    FormsModule,
    SharedModuleModule
]
})
export class EventsModule { }
