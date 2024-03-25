import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Observable } from 'rxjs';
import { Aritst } from '../../_models/Artist';
import { GlobalServiceService } from '../_service/global-service.service';
import { RouterModule } from '@angular/router';
import { ArrayType, Token } from '@angular/compiler';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  token$!: Observable<Token>;
  current_artists: Aritst[] = [];

  constructor(private globalService: GlobalServiceService) {}
  ngOnInit(): void {
    this.globalService.getToken().subscribe((d) => (this.token$ = d));
    this.globalService.getArtists(this.token$).subscribe(d => this.current_artists = d)    
  }
  
}
