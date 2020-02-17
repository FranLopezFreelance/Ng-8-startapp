import { API_URL } from './../../shared/utils/HTTP';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from 'src/app/shared/interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ClientsService {

  serviceUrl = API_URL + 'client';

  constructor(private http: HttpClient) {}

  getAllClients(): Observable<Client[]> {
    return this.http.get(this.serviceUrl)
    .pipe(
      map((res: any) => res.clients)
    );
  }
};
