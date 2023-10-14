import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  searchTerm = '';

  @Output()
  search = new EventEmitter<string>


  clearInput() {
    this.searchTerm = '';
    this.search.emit(this.searchTerm)
  }

  onSearch() {
    this.search.emit(this.searchTerm)
  }
}
