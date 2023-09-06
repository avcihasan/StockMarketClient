import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpclientService {
  constructor(
    private httpClient: HttpClient,
    @Inject('baseUrl') private baseUrl: string
  ) {}

  private url(request: Partial<RequestParameters>): string {
    return `${request.baseUrl ? request.baseUrl : this.baseUrl}/${
      request.controller
    }${request.action ? `/${request.action}` : ''}`;
  }

  get<T>(request: Partial<RequestParameters>, id?: number): Observable<T> {
    let url: string = '';
    if (request.fullEndPoint) url = request.fullEndPoint;
    else
      url = `${this.url(request)}${id ? `/${id}` : ''}${
        request.queryString ? `?${request.queryString}` : ''
      }`;
    return this.httpClient.get<T>(url, {
      headers: request.headers,
      responseType: request.responseType as 'json',
    });
  }
  post<T>(
    request: Partial<RequestParameters>,
    body: Partial<T>
  ): Observable<T> {
    let url: string = '';
    if (request.fullEndPoint) url = request.fullEndPoint;
    else url = `${this.url(request)}`;
    url = `${this.url(request)}${
      request.queryString ? `?${request.queryString}` : ''
    }`;

    return this.httpClient.post<T>(url, body, {
      headers: request.headers,
      responseType: request.responseType as 'json',
    });
  }

  put<T>(request: Partial<RequestParameters>, body: Partial<T>): Observable<T> {
    let url: string = '';
    if (request.fullEndPoint) url = request.fullEndPoint;
    else url = `${this.url(request)}`;

    return this.httpClient.put<T>(url, body, {
      headers: request.headers,
      responseType: request.responseType as 'json',
    });
  }

  delete<T>(request: Partial<RequestParameters>, id: number): Observable<T> {
    let url: string = '';

    if (request.fullEndPoint) url = request.fullEndPoint;
    url = `${this.url(request)}${id ? `/${id}` : ''}${
      request.queryString ? `?${request.queryString}` : ''
    }`;
    debugger;
    return this.httpClient.delete<T>(url, {
      headers: request.headers,
      responseType: request.responseType as 'json',
    });
  }
}
export class RequestParameters {
  controller?: string;
  action?: string;
  headers?: HttpHeaders;
  baseUrl?: string;
  fullEndPoint?: string;
  queryString?: string;
  responseType?: string = 'json';
}
