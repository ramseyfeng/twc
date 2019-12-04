import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import {Agent} from './agent/Agent';

@Injectable({
  providedIn: 'root'
})
export class AgentService {
  private agentUrl = 'api/agents';
  constructor(private http: HttpClient) { }

  getAgents(): Observable<Agent[]> {
    return this.http.get<Agent[]>(this.agentUrl).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }


  updateAgent(agent: Agent): Observable<Agent> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.agentUrl}/${agent.id}`;
    return this.http.put<Agent>(url, agent, { headers })
      .pipe(
        tap(() => console.log(`updateProduct: ${agent.id}`)),
        map(() => agent),
        catchError(this.handleError)
      );
  }

  deleteAgentResource(resource: string, agent: Agent): Observable<Agent> {
    const resources = agent.resources.filter(res => res !== resource);
    agent.resources = resources;
    return this.updateAgent(agent);
  }

  private handleError(err) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

  addResource(resourceStr: string, agent: Agent) {
    const resources = resourceStr.split(',').map(res => res.trim()).filter(res => res !== '');
    agent.resources = [...agent.resources, ...resources];
    return this.updateAgent(agent);
  }

}
