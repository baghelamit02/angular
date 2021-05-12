import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { IAppConfiguration } from "./IAppConfig";
@Injectable()
export class AppConfiguration {
    constructor(private httpClient:HttpClient){}
    static settings: IAppConfiguration;
    load():Promise<void> {
        const jsonFile=`/assets/config/${environment.name}.config.json`;
        return new Promise<void>((resolve,reject)=>{
            this.httpClient.get(jsonFile).toPromise().then((response:any)=>{
                AppConfiguration.settings=response as IAppConfiguration;
                resolve();
            }).catch((response:any)=>{
                reject('Could no load file');
            });
        });
    }
}