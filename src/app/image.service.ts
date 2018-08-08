import { Injectable } from '@angular/core';
import { IfStmt } from '../../node_modules/@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }
  getImages()
  {
    return IMAGES;
  }
  getImage(id)
  {
    for(let img of IMAGES)
    {
      if(img.id == id)
      {
        return img;
      }
    }
  }
}

const IMAGES =[
  {"id":1, "category": "boats", "caption": "View from the boat", "url":"./assets/boat_01.jpeg"},
  {"id":2, "category": "boats", "caption": "Sailing the coast", "url":"./assets/boat_02.jpeg"},
  {"id":3, "category": "boats", "caption": "The water was nice", "url":"./assets/boat_03.jpeg"},
  {"id":4, "category": "boats", "caption": "Cool water cavern", "url":"./assets/boat_04.jpeg"},
  {"id":5, "category": "camping", "caption": "Camping Trip '17'", "url":"./assets/camping_01.jpeg"},
  {"id":6, "category": "camping", "caption": "Kim and Jessie", "url":"./assets/camping_02.jpeg"},
  {"id":7, "category": "camping", "caption": "View from the top", "url":"./assets/camping_03.jpeg"},
  {"id":8, "category": "camping", "caption": "On the trail", "url":"./assets/camping_04.jpg"},
  {"id":9, "category": "library", "caption": "Big library", "url":"./assets/library_01.jpeg"},
  {"id":10, "category": "library", "caption": "Stacks", "url":"assets/library_02.jpeg"},
  {"id":11, "category": "library", "caption": "Saturday afternoon", "url":"assets/library_03.jpeg"},
  {"id":12, "category": "library", "caption": "Local library", "url":"assets/library_04.jpeg"},
];