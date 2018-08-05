import { Component, OnInit, Input } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent{

  images:any[] = [];
  @Input() filterBy :string = 'all';
  constructor(private imageserv : ImageService)
  {
    this.images = this.imageserv.getImages();
  }

}
