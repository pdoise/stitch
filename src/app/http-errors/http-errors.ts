import {XHRBackend, Request, XHRConnection, Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

export class HttpErrors extends XHRBackend {

  createConnection(request: Request): XHRConnection {
    let connection: XHRConnection = super.createConnection(request);
    // Before returning the connection we try to catch all possible errors(4XX,5XX and so on)
    connection.response = connection.response.catch(this.processResponse);
    return connection;
  }
 
  processResponse(response:Response){
    switch (response.status) {
      case 401:
        return Observable.throw('401 error');
      case 403:
        return Observable.throw('403 error');
      case 404:
        return Observable.throw('404 error');
    }
  }
 
}