import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
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
            
            <div [ngSwitch]="tech.name" class="flex items-center justify-center h-11 w-11 transition-all duration-300 group-hover:scale-110">
              <!-- JavaScript -->
              <svg *ngSwitchCase="'JavaScript'" viewBox="0 0 32 32" class="w-9 h-9" fill="none">
                <path fill="#F7DF1E" d="M0 0h32v32H0z"/>
                <path d="M8.414 26.719l2.449-1.482c.473.838.902 1.546 1.933 1.546.988 0 1.611-.387 1.611-1.89v-10.225h3.007v10.267c0 3.115-1.826 4.532-4.49 4.532-2.406 0-3.802-1.246-4.51-2.748zm13.812-3.071l2.449-1.418c.773 1.246 1.804 2.092 3.179 2.092 1.289 0 2.105-.644 2.105-1.589 0-1.117-.881-1.504-2.384-2.148l-.816-.344c-2.341-.988-3.888-2.234-3.888-4.876 0-2.427 1.869-4.274 4.79-4.274 2.062 0 3.544.795 4.468 2.427l-2.32 1.482c-.516-.924-1.203-1.289-2.148-1.289-.988 0-1.611.602-1.611 1.375 0 .988.666 1.353 2.041 1.954l.816.344c2.771 1.181 4.274 2.384 4.274 5.091 0 2.921-2.298 4.446-5.155 4.446-2.878 0-4.683-1.439-5.59-3.275z" fill="#000"/>
              </svg>

              <!-- TypeScript -->
              <svg *ngSwitchCase="'TypeScript'" viewBox="0 0 32 32" class="w-9 h-9" fill="none">
                <path fill="#3178C6" d="M0 0h32v32H0z"/>
                <path fill="#FFF" d="M18.846 21.616l2.305-1.385c.445.785.849 1.449 1.819 1.449.929 0 1.515-.362 1.515-1.771v-9.624h2.829v9.624c0 2.92-1.717 4.249-4.223 4.249-2.261 0-3.572-1.168-4.245-2.542zm-11.359-.518v-8.661h-3.525V10.31h9.879v2.127H10.316v8.661z"/>
              </svg>

              <!-- Angular -->
              <svg *ngSwitchCase="'Angular'" viewBox="0 0 250 250" class="w-9 h-9">
                <polygon fill="#DD0031" points="125,30 125,30 125,30 31.9,63.2 46.1,186.3 125,230 125,230 125,230 203.9,186.3 218.1,63.2"/>
                <polygon fill="#C3002F" points="125,30 125,52.2 125,52.1 125,153.4 125,153.4 125,230 125,230 203.9,186.3 218.1,63.2 125,30"/>
                <path fill="#FFFFFF" d="M125,52.1L66.8,182.6H90l11.7-29.2h46.6l11.7,29.2h23.2L125,52.1z M140.9,134.4h-31.8l15.9-39.6L140.9,134.4z"/>
              </svg>

              <!-- Node.js -->
              <svg *ngSwitchCase="'Node.js'" viewBox="0 0 256 288" class="w-9 h-9">
                <path fill="#83CD29" d="M128 0L8.7 68.8v150.4L128 288l119.3-68.8V68.8L128 0zm-15.6 220.4c-35.3 0-42.9-20.9-42.9-42.9h23.5c0 14.8 4.7 21.6 20.3 21.6 12.3 0 19.5-6.8 19.5-16.7 0-11-7-14.7-27.1-20.2-22.3-6.1-34.9-15.4-34.9-37.4 0-21.7 13.5-38.3 39.4-38.3 32.8 0 40.8 19.2 40.8 39.2h-23.4c0-12.8-4.2-18.7-18.5-18.7-11.2 0-16.7 5.5-16.7 14.8 0 9.7 6.3 13.5 25.8 19 23.3 6.5 36.2 14.8 36.2 38.3-.1 22.8-13.8 40.5-42.1 40.5z"/>
              </svg>

              <!-- Express -->
              <svg *ngSwitchCase="'Express'" viewBox="0 0 24 24" class="w-9 h-9 text-neon-cyan/70 group-hover:text-cyber-yellow" fill="currentColor">
                <path d="M23.996 11.248c-.01-1.373-.414-2.67-1.168-3.774a7.994 7.994 0 0 0-3.136-2.658 8.04 8.04 0 0 0-4.043-.804c-1.42.067-2.775.526-3.953 1.339a7.99 7.99 0 0 0-2.695 3.12 8.053 8.053 0 0 0-.79 4.025c.068 1.41.528 2.76 1.34 3.935a7.986 7.986 0 0 0 3.122 2.692 8.047 8.047 0 0 0 4.025.79c1.412-.068 2.762-.527 3.938-1.34a7.983 7.983 0 0 0 2.693-3.122 8.05 8.05 0 0 0 .788-4.023l-.02-.185zm-1.89.208a6.16 6.16 0 0 1-.606 3.09 6.104 6.104 0 0 1-2.062 2.39 6.13 6.13 0 0 1-3.08.973 6.16 6.16 0 0 1-3.093-.604 6.1 6.1 0 0 1-2.392-2.062 6.13 6.13 0 0 1-.973-3.08c-.053-1.08.232-2.148.814-3.06a6.115 6.115 0 0 1 2.228-2.186 6.138 6.138 0 0 1 3.076-.827c1.08-.052 2.15.233 3.063.816a6.107 6.107 0 0 1 2.184 2.23 6.14 6.14 0 0 1 .841 3.32zM8.34 8.16H6.18L4.35 12.4l-1.84-4.24H.36l2.9 6.1-2.9 6.1h2.15l1.84-4.24 1.83 4.24h2.16l-2.9-6.1z"/>
              </svg>

              <!-- Django -->
              <svg *ngSwitchCase="'Django'" viewBox="0 0 24 24" class="w-9 h-9 text-neon-cyan/70 group-hover:text-cyber-yellow" fill="currentColor">
                <path d="M11.146 0h3.337v17.43c-1.385.297-2.618.42-3.693.42-3.81 0-5.748-1.782-5.748-5.32 0-3.418 1.938-5.467 5.176-5.467 1.056 0 1.954.198 2.693.594V3.882c-.74-.297-1.73-.446-2.97-.446-4.992 0-8.293 3.168-8.293 8.685 0 5.64 3.048 8.61 8.217 8.61 1.637 0 3.238-.297 4.79-.89V24H20V0h-8.854v0z"/>
              </svg>

              <!-- Django REST Framework -->
              <svg *ngSwitchCase="'Django REST Framework'" viewBox="0 0 100 100" class="w-11 h-11 text-neon-cyan/70 group-hover:text-cyber-yellow transition-all duration-300">
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

              <!-- PostgreSQL -->
              <svg *ngSwitchCase="'PostgreSQL'" viewBox="0 0 256 264" class="w-9 h-9" fill="none">
                <path fill="#336791" d="M127.6 0C57.1 0 0 57.1 0 127.6c0 48.7 27.2 91 67.2 112.5.6-5.8 1.5-12.8 1.9-18.4.5-8.4.8-19.4 1.2-30.8 1-31.5 2.1-70.1 2.4-83.3.4-19 8.7-27.7 21.8-27.7 13.9 0 21.8 9.5 21.8 28.5 0 8.2-.4 18.2-.8 29.8-.7 21.8-1.7 51.5-2.2 73.1-.3 11-.4 20.3-.6 26.6 5.1 1.1 10.3 1.9 15.6 2.3-.2-8.5-.3-19.7-.5-33.1-.4-24.3-.8-55.6-.8-77.9 0-21.7 9.8-31.3 24.3-31.3 14.3 0 23.3 9.7 23.3 29.9 0 10.5-.5 23.6-1 39-.8 24.8-1.8 56.4-1.8 77.9 0 4.2 0 7.8.1 11 39.5-21.5 66.4-63.5 66.4-111.9C255.2 57.1 198.1 0 127.6 0z"/>
              </svg>
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
export class TechStackComponent {
  techs = signal(TECH_STACK);
}
