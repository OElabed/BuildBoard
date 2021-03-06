import { Component, OnInit, Input } from '@angular/core';
import { ProjectBuild } from 'src/app/core/model/project-build';
import { BuildMiscService } from 'src/app/core/services/build-misc.service';

@Component({
  selector: 'app-build-card',
  templateUrl: './build-card.component.html',
  styleUrls: ['./build-card.component.scss']
})
export class BuildCardComponent implements OnInit {

  @Input() build: ProjectBuild;
  @Input("card-size") cardSize: number;

  constructor(public buildMiscService: BuildMiscService) { }

  ngOnInit(): void {
  }

}
