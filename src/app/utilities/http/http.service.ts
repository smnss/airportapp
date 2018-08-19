import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  HttpClient,
  HttpParams,
  HttpResponse } from '@angular/common/http';
import { Configuration } from '../../app.config';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private httpClient: HttpClient,
    private config: Configuration
  ) {}

  public create(endpointUrl: string, body: any): Observable<any> {
    return this.httpPost(endpointUrl, body);
  }

  public update(url, body): Observable<any> {
    return this.httpPut(url, body);
  }

  public read(urlEndPoint: string, queryOptions?: HttpParams): Observable<any> {
   return this.httpGet(urlEndPoint, queryOptions);
  }

  public delete(endpointUrl: string) {
    return this.httpDelete(endpointUrl);
  }

  private httpGet(endpointUrl: string, params?: HttpParams): Observable<HttpResponse<any>> {
    console.log(this.getApiUrl(endpointUrl));
    return this.httpClient.get<any[]>(this.getApiUrl(endpointUrl), {observe: 'response' });
  }

  private httpPost(endpointUrl: string, body: any): Observable<HttpResponse<any>> {
    return this.httpClient.post<any>(this.getApiUrl(endpointUrl), body, { observe: 'response' });
  }

  private httpPut(endpointUrl: string, body: any): Observable<HttpResponse<any>> {
    return this.httpClient.put<any>(this.getApiUrl(endpointUrl), body, { observe: 'response' });
  }

  private httpDelete(endpointUrl: string, id?: string): Observable<HttpResponse<any>> {
    return this.httpClient.delete<any>(this.getApiUrl(endpointUrl), { observe: 'response' });
  }

  private getApiUrl(endpointUrl) {
    return this.config.ServerWithApiUrl + endpointUrl;
  }

}
