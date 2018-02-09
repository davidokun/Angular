import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class ServerService {

  constructor(private http: Http) {}

  storeServers(servers: any[]) {

    const myHeaders = new Headers({
      'Content-Type' : 'application/json'
    });

    // return this.http.post('https://angular-http-module.firebaseio.com/data.json',
    //   servers,
    //   {headers: myHeaders});

    return this.http.put('https://angular-http-module.firebaseio.com/data.json',
      servers,
      {headers: myHeaders});
  }

  getServers() {
    return this.http.get('https://angular-http-module.firebaseio.com/data.json')
      .map(
        (response: Response) => {
          const data = response.json();
          for (const server of data) {
            server.name = 'FETCHED_' + server.name;
          }
          return data;
        }
      );
  }
}
