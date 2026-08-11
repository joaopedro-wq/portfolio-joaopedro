import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, ToastrModule.forRoot()],
      providers: [provideNoopAnimations()],
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
    expect(component.activeGroup.label).toBe('Backend');
  });

  it('deve abrir e fechar o modal de contato', () => {
    component.abrirModalContato();
    expect(component.showModalContato()).toBeTrue();
    component.fecharModalContato();
    expect(component.showModalContato()).toBeFalse();
  });
});
