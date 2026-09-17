import { Component, AfterViewInit, Inject, PLATFORM_ID, OnDestroy, signal } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { fromEvent, Subject, takeUntil } from 'rxjs';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TechStackComponent } from './components/tech-stack/tech-stack.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    NavbarComponent, 
    HeroComponent, 
    AboutComponent, 
    TimelineComponent, 
    ProjectsComponent, 
    TechStackComponent
  ],
  template: `
    <div class="min-h-screen relative overflow-hidden bg-transparent text-white">
      
      <!-- Scanline Overlay -->
      <div class="scanline-overlay"></div>

      <!-- Cyberpunk Top Scroll Progress HUD -->
      <div class="fixed top-0 left-0 right-0 h-1.5 bg-black/80 border-b border-neon-red/30 z-[60] pointer-events-none backdrop-blur-sm">
        <div 
          class="h-full bg-gradient-to-r from-neon-red via-cyber-yellow to-neon-cyan transition-all duration-75 relative shadow-[0_0_10px_rgba(252,238,10,0.7)]"
          [style.width.%]="scrollProgress()">
          <!-- Leading Laser Tip / Pulse Dot -->
          <div class="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-3 bg-white shadow-[0_0_10px_#00FFFF,0_0_18px_#FCEE0A] border-r border-cyber-yellow" *ngIf="scrollProgress() > 0"></div>
        </div>
      </div>

      <!-- Telemetry Scroll Percentage HUD (Top) -->
      <div class="fixed top-3 right-16 sm:right-20 z-50 pointer-events-none hidden sm:flex items-center gap-2 px-2.5 py-1 bg-black/85 border border-neon-cyan/40 text-[10px] font-tech text-neon-cyan shadow-[0_0_10px_rgba(0,255,255,0.2)] backdrop-blur-md">
        <span class="w-1.5 h-1.5 bg-neon-cyan animate-pulse"></span>
        <span class="text-white/60">NAV.POS:</span>
        <span class="text-cyber-yellow font-mono font-bold">{{ scrollProgress() }}%</span>
      </div>

      <!-- Floating Cyberpunk "Volver Arriba" Button -->
      <button 
        *ngIf="scrollProgress() > 15"
        (click)="scrollToTop()"
        aria-label="Volver arriba"
        class="fixed bottom-16 sm:bottom-12 right-4 sm:right-6 z-50 px-3 py-2 bg-black/90 border border-cyber-yellow text-cyber-yellow hover:bg-cyber-yellow hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(252,238,10,0.35)] hover:shadow-[0_0_25px_rgba(252,238,10,0.8)] cursor-pointer flex items-center gap-2 font-tech text-xs uppercase tracking-wider backdrop-blur-md group">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="square" stroke-linejoin="miter" class="group-hover:-translate-y-0.5 transition-transform"><polyline points="18 15 12 9 6 15"></polyline></svg>
        <span class="font-bold">▲ SUBIR</span>
      </button>

      <!-- Top Left HUD Decorative System Overlay -->
      <div class="fixed top-4 left-4 z-40 hidden md:flex items-center gap-3 pointer-events-none opacity-40 font-tech text-[10px] tracking-widest text-neon-cyan">
        <span class="inline-block w-2 h-2 bg-neon-cyan animate-pulse"></span>
        <span>SYS://ONLINE</span>
        <span class="text-neon-red">|</span>
        <span>BUILD v2.0</span>
        <span class="text-neon-red">|</span>
        <span>NODE_01</span>
      </div>

      <!-- Bottom Right HUD Decorative System Performance Overlay -->
      <div class="fixed bottom-4 right-4 z-40 hidden md:flex items-center gap-3 pointer-events-none opacity-40 font-tech text-[10px] tracking-widest text-cyber-yellow">
        <span>STATUS: ACTIVE</span>
        <span class="text-neon-red">|</span>
        <span>CPU 67%</span>
        <span class="text-neon-red">|</span>
        <span>RAM 45%</span>
        <span class="inline-block w-2 h-2 bg-cyber-yellow animate-ping"></span>
      </div>

      <!-- Social Links Top Right -->
      <div class="fixed top-4 right-4 z-50 flex flex-col items-end gap-3 pointer-events-none">
        <a href="http://www.linkedin.com/in/maximiliano-rodríguez-991430245" target="_blank" aria-label="LinkedIn" class="pointer-events-auto p-2.5 cyber-card !border-neon-cyan/50 text-neon-cyan hover:!border-cyber-yellow hover:text-cyber-yellow transition-colors flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="miter"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        </a>
        <a href="https://github.com/MaximilianoRdz" target="_blank" aria-label="GitHub" class="pointer-events-auto p-2.5 cyber-card !border-neon-cyan/50 text-neon-cyan hover:!border-cyber-yellow hover:text-cyber-yellow transition-colors flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="miter"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        </a>
      </div>
      
      <app-navbar></app-navbar>
      
      <main class="relative z-10">
        <app-hero></app-hero>
        <div class="reveal"><app-about></app-about></div>
        <div class="reveal"><app-timeline></app-timeline></div>
        <div class="reveal"><app-projects></app-projects></div>
        <div class="reveal"><app-tech-stack></app-tech-stack></div>
      </main>
      
      <footer class="py-16 pb-24 md:pb-16 px-4 border-t-2 border-neon-red/60 bg-black/90 relative z-10">
        <!-- Grid overlay en footer -->
        <div class="absolute inset-0 bg-[linear-gradient(rgba(255,0,60,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,60,0.05)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none"></div>
        
        <div class="max-w-5xl mx-auto text-center relative z-10">
          <h2 class="text-xl sm:text-3xl md:text-5xl font-bold mb-4 uppercase tracking-wider text-white">
            <span class="inline-block whitespace-nowrap">
              <span class="text-neon-red mr-1.5 sm:mr-2">[</span>Iniciar Conexión<span class="text-neon-red ml-1.5 sm:ml-2">]</span>
            </span>
          </h2>
          <p class="text-white/70 mb-10 max-w-xl mx-auto font-tech text-sm md:text-base leading-relaxed">
            >_ SISTEMA ABIERTO A NUEVAS OPORTUNIDADES Y COLABORACIONES PROFESIONALES. ESTABLEZCA CONTACTO DIRECTO.
          </p>
          
          <div class="flex justify-center">
            <a href="mailto:maxrdz117@gmail.com" class="cyber-btn px-8 py-4 text-lg flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="square" stroke-linejoin="miter"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12 13 2,6"></polyline></svg>
              <span class="glitch-wrapper">
                <span class="glitch" data-text="ESTABLECER_CONEXIÓN">ESTABLECER_CONEXIÓN</span>
              </span>
            </a>
          </div>

          <div class="mt-16 text-white/40 font-tech text-xs tracking-widest flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-6 gap-2">
            <span class="text-neon-cyan font-mono">SYS.HUD_v2.0 // FULLSTACK_ENG</span>
          </div>
        </div>
      </footer>
    </div>
  `
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  scrollProgress = signal(0);
  private destroy$ = new Subject<void>();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.actualizarProgresoScroll();

      fromEvent(window, 'scroll')
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => this.actualizarProgresoScroll());

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
            }
          });
        },
        { threshold: 0.1 }
      );

      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }
  }

  scrollToTop() {
    if (!isPlatformBrowser(this.platformId)) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  private actualizarProgresoScroll() {
    if (!isPlatformBrowser(this.platformId)) return;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    this.scrollProgress.set(Math.min(100, Math.max(0, Math.round(progress))));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
