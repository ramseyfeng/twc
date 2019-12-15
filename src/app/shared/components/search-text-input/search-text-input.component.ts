import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Subject, Subscription} from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-search-text-input',
  templateUrl: './search-text-input.component.html',
  styleUrls: ['./search-text-input.component.scss']
})
export class SearchTextInputComponent implements OnInit, OnDestroy {

  @Output()
  textChanged = new EventEmitter<string>();

  private searchText$ = new Subject<string>();
  private subscription: Subscription;

  constructor() {
  }

  ngOnInit(): void {
    this.subscription = this.searchText$
      .pipe(
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe((text: string) => {
        this.textChanged.emit(text);
      });
  }

  searchKeyup(text: string) {
    this.searchText$.next(text);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
