import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { CoreModule } from 'src/app/core/core.module';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BuildCardComponent } from './build-card/build-card.component';



@NgModule({
  declarations: [
    DashboardComponent,
    BuildCardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CoreModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatProgressBarModule
  ]
})
export class DashboardModule { }