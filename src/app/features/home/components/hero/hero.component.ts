import { Component, ChangeDetectionStrategy, signal, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="home" class="min-height-screen flex flex-col justify-center items-center px-4 md:px-8 text-center relative py-12 md:py-20">
      
      <!-- Boot Sequence Indicator -->
      <div class="space-y-5 md:space-y-6 max-w-4xl w-full mx-auto relative z-10">
        
        <!-- HUD decorative side lines -->
        <div class="absolute -left-6 md:-left-12 top-0 h-full w-px bg-gradient-to-b from-transparent via-neon-cyan/30 to-transparent hidden md:block"></div>
        <div class="absolute -right-6 md:-right-12 top-0 h-full w-px bg-gradient-to-b from-transparent via-neon-cyan/30 to-transparent hidden md:block"></div>

        <!-- System Status Banner -->
        <div class="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 border border-neon-red/60 bg-black/80 text-neon-red font-tech text-[10px] sm:text-xs md:text-sm uppercase tracking-widest relative backdrop-blur-md shadow-[0_0_15px_rgba(255,0,60,0.15)]">
          <span class="w-1.5 h-1.5 md:w-2 md:h-2 bg-neon-red animate-ping rounded-full"></span>
          <span class="text-white/60">[ SYS.BOOT:</span>
          <span class="text-cyber-yellow font-mono">{{ bootStatus() }}</span>
          <span class="text-white/60">]</span>
        </div>
        
        <!-- Main Title with Cyberpunk Glitch Reveal -->
        <h1 class="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter uppercase leading-none py-2">
          <span class="block text-white/90 text-xl sm:text-4xl md:text-5xl font-mono mb-2 sm:mb-3 tracking-normal text-white/80">Hola, soy</span>
          <div class="glitch-wrapper glitch-loop mt-1 sm:mt-2 max-w-full overflow-hidden">
            <div class="glitch text-cyber-yellow italic tracking-tighter drop-shadow-[0_0_25px_rgba(252,238,10,0.5)]" data-text="MAXIMILIANO">MAXIMILIANO</div>
            <br class="hidden sm:inline" />
            <div class="glitch text-cyber-yellow italic tracking-tighter drop-shadow-[0_0_25px_rgba(252,238,10,0.5)] mt-1 sm:mt-0" data-text="RODRÍGUEZ">RODRÍGUEZ</div>
          </div>
        </h1>
        
        <!-- Subtitle & Role -->
        <p class="text-base sm:text-xl md:text-2xl text-white/80 font-tech max-w-2xl mx-auto leading-relaxed px-2">
          <span class="text-neon-cyan font-mono font-bold">>_</span> Desarrollador FullStack especializado en aplicaciones web modernas, escalables y eficientes.
        </p>
        
        <!-- CTAs -->
        <div class="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-6 pt-4 sm:pt-6 px-2">
          <a href="#projects" (click)="scrollTo($event, 'projects')" class="cyber-btn px-6 sm:px-8 py-3.5 text-base sm:text-xl flex items-center justify-center gap-3 w-full sm:w-auto">
            <span class="glitch-wrapper">
              <span class="glitch" data-text="VER PROYECTOS">VER PROYECTOS</span>
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="square" stroke-linejoin="miter"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>

          <a href="CV_Maximiliano_Rodriguez.pdf" target="_blank" download="CV_Maximiliano_Rodriguez.pdf" class="px-6 sm:px-8 py-3.5 text-base sm:text-xl font-tech font-bold uppercase tracking-wider text-neon-cyan border border-neon-cyan/60 bg-black/60 hover:bg-neon-cyan/10 hover:border-cyber-yellow hover:text-cyber-yellow transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto">
            <span class="glitch-wrapper">
              <span class="glitch" data-text="DESCARGAR CV">DESCARGAR CV</span>
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="square" stroke-linejoin="miter"><path d="M21 15v4H3v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .min-height-screen { min-height: 90vh; }
  `]
})
export class HeroComponent implements OnInit {
  bootStatus = signal('INITIALIZING...');

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.bootStatus.set('CORE_ONLINE_v2.0');
      }, 1200);
    }
  }

  scrollTo(event: Event, id: string) {
    event.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
