import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string;
  numberOne:number;
  numberTwo:number;
  togglePokemon: boolean = true;
  imgUrl:string = 'https://fastly.picsum.photos/id/52/100/100.jpg?hmac=1vEphbr9zxzQibzvn5FdMdpH1I2duaH-SrhMXt5zq14'
  // Loads before anything
  constructor(){
    this.title = "john";
    this.numberOne = 1;
    this.numberTwo = 2;
  }
}
