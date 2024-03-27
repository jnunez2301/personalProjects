import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DropdownChangeEvent } from 'primeng/dropdown';
import { Clipboard } from '@angular/cdk/clipboard';
import { UrlSchema } from './_modelo/UrlSchema';
import { GlobalService } from './_service/global.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  public listaUrlSchemas$!: UrlSchema[];
  public currentUrlSchema$!: UrlSchema[];
  randomString: string = '';
  id: string = '';
  urlExists: boolean = false;
  private sub: any;
  code: string = 'function x() {\n console.log("Hello world!");\n}';

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
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.urlSchemaService.getUrlSchemas().subscribe((d) => {
      this.listaUrlSchemas$ = d;
    });
  
    this.sub = this.route.params.subscribe((params) => {
      this.id = params['id'];
      if (this.id && this.id.length > 0) {
        this.urlSchemaService.getUrlSchemaById(this.id).subscribe((d) => {
          if (d.length > 0) {
            this.urlExists = true;
            this.currentUrlSchema$ = d;
            console.log('true as fk');
          } else {
            if (!this.randomString) {
              this.generateRandomString();
            }
            this.checkIfStringExists();
          }
        });
      }
    });
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
  
    this.randomString = result;
  }
  
  checkIfStringExists(): void {
    const urlExists = this.listaUrlSchemas$
      .map((d) => d.generatedUrl)
      .includes(this.randomString);
    if (urlExists) {
      this.generateRandomString(); // Regenerate random string if it already exists
      this.checkIfStringExists(); // Check again recursively
    } else {
      // Proceed with the unique random string
      this.urlExists = false;
      console.log('fake as fk');
      this.router.navigate([`/${this.randomString}`]);
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
  saveCode() {
    this.messageService.add({
      severity: 'info',
      summary: 'Saved',
      detail: 'Your code has been updated',
    });
    console.log(this.urlExists);

    // if(this.urlExists) {
    //   // this.urlSchemaService.modificarUrlSchema({generatedUrl: this.id, code: this.code}).subscribe(d => console.log(d))
    //   console.log('modify');
    // } else{
    //   /* this.urlSchemaService.postUrlSchema({generatedUrl: this.id, code: this.code}); */
    //   console.log('save');
    //   console.log(this.urlExists);
    // }
  }

  editorOptions = {
    theme: `vs-${this.current_theme}`,
    language: this.current_language,
  };

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
