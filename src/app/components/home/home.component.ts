import { Component } from '@angular/core';
import { contestsList } from 'src/assets/dummyData/contestsList';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  contests = contestsList;
}
