import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ThemeOption } from '../../Models/ThemeOptions.model';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss'],
})
export class ThemeSwitcherComponent {
  @Input() options: Array<ThemeOption>;
  @Output() themeChange: EventEmitter<string> = new EventEmitter<string>();

  public isDarkMode: boolean = false;

  constructor(private themeService: ThemeService) {}

  changeTheme(): void {
    this.isDarkMode = this.themeService.toggleTheme();
  }
}
