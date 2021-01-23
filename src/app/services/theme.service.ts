import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ThemeOption } from '../Models/ThemeOptions.model';
import { StyleManagerService } from './style-manager.service';

@Injectable()
export class ThemeService {
  constructor(
    private http: HttpClient,
    private styleManager: StyleManagerService
  ) {}

  getThemeOptions(): Observable<Array<ThemeOption>> {
    return this.http.get<Array<ThemeOption>>('assets/themeOptions.json');
  }

  setTheme(themeToSet) {
    this.styleManager.setStyle(
      'theme',
      `assets/prebuilt-themes/${themeToSet}.css`
    );
  }
}
