import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DropdownChangeEvent } from 'primeng/dropdown';
import {Clipboard} from '@angular/cdk/clipboard';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
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

  constructor(private messageService: MessageService, private clipboard: Clipboard) {}

  showSuccessShare() {
    this.messageService.add({
      severity: 'success',
      summary: 'URL copied',
      detail: 'Now you can share the code with anyone',
    });
    this.clipboard.copy(window.location.href)
  }

  showInfoCopy() {
    this.messageService.add({
      severity: 'info',
      summary: 'Copied to clipboard',
      detail: 'The code is on your clipboard now',
    });
    this.clipboard.copy(this.code)
  }

  editorOptions = {
    theme: `vs-${this.current_theme}`,
    language: this.current_language,
  };
  code: string = 'function x() {\nconsole.log("Hello world!");\n}';

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
