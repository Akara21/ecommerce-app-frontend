import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  searchTerm = '';

  @Output()
  onSearchInput = new EventEmitter<string>


  clearInput() {
    this.searchTerm = '';
    this.onSearchInput.emit(this.searchTerm)
  }

  onSearch() {
    this.onSearchInput.emit(this.searchTerm)
  }
}
