import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from 'src/app/services/theme.service';
import { ThemeOption } from 'src/app/Models/ThemeOptions.model';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  options$: Observable<
    Array<ThemeOption>
  > = this.themeService.getThemeOptions();
  @Output() public sidenavToggle = new EventEmitter();

  constructor(private readonly themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.setTheme('deeppurple-amber');
  }

  themeChangeHandler(themeToSet) {
    this.themeService.setTheme(themeToSet);
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  };
}
