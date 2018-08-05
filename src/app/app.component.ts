import { Component } from '@angular/core';
import { ImageService } from './image.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gallery';
  images:any[] = [];
  constructor(private imageserv : ImageService)
  {
    this.images = this.imageserv.getImages();
  }
}
