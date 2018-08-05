import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import {ImageService} from  './image.service';
import { ImageFilterPipe } from './image-filter.pipe';
import {RouterModule, Routes} from '@angular/router';
import { ImagedetailComponent } from './imagedetail/imagedetail.component';

const appRoutes:Routes = [
  {path: '', redirectTo: '/gallery',pathMatch:'full'},
  {path: 'gallery', component: GalleryComponent},
  {path: 'image/:id', component: ImagedetailComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImageFilterPipe,
    ImagedetailComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
