import { Injectable } from '@angular/core';

@Injectable()
export class ThemeService {
  constructor() {}
  toggleTheme(): boolean {
    const bodyElement = document.body;
    const darkThemeClass = 'dark-theme';

    if (bodyElement) {
      const bodyInDarkTheme = bodyElement.classList.contains(darkThemeClass);
      const bodyClassList = bodyElement.classList;

      bodyInDarkTheme
        ? bodyClassList.remove(darkThemeClass)
        : bodyClassList.add(darkThemeClass);
      return !bodyInDarkTheme;
    }
  }
}
