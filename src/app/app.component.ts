import { Component } from '@angular/core';
import { AuthorsService } from './authors.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  subTitle = 'Authors';
  authors;
  imageUrl = "https://static.toiimg.com/photo/msid-58515713,width-96,height-65.cms";
  onClick() {
    alert('l3bt')
  };
  constructor(service: AuthorsService) {
    this.authors = service.getAuthors()
  }

}
