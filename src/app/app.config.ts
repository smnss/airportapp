import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Configuration {
    public Server = 'https://jsonplaceholder.typicode.com/';
    public ApiUrl = '';
    public ServerWithApiUrl = this.Server + this.ApiUrl;
}
