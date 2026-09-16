import { Component, signal, HostListener, Inject, PLATFORM_ID, AfterViewInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { debounceTime, fromEvent, takeUntil } from 'rxjs';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- Mobile Bottom HUD Navigation Bar (< md) -->
    <nav class="flex md:hidden fixed bottom-3 left-2 right-2 z-50 bg-black/95 border border-neon-red/60 backdrop-blur-lg px-1.5 py-1.5 items-center justify-around shadow-[0_0_20px_rgba(255,0,60,0.35)]">
      <a *ngFor="let item of navItems" 
         [href]="'#' + item.id" 
         (click)="scrollTo($event, item.id)"
         class="font-tech text-[10px] font-bold uppercase tracking-wider px-2 py-1.5 transition-all duration-300 relative border"
         [class.border-neon-red]="activeSection() === item.id"
         [class.border-transparent]="activeSection() !== item.id"
         [class.bg-neon-red]="activeSection() === item.id"
         [class.text-black]="activeSection() === item.id"
         [class.text-white/70]="activeSection() !== item.id">
        <span *ngIf="activeSection() === item.id" class="text-black font-bold mr-0.5">></span>
        {{ item.mobileLabel || item.label }}
      </a>
    </nav>

    <!-- Desktop Left HUD Navigation Menu (>= md) -->
    <nav class="hidden md:flex fixed left-0 top-1/2 -translate-y-1/2 z-50 flex-col gap-2.5 p-3 md:p-5 pointer-events-none w-48 sm:w-56 md:w-60">
      <a *ngFor="let item of navItems; let i = index" 
         [href]="'#' + item.id" 
         (click)="scrollTo($event, item.id)"
         class="pointer-events-auto block w-full border transition-all duration-300 relative group overflow-hidden transform backdrop-blur-md focus:outline-none focus:ring-1 focus:ring-cyber-yellow"
         [class.translate-x-4]="activeSection() === item.id"
         [class.translate-x-0]="activeSection() !== item.id"
         [class.border-neon-red]="activeSection() === item.id"
         [class.border-neon-red/40]="activeSection() !== item.id"
         [class.bg-neon-red]="activeSection() === item.id"
         [class.bg-black/80]="activeSection() !== item.id"
         [class.text-black]="activeSection() === item.id"
         [class.text-neon-red]="activeSection() !== item.id"
         [class.shadow-[0_0_15px_rgba(255,0,60,0.4)]]="activeSection() === item.id">
         
        <!-- HUD Background Grid Pattern -->
        <div class="absolute inset-0 bg-[linear-gradient(rgba(255,0,60,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,60,0.12)_1px,transparent_1px)] bg-[size:8px_8px]" *ngIf="activeSection() !== item.id"></div>
        
        <div class="p-2.5 sm:p-3 relative z-10 flex flex-col">
           <!-- Top HUD Indicator Bar -->
           <div class="flex justify-between items-center mb-0.5">
             <div class="w-1.5 h-1.5 bg-neon-red" [class.bg-black]="activeSection() === item.id"></div>
             <div class="text-[8px] uppercase tracking-widest font-tech font-bold" [class.text-black]="activeSection() === item.id" [class.text-white/60]="activeSection() !== item.id">
               NODE_0{{i + 1}}
             </div>
           </div>
           
           <div class="font-bold text-xs sm:text-sm uppercase tracking-wider font-tech pt-0.5 pb-0.5 group-hover:text-cyber-yellow transition-colors" [class.text-black]="activeSection() === item.id">
             <span *ngIf="activeSection() === item.id" class="text-black font-bold mr-1">></span>
             {{ item.label }}
           </div>
           
           <div class="w-full h-px bg-neon-red/40 my-0.5" [class.bg-black/30]="activeSection() === item.id"></div>
           
           <div class="text-[9px] font-tech tracking-[0.1em] opacity-80" [class.text-black]="activeSection() === item.id">
             [ {{ item.id | uppercase }} ]
           </div>
        </div>
      </a>
    </nav>
  `
})
export class NavbarComponent implements AfterViewInit, OnDestroy {
  navItems = [
    { id: 'home',       label: 'Inicio',      mobileLabel: 'Inicio' },
    { id: 'about',      label: 'Sobre mí',    mobileLabel: 'Sobre mí' },
    { id: 'experience', label: 'Experiencia', mobileLabel: 'Exp.' },
    { id: 'projects',   label: 'Proyectos',   mobileLabel: 'Proyectos' },
    { id: 'tech',       label: 'Habilidades', mobileLabel: 'Skills' }
  ];

  activeSection = signal('home');

  // Altura del navbar + margen para que la sección se active un poco antes de llegar al borde
  private readonly OFFSET = 50;
  private destroy$ = new Subject<void>();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.actualizarSeccionActiva();
      fromEvent(window, 'scroll')
        .pipe(
          debounceTime(50),
          takeUntil(this.destroy$)
        )
        .subscribe(() => this.actualizarSeccionActiva());
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private actualizarSeccionActiva() {
    if (!isPlatformBrowser(this.platformId)) return;

    // getBoundingClientRect().top + scrollY da la posición ABSOLUTA en el documento,
    // a diferencia de offsetTop que es relativa al padre y falla con componentes anidados.
    const scrollActual = window.scrollY + this.OFFSET;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    let seccionActual = this.navItems[0].id;

    // Si estamos al final de la página, activar la última sección
    if (scrollActual + windowHeight >= documentHeight - 50) {
      seccionActual = this.navItems[this.navItems.length - 1].id;
    } else {
      for (const item of this.navItems) {
        const elemento = document.getElementById(item.id);
        if (elemento) {
          const posicionAbsoluta = elemento.getBoundingClientRect().top + window.scrollY;
          if (posicionAbsoluta <= scrollActual) {
            seccionActual = item.id;
          }
        }
      }
    }

    this.activeSection.set(seccionActual);
  }

  scrollTo(event: Event, id: string) {
    event.preventDefault();

    // Marcar inmediatamente al hacer clic, sin esperar el evento scroll
    this.activeSection.set(id);

    const elemento = document.getElementById(id);
    if (elemento) {
      const posicion = elemento.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: posicion, behavior: 'smooth' });
    }
  }
}
