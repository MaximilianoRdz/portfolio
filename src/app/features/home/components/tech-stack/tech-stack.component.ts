import { Component, signal, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TECH_STACK } from '../../../../shared/data/tech-stack';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="tech" class="py-24 px-4 border-t border-neon-cyan/20 bg-black/50 relative">
      <!-- Decoración de fondo HUD -->
      <div class="absolute top-0 left-10 w-px h-full bg-neon-cyan/10"></div>
      
      <div class="max-w-6xl mx-auto relative">
        
        <div class="flex items-center justify-center gap-3 sm:gap-4 mb-10 md:mb-16 text-center">
          <div class="h-px w-8 sm:w-16 bg-neon-cyan/60 hidden sm:block"></div>
          <h2 class="text-xl sm:text-3xl md:text-5xl font-bold uppercase tracking-wider text-white text-center">
            <span class="inline-block">Escaneo:</span>
            <span class="text-neon-cyan drop-shadow-[0_0_10px_rgba(0,255,255,0.4)] inline-block whitespace-nowrap ml-1 sm:ml-2">[&nbsp;HABILIDADES&nbsp;]</span>
          </h2>
          <div class="h-px w-8 sm:w-16 bg-neon-cyan/60 hidden sm:block"></div>
        </div>
        
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div *ngFor="let tech of techs()" 
               class="cyber-card flex flex-col items-center justify-center p-6 cursor-crosshair group hover:border-cyber-yellow transition-colors duration-300">
            
            <!-- Crosshair pequeño en la esquina -->
            <div class="absolute top-1 right-1 w-2 h-2 border-t border-r border-neon-cyan opacity-30"></div>
            
            <div class="flex items-center justify-center h-12 w-12 transition-all duration-300 group-hover:scale-110">
              <ng-container *ngIf="tech.id === 'drf'; else iconifyTpl">
                <!-- Official Django REST Framework Vector Logo -->
                <svg viewBox="0 0 100 100" class="w-11 h-11 text-neon-cyan/70 group-hover:text-cyber-yellow transition-all duration-300">
                  <text x="2" y="20" font-family="'Rajdhani', sans-serif" font-size="16" font-weight="700" fill="currentColor">django</text>
                  <g stroke="#FF003C" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="group-hover:stroke-cyber-yellow transition-colors" fill="none">
                    <path d="M6,30 L6,66 M6,30 L22,30 C28,30 28,46 22,46 L6,46 M17,46 L27,66" />
                    <path d="M32,30 L32,66 M32,30 L48,30 M32,48 L44,48 M32,66 L48,66" />
                    <path d="M68,34 C68,30 52,28 52,40 C52,52 68,48 68,60 C68,72 52,68 52,62" />
                    <path d="M72,30 L94,30 M83,30 L83,66" />
                    <path d="M2,48 L96,48 M50,24 L50,72 M15,24 L85,72" stroke="rgba(255,255,255,0.25)" stroke-width="0.75" stroke-dasharray="2,2" />
                  </g>
                  <text x="26" y="86" font-family="'Rajdhani', sans-serif" font-size="14" font-weight="700" fill="currentColor">framework</text>
                </svg>
              </ng-container>
              <ng-template #iconifyTpl>
                <span [attr.data-icon]="tech.icon" class="iconify text-4xl text-neon-cyan/60 group-hover:text-cyber-yellow group-hover:drop-shadow-[0_0_12px_rgba(252,238,10,0.8)] transition-all duration-300"></span>
              </ng-template>
            </div>
            <span class="text-xs text-white/50 font-tech mt-3 uppercase tracking-widest group-hover:text-white transition-colors duration-300 text-center">{{ tech.name }}</span>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class TechStackComponent implements AfterViewInit {
  techs = signal(TECH_STACK);

  ngAfterViewInit(): void {
    if (typeof (window as any).Iconify !== 'undefined') {
      (window as any).Iconify.scan();
    }
  }
}
