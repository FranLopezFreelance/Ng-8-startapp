import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export const API_URL = environment.API_URL;

export const HTTP_OPTIONS = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
};
