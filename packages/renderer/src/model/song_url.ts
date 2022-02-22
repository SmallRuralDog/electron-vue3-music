interface SongUrl {
    id: number;
    url: string;
    br: number;
    size: number;
    md5: string;
    code: number;
    expi: number;
    type: string;
    gain: number;
    fee: number;
    payed: number;
    flag: number;
    canExtend: boolean;
    freeTrialPrivilege: RootObjectFreeTrialPrivilege;
    freeTimeTrialPrivilege: RootObjectFreeTimeTrialPrivilege;
    urlSource: number;
}

interface RootObjectFreeTrialPrivilege {
    resConsumable: boolean;
    userConsumable: boolean;
}

interface RootObjectFreeTimeTrialPrivilege {
    resConsumable: boolean;
    userConsumable: boolean;
    type: number;
    remainTime: number;
}

