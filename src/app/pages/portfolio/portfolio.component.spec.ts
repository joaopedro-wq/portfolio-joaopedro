import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    // O idioma inicial cai no navegador quando não há preferência salva;
    // fixamos em pt para o teste não depender do locale da máquina.
    localStorage.setItem('lang', 'pt');

    await TestBed.configureTestingModule({
      imports: [AppComponent, ToastrModule.forRoot()],
      providers: [provideNoopAnimations(), provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve alternar a aba de habilidades', () => {
    expect(component.selectedTab()).toBe('frontend');
    component.selectTab('backend');
    expect(component.selectedTab()).toBe('backend');
    expect(component.activeGroup().id).toBe('backend');
  });

  it('deve alternar o idioma e traduzir o conteúdo', () => {
    expect(component.lang()).toBe('pt');
    expect(component.c().nav[0].label).toBe('Início');

    component.toggleLang();

    expect(component.lang()).toBe('en');
    expect(component.c().nav[0].label).toBe('Home');
    expect(document.documentElement.lang).toBe('en');
  });

  it('deve abrir e fechar o modal de contato', () => {
    component.abrirModalContato();
    expect(component.showModalContato()).toBeTrue();
    component.fecharModalContato();
    expect(component.showModalContato()).toBeFalse();
  });
});
