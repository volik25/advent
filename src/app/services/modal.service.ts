import { Subject } from "rxjs";

export class ModalService {
    private isFirstly: boolean = true;
    private isSubscribed: boolean = false;

    public getIsFirstly() {
        return this.isFirstly;
    }

    public getIsSubscribed() {
        return this.isSubscribed;
    }

    public notFirstly() {
        this.isFirstly = false;
    }

    public setFirstly() {
        this.isFirstly =true;
    }

    public subscribe() {
        this.isSubscribed = true;
    }

    public unSubscribe() {
        this.isSubscribed = false;
    }
}