import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-imagedetail',
  templateUrl: './imagedetail.component.html',
  styleUrls: ['./imagedetail.component.css']
})
export class ImagedetailComponent implements OnInit {

  image:any;
  constructor(private imageServ: ImageService,private route:ActivatedRoute) { }

  ngOnInit() {
     this.image = this.imageServ.getImage(this.route.snapshot.params['id']);
    //  console.log(this.image);

  }

}
