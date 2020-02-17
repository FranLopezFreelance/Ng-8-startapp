import { Component, OnInit, Input } from '@angular/core';
import { Client } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.sass']
})
export class ClientComponent implements OnInit {

  @Input()
    client: Client;

  constructor() { }

  ngOnInit() {
  }

}
