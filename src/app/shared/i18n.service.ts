import { DOCUMENT, Injectable, computed, inject, signal } from '@angular/core';
import { Lang, SiteContent } from './content.model';
import { CONTENT_PT } from './content.pt';
import { CONTENT_EN } from './content.en';

const DICT: Record<Lang, SiteContent> = {
  pt: CONTENT_PT,
  en: CONTENT_EN,
};

const STORAGE_KEY = 'lang';

@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly document = inject(DOCUMENT);

  readonly lang = signal<Lang>(this.idiomaInicial());

  /** Conteúdo do idioma atual — o template lê tudo daqui. */
  readonly content = computed<SiteContent>(() => DICT[this.lang()]);

  constructor() {
    this.aplicarNoDocumento(this.lang());
  }

  toggle() {
    this.setLang(this.lang() === 'pt' ? 'en' : 'pt');
  }

  setLang(lang: Lang) {
    this.lang.set(lang);
    this.aplicarNoDocumento(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* modo privado: segue sem persistir */
    }
  }

  /** Preferência salva > idioma do navegador > português. */
  private idiomaInicial(): Lang {
    try {
      const salvo = localStorage.getItem(STORAGE_KEY);
      if (salvo === 'pt' || salvo === 'en') {
        return salvo;
      }
    } catch {
      /* ignora */
    }

    const navegador = this.document.defaultView?.navigator?.language ?? 'pt';
    return navegador.toLowerCase().startsWith('pt') ? 'pt' : 'en';
  }

  /** Mantém o `lang` do HTML correto — importa para SEO e leitores de tela. */
  private aplicarNoDocumento(lang: Lang) {
    this.document.documentElement.setAttribute('lang', lang === 'pt' ? 'pt-BR' : 'en');
  }
}
