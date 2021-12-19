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
  // fotoServiceEndpoint = '/api/getPic';
  // fotoServiceEndpoint = 'http://localhost:3080/api/getPic';
  fotoServiceEndpoint = 'http://localhost:8080/api/getFoto';
  // fotoServiceEndpoint = 'api/getPic';

  constructor(private http: HttpClient) {
    console.log('in the construcyor');
    this.fotoURL.next('');
  }

  /*
  // create the bucket, with the appropriate access keys
  private getS3Bucket(): any {
    const bucket = new S3({
      accessKeyId: 'AKIAXVAJGDD6R7XV2M5U',
      secretAccessKey: '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',
      region: 'ap-southeast-2'
    });

    return bucket;
  }
   */

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

  getPicxxx() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers };
    console.log('x x x x x x x x x x');
    console.log('x x x x x x x x x x');
    console.log('x x x x x x x x x x');
    console.log('x x x x x x x x x x');

    this.http
      .post<any>(this.fotoServiceEndpoint, {
        title: 'Angular POST Request Example'
      })
      .subscribe((data) => {
        console.log(data.url);
        return data;
      });

    /*
    return this.http.post(this.fotoServiceEndpoint, options).pipe(
      // return this.http.post(this.fotoServiceEndpoint, options).pipe(
      map((response: any) => {
        console.log('x x x x x x x x x x');
        console.log('In the foto.service.ts getPic');
        console.log(response);
        return response;
      }),
      catchError((err) => {
        console.log('y y y y y y y y y y y y y y y y');
        console.log(err);
        return of([]);
      })
    );
    */
  }
}
