import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss'],
})
export class SideNavigationComponent implements OnInit {
  @Output() sideNavClose = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  public onSidenavClose(): void {
    this.sideNavClose.emit();
  }
}
