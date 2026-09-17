import { Component, ChangeDetectionStrategy, signal, ElementRef, AfterViewInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="about" class="py-24 px-4 md:px-8 max-w-5xl mx-auto">
      <div class="flex items-center justify-center gap-3 sm:gap-4 mb-10 md:mb-12 text-center">
        <div class="h-px w-8 sm:w-16 bg-neon-red/60 hidden sm:block"></div>
        <h2 class="text-xl sm:text-3xl md:text-5xl font-bold uppercase tracking-wider text-white text-center">
          <span class="inline-block">Sobre</span>
          <span class="text-cyber-yellow inline-block whitespace-nowrap ml-1 sm:ml-2">[&nbsp;Mí&nbsp;]</span>
        </h2>
        <div class="h-px w-8 sm:w-16 bg-neon-red/60 hidden sm:block"></div>
      </div>

      <div class="flex flex-col gap-8">

        <!-- Biografía Principal -->
        <div class="cyber-card p-8 md:p-10 text-center space-y-6 text-white/90 leading-relaxed relative">
          <!-- Decoración HUD lateral -->
          <div class="absolute right-3 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-1.5 opacity-60">
            <div class="w-1.5 h-6 bg-neon-cyan"></div>
            <div class="w-1.5 h-3 bg-neon-red"></div>
            <div class="w-1.5 h-10 bg-cyber-yellow"></div>
          </div>
          
          <p class="text-xl md:text-3xl font-tech font-bold leading-normal">
            Soy <span class="text-cyber-yellow drop-shadow-[0_0_12px_rgba(252,238,10,0.5)]">Maximiliano Rodríguez</span>, Ingeniero en Tecnologías de la Información apasionado por crear soluciones digitales de alto impacto.
          </p>
          <p class="text-base md:text-xl font-tech text-white/80 max-w-3xl mx-auto leading-relaxed">
            Especializado en desarrollo <span class="text-neon-cyan font-bold uppercase">Full Stack</span>, me enfoco en integrar arquitecturas sólidas en el backend con interfaces de usuario intuitivas, rápidas y escalables.
          </p>
        </div>

        <!-- Cards de estadísticas con contadores animados -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
          
          <div class="cyber-card p-6 text-center hover:bg-black/60 transition-all cursor-default">
            <div class="text-5xl md:text-6xl font-bold text-cyber-yellow mb-2 font-mono drop-shadow-[0_0_12px_rgba(252,238,10,0.5)]">
              +<span>{{ expYears() }}</span>
            </div>
            <span class="text-xs md:text-sm text-neon-cyan font-tech uppercase tracking-widest block border-t border-neon-red/30 pt-3 mt-1">
              Años de Experiencia
            </span>
          </div>

          <div class="cyber-card p-6 text-center hover:bg-black/60 transition-all cursor-default">
            <div class="text-5xl md:text-6xl font-bold text-neon-cyan mb-2 font-mono drop-shadow-[0_0_12px_rgba(0,255,255,0.5)]">
              <span>{{ projectCount() }}</span>
            </div>
            <span class="text-xs md:text-sm text-cyber-yellow font-tech uppercase tracking-widest block border-t border-neon-red/30 pt-3 mt-1">
              Proyectos Realizados
            </span>
          </div>

          <div class="cyber-card p-6 text-center hover:bg-black/60 transition-all cursor-default">
            <div class="text-5xl md:text-6xl font-bold text-neon-red mb-2 font-mono drop-shadow-[0_0_12px_rgba(255,0,60,0.5)]">
              <span>{{ cleanCodeRate() }}</span>%
            </div>
            <span class="text-xs md:text-sm text-white/80 font-tech uppercase tracking-widest block border-t border-neon-red/30 pt-3 mt-1">
              Código Optimizado
            </span>
          </div>

        </div>

      </div>
    </section>
  `
})
export class AboutComponent implements AfterViewInit, OnDestroy {
  expYears = signal(0);
  projectCount = signal(0);
  cleanCodeRate = signal(0);

  private observer?: IntersectionObserver;

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              this.iniciarContadores();
              this.observer?.disconnect();
            }
          });
        },
        { threshold: 0.3 }
      );

      this.observer.observe(this.el.nativeElement);
    }
  }

  private iniciarContadores() {
    this.animarNumero(0, 2, 800, (v) => this.expYears.set(v));
    this.animarNumero(0, 0, 1200, (v) => this.projectCount.set(v));
    this.animarNumero(0, 100, 1500, (v) => this.cleanCodeRate.set(v));
  }

  private animarNumero(start: number, end: number, duration: number, callback: (v: number) => void) {
    const startTime = performance.now();
    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      callback(value);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
