import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HomeComponent } from './features/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent],
  template: `<app-home></app-home>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {}
