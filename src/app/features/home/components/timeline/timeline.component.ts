import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EXPERIENCES } from '../../../../shared/data/experience';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="experience" class="py-24 px-4">
      <div class="max-w-4xl mx-auto">
        
        <div class="flex items-center gap-3 sm:gap-4 mb-12 md:mb-16 justify-center text-center">
          <div class="h-px w-8 sm:w-16 bg-cyber-yellow"></div>
          <h2 class="text-2xl sm:text-3xl md:text-5xl font-bold uppercase tracking-wider text-white text-center">
            Trayectoria <span class="text-cyber-yellow drop-shadow-[0_0_10px_rgba(252,238,10,0.4)]">Profesional</span>
          </h2>
          <div class="h-px w-8 sm:w-16 bg-cyber-yellow"></div>
        </div>
        
        <div class="relative pl-6 sm:pl-8 md:pl-12">
          <!-- Vertical Line -->
          <div class="absolute left-0 top-0 bottom-0 w-1 bg-neon-red/30">
            <div class="w-full h-full bg-[linear-gradient(rgba(255,0,60,1)_0%,transparent_50%)] bg-[size:100%_200%] animate-pulse"></div>
          </div>
          
          <div *ngFor="let item of experiences(); let i = index" 
               class="mb-8 relative group">
            
            <!-- Timeline Tech Node -->
            <div class="absolute left-[-21.5px] sm:left-[-23.5px] md:left-[-35.5px] top-6 w-3 h-3 md:w-4 md:h-4 bg-cyber-yellow outline outline-2 outline-neon-red outline-offset-2 z-10"></div>
            <!-- Horizontal connector -->
            <div class="absolute left-[-18px] sm:left-[-20px] md:left-[-30px] top-[1.8rem] w-6 sm:w-8 h-px bg-neon-red z-0"></div>
            
            <!-- Experience Card -->
            <div class="cyber-card p-5 sm:p-6 ml-3 sm:ml-4 md:ml-6 group-hover:border-cyber-yellow transition-colors duration-300">
              
              <!-- Decorative corner -->
              <div class="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-neon-cyan opacity-20"></div>

              <!-- Header -->
              <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4 text-center sm:text-left">
                <div class="w-full">
                  <span class="text-neon-cyan text-xs sm:text-sm font-tech uppercase tracking-widest mb-2 block border-b border-neon-cyan/20 pb-1 inline-block">[ {{ item.period }} ]</span>
                  <h3 class="text-xl sm:text-2xl font-bold text-white uppercase tracking-wide group-hover:text-cyber-yellow transition-colors">{{ item.role }}</h3>
                  <p class="text-cyber-yellow font-tech mt-1">>_ {{ item.company }}</p>
                </div>
              </div>
              
              <!-- Description -->
              <ul class="text-white/70 text-sm space-y-3 mb-6 font-tech leading-relaxed">
                <li *ngFor="let desc of item.description" class="flex items-start gap-3">
                  <span class="text-neon-red mt-1">>></span>
                  <span>{{ desc }}</span>
                </li>
              </ul>
              
              <!-- Technologies -->
              <div *ngIf="item.technologies && item.technologies.length > 0" class="flex flex-wrap gap-2 pt-4 border-t border-neon-red/20">
                <span *ngFor="let tech of item.technologies" 
                      class="text-xs font-tech text-neon-cyan bg-black border border-neon-cyan/50 px-2 py-1 uppercase tracking-widest">
                  {{ tech }}
                </span>
              </div>
            </div>
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
export class TimelineComponent {
  experiences = signal(EXPERIENCES);
}
