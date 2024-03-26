import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DropdownChangeEvent } from 'primeng/dropdown';
import { Clipboard } from '@angular/cdk/clipboard';
import { UrlSchema } from './_modelo/UrlSchema';
import { GlobalService } from './_service/global.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  public listaUrlSchemas$!: UrlSchema[];
  randomString: string = '';
  @Input() idParam: string = '';

  title = 'codeSharingApp';
  current_theme = 'dark';
  current_language = 'javascript';
  themes_options = [
    { name: 'Dark', code: 'dark' },
    { name: 'Light', code: 'light' },
  ];
  languageOptions = [
    { name: 'Python', code: 'python' },
    { name: 'JavaScript', code: 'javascript' },
    { name: 'HTML', code: 'html' },
    { name: 'CSS', code: 'css' },
    { name: 'Typescript', code: 'typescript' },
  ];

  constructor(
    private messageService: MessageService,
    private clipboard: Clipboard,
    private urlSchemaService: GlobalService,
  ) {
  }

  ngOnInit(): void {
    this.urlSchemaService
      .getUrlSchemas()
      .subscribe((d) => (this.listaUrlSchemas$ = d));
    this.generateRandomString();    
  }

  generateRandomString(): void {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const randomLength = Math.floor(Math.random() * (5 - 3 + 1)) + 3;

    for (let i = 0; i < randomLength; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    this.checkIfStringExists(result);
  }

  checkIfStringExists(str: string): void {
    const urlExists = this.listaUrlSchemas$
      .map((d) => d.generatedUrl)
      .includes(this.randomString);

    if(urlExists) {
        this.generateRandomString();
      } else {
        this.randomString = str;
      }
  }

  showSuccessShare() {
    this.messageService.add({
      severity: 'success',
      summary: 'URL copied',
      detail: 'Now you can share the code with anyone',
    });
    this.clipboard.copy(window.location.href);
  }

  showInfoCopy() {
    this.messageService.add({
      severity: 'info',
      summary: 'Copied to clipboard',
      detail: 'The code is on your clipboard now',
    });
    this.clipboard.copy(this.code);
  }

  editorOptions = {
    theme: `vs-${this.current_theme}`,
    language: this.current_language,
  };
  code: string = 'function x() {\n console.log("Hello world!");\n}';

  onThemeChange(e: DropdownChangeEvent) {
    this.current_theme = e.value.code;
    this.editorOptions = {
      ...this.editorOptions,
      theme: `vs-${this.current_theme}`,
    };
  }
  onLanguageChange(e: DropdownChangeEvent) {
    this.current_language = e.value.code;
    this.editorOptions = {
      ...this.editorOptions,
      language: this.current_language,
    };
  }
}
