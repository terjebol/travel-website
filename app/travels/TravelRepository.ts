import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from 'rxjs/Rx';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/share';


export class Travel {
    id:string;
    title:string;
    summaryfile:string;
    file:string;
    thumbnail:string;
    content:string;
}

@Injectable()
export class TravelRepository {
    travelFolder:string = "content/travels/";
    travelFileList:string = "content/travels/travels_list.json";

    travels:Observable<Travel[]>;
    private _travelsObserver:Observer<Travel[]>;

    travelDetails:Observable<Travel[]>;
    private _travelDetailsObserver:Observer<Travel[]>;

    private _dataStore:{
        travelsDetail: Travel[];
        travelsSummary: Travel[];
    };

    constructor(private _http:Http) {

        this.travels = new Observable<Travel[]>(observer =>
            this._travelsObserver = observer).share();

        this.travelDetails = new Observable<Travel[]>(observer =>
            this._travelDetailsObserver = observer).share();

        this._dataStore = {
            travelsDetail: [],
            travelsSummary: []
        };
    }

    loadTravelSummaries() {
        this._http.get(this.travelFileList)
            .map(response => response.json()).subscribe(data => {
            this._dataStore.travelsSummary = data;
            this.loadData(this._dataStore.travelsSummary, function (travel:Travel) {
                return travel.summaryfile
            });
            this._travelsObserver.next(this._dataStore.travelsSummary);
        }, error => console.log('Could not load todos.'));
    }

    loadTravelContent() {
        this._http.get(this.travelFileList)
            .map(response => response.json()).subscribe(data => {
            this._dataStore.travelsDetail = data;
            this.loadData(this._dataStore.travelsDetail, function (travel:Travel) {
                return travel.file
            });
            this._travelDetailsObserver.next(this._dataStore.travelsDetail);
        }, error => console.log('Could not load todos.'));
    }

    private loadData(travels:Travel[], filefunc) {
        travels.forEach(travel => {
            let contentFile = filefunc(travel);
            this._http.get(this.travelFolder + contentFile)
                .map(res => res.text())
                // .do(data => {
                //     console.log(data);
                // })
                .subscribe(
                    data => travel.content = data,
                    error => console.log(error));
        });
    }
}
