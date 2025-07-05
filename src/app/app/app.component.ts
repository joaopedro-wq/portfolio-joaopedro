import { Component, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  trigger,
  style,
  transition,
  animate,
  state,
  query,
  stagger,
} from '@angular/animations';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastrService } from 'ngx-toastr';
interface Project {
  title: string;
  description: string;
  videoLink: string;
  githubLink: string;
  techIcons: string[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
  trigger('fadeInDown', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateY(-20px)' }),
      animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
    ])
  ]),
  trigger('fadeInUpStagger', [
    transition(':enter', [
      query('.stagger-item', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        stagger(100, [
          animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
        ])
      ])
    ])
  ])
]
})
export class AppComponent {
  @ViewChild('modalContato') modalContato!: TemplateRef<any>;
  constructor(private dialog: MatDialog, private toastr: ToastrService) {}

  projects: Project[] = [
    {
      title: 'Vitality PLUS',
      description:
        'Sistema de registro nutricional que calcula alimentos diários e gerencia metas de saúde.',
      videoLink: '/vitalityPlus.mp4',
      githubLink: 'https://github.com/joaopedro-wq/sakai-ng',
      techIcons: [
        'fab fa-angular', // Angular
        'fab fa-js', // TypeScript (genérico)
        'fab fa-php', // Laravel/PHP
        'fas fa-database', // PostgreSQL
      ],
    },
  ];
  techIconColorMap: { [key: string]: string } = {
    'fab fa-angular': '#dd0031cc', // Angular
    'fab fa-js': '#f7df1ecc', // JS/TS
    'fab fa-php': '#8892bfcc', // PHP
    'fas fa-database': '#336791cc', // PostgreSQL
  };

  techIconNameMap: { [key: string]: string } = {
    'fab fa-angular': 'Angular',
    'fab fa-js': 'TypeScript',
    'fab fa-php': 'PHP (Laravel)',
    'fas fa-database': 'PostgreSQL',
  };

  // Para habilidades interativas
  openedCategory: string | null = null;

  /**
   * Toggles the visibility of a skill category. If the specified category is
   * currently opened, it will be closed. Otherwise, it will be set as the
   * opened category.
   *
   * @param category - The category to toggle.
   */

  toggleCategory(category: string) {
    this.openedCategory = this.openedCategory === category ? null : category;
  }

  selectedTab: string = 'frontend';

  selectTab(tab: string) {
    this.selectedTab = tab;
  }

  showModalContato = false;

  abrirModalContato() {
    this.showModalContato = true;
  }

  fecharModalContato() {
    this.showModalContato = false;
  }
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
  copiarTexto(texto: string, event: Event) {
    event.stopPropagation();

    navigator.clipboard
      .writeText(texto)
      .then(() => {
        this.toastr.success('Copiado para a área de transferência!');
      })
      .catch(() => {
        this.toastr.error('Erro ao copiar!');
      });
  }
}
