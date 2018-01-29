import {Component, OnInit} from '@angular/core';
import {DigitransitService} from '../services/digitransit.service';

@Component({
    selector: 'app-routes',
    templateUrl: './routes.component.html',
    styleUrls: ['./routes.component.scss'],
})
export class RoutesComponent implements OnInit {

    pysakki: string;
    reittiTaulukko: any;

    constructor(private digitransitService: DigitransitService) {
    }

    ngOnInit() {
        this.digitransitService.getRoutes(this.pysakki).subscribe(response => {
            console.log(response.data['stops'][0].patterns);
            this.reittiTaulukko = response.data['stops'][0].patterns;
            this.digitransitService.lat = response.data['stops'][0].lat;
            this.digitransitService.lon = response.data['stops'][0].lon;
        });
    }

}
