import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FotoService {
  private fotoURL = new Subject<string>();

  // Dev Endpoint - springboot server
  // fotoServiceEndpoint = 'http://localhost:8080/api/getFoto';

  // Dev Endpoint - internal node server
  // fotoServiceEndpoint = 'http://localhost:3080/api/getFoto';

  // Production service endpoint
  fotoServiceEndpoint =
    'http://ec2-3-25-2-216.ap-southeast-2.compute.amazonaws.com:8080/api/getFoto';

  constructor(private http: HttpClient) {
    console.log('in the construcyor');
    this.fotoURL.next('');
  }

  setFotoURL(fotoURL: string) {
    this.fotoURL.next(fotoURL);
  }

  getFotoURL(): Observable<string> {
    return this.fotoURL.asObservable();
  }

  /**
   * Calls the get a picture service
   * @returns
   */
  getPic() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers };
    return this.http.post(this.fotoServiceEndpoint, {}, options).pipe(
      // return this.http.get(this.fotoServiceEndpoint).pipe(
      map((response: Object) => response),
      catchError((err) => {
        console.log(err);
        return of([]);
      })
    );
  }
}
