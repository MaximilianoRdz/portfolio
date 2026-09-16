import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROJECTS } from '../../../../shared/data/projects';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="projects" class="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div class="flex items-center gap-3 sm:gap-4 mb-12 md:mb-16 justify-center text-center">
        <div class="h-px w-8 sm:w-16 bg-neon-cyan/60"></div>
        <h2 class="text-2xl sm:text-3xl md:text-5xl font-bold uppercase tracking-wider text-white text-center">
          Base de Datos: <span class="text-neon-cyan drop-shadow-[0_0_10px_rgba(0,255,255,0.4)]">[ PROYECTOS ]</span>
        </h2>
        <div class="h-px w-8 sm:w-16 bg-neon-cyan/60"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div *ngFor="let project of projects()" 
             class="group cyber-card flex flex-col h-full relative border-neon-red/40 hover:border-cyber-yellow transition-all duration-300">
          
          <!-- Image Placeholder / Background Decor (HUD scanner style) -->
          <div class="h-44 bg-black/90 relative overflow-hidden border-b border-neon-red/30">
            <!-- Grid lines -->
            <div class="absolute inset-0 bg-[linear-gradient(rgba(255,0,60,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,60,0.1)_1px,transparent_1px)] bg-[size:16px_16px]"></div>
            
            <div class="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity">
               <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="miter" class="text-cyber-yellow group-hover:scale-110 transition-transform"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
            </div>
            
            <!-- Technical overlay -->
            <div class="absolute top-2 right-2 text-[10px] font-tech text-neon-cyan font-mono bg-black/70 px-2 py-0.5 border border-neon-cyan/30">
              ID: DB_PRJ-0{{ projects().indexOf(project) + 1 }}
            </div>
            
            <div class="absolute bottom-3 left-4">
               <div class="flex flex-wrap gap-1.5">
                 <span *ngFor="let s of project.stack.slice(0,3)" class="text-[9px] uppercase tracking-widest px-2 py-0.5 border border-neon-cyan/70 text-neon-cyan font-tech bg-black/80 font-bold">
                   {{ s }}
                 </span>
               </div>
            </div>
          </div>

          <div class="p-6 flex flex-col flex-grow relative">
            <!-- Corner Crosshairs -->
            <div class="absolute top-2 right-2 w-2.5 h-2.5 border-t-2 border-r-2 border-neon-cyan opacity-60"></div>
            
            <h3 class="text-2xl font-bold mb-2 uppercase tracking-wide group-hover:text-cyber-yellow transition-colors font-tech">{{ project.name }}</h3>
            <p class="text-white/80 text-sm mb-6 flex-grow leading-relaxed font-tech">
              > {{ project.description }}
            </p>
            
            <div class="flex flex-wrap gap-1.5 mb-6">
              <span *ngFor="let tag of project.stack" class="text-[10px] font-tech text-black font-bold bg-cyber-yellow px-2 py-0.5 uppercase tracking-wider">
                {{ tag }}
              </span>
            </div>

            <div class="flex items-center justify-between mt-auto pt-4 border-t border-neon-red/30 text-xs">
              <a [href]="project.demoUrl" target="_blank" class="flex items-center gap-1.5 font-bold text-cyber-yellow hover:text-white uppercase tracking-widest transition-colors font-tech">
                [ DEMO ] <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="miter"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
              <a [href]="project.codeUrl" target="_blank" class="flex items-center gap-1.5 font-bold text-neon-cyan hover:text-white uppercase tracking-widest transition-colors font-tech">
                [ CÓDIGO ] <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="miter"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ProjectsComponent {
  projects = signal(PROJECTS);
}
