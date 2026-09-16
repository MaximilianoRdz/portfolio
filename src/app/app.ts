import { Component, signal } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { HomeComponent } from './features/home/home.component';

@Component({
  selector: 'app-root',
  imports: [LucideAngularModule, HomeComponent],
  template: `<app-home></app-home>`,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myportfolio');
}
