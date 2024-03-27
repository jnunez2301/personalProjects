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
          this.urlExists = d.length > 0;          
          if (d.length > 0) {
            this.currentUrlSchema$ = d;
            this.randomString = d[0].generatedUrl;
            sessionStorage.setItem('id', d[0].generatedUrl)
            sessionStorage.setItem('code', d[0].code)
          } else {
            if (!this.randomString) {
              this.generateRandomString();
            }
            this.checkIfStringExists();
            sessionStorage.setItem('id', this.randomString)            
          }
        });
      }
      
    });   
    /* if(this.listaUrlSchemas$.map(d => d.generatedUrl).includes(this.id)){
        console.log(true);        
      } else {
        this.generateRandomString();
        this.router.navigate([`${this.randomString}`])
    } */
    
    this.id = sessionStorage.getItem('id') || '';
    

    const newCode = sessionStorage.getItem('code');
    if(newCode) {
      this.code = newCode;
    }
  }
  
  generateRandomString(): void {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const randomLength = Math.floor(Math.random() * (10 - 3 + 1)) + 3;
  
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
    const id = sessionStorage.getItem('id');
    if(id){
      console.log(id);
      this.urlSchemaService.getUrlSchemaById(id).subscribe(d => {
        if(d.length > 0){
          this.urlSchemaService.modificarUrlSchema({
            generatedUrl: id,
            code: this.code
          }).subscribe()
        } else {
          this.urlSchemaService.postUrlSchema({
            generatedUrl: id,
            code: this.code
          }).subscribe()
        }
        
      })
    }
    
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
