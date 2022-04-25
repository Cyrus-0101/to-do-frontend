import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { EventEmitterService } from './event-emitter.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    
  constructor(private httpClient: HttpClient) { }
	
	private url = environment.baseUrl;

	public getTasks(requestObject: any) {
		return this.httpClient.get<any>(
			this.url + requestObject.location,
		);
	}

	public getTask(requestObject: any) {
		return this.httpClient.get<any>(
			this.url + requestObject.location,
		);
	}
	
	public postTasks(requestObject: any) {
		return this.httpClient.post<any>(this.url + requestObject.location, requestObject.data);
	}

	public getCategories(requestObject: any) {
		return this.httpClient.get<any>(
			this.url + requestObject.location,
		);
	}

	public getCategory(requestObject: any) {
		return this.httpClient.get<any>(
			this.url + requestObject.location,
		);
	}
}