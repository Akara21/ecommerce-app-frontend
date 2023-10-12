import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  searchTerm = '';
  test() {
    console.log(this.searchTerm);
  }

  clearInput() {
    this.searchTerm = '';
  }
}
