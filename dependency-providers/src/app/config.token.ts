import { InjectionToken } from "@angular/core";

export interface Appconfig {
    experimentalEnabled?: boolean;
}


export const APP_CONFIG = new InjectionToken<Appconfig>('app.config', {
    providedIn: 'root',
    factory: () => ({
        experimentalEnabled: true
    })
});


