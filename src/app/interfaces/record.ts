export interface Group {
    id: number;
    name: string;
}

export interface Description {
    id: number;
    description: string;
}

export interface Action {
    id: number;
    action: string;
}

export interface Record {
    timestamp: string;
    id: any;
    organization_id: any;
    msg: string;
    msg2: string;
    ssid_mac: string;
    mac2: string;
    mac3: string;
    reporting_mac: string;
    product_name: string;
    version: string;
    reporting_ssid: string;
    online: string;
    processed: string;
    type: any;
    severity: any;
    count: string;
    ssid: string;
    record_type: string;
    mac: string;
    device_mac: string;
    name?: any;
    model?: any;
    vendor?: any;
    noise: string;
    rssi: string;
    channel: string;
    access_point_mac: string;
    first_seen: string;
    last_seen: string;
    group: Group;
    access_point_ssid: string;
    alert_id?: number;
    status: any;
    bssid: string;
    events: string;
    files: string;
    devices: string;
    create_time: string;
    description: Description;
    action: Action;
    is_hidden: string;
    white_list: string;
    is_evil: string;
    rsn: string;
    latitude?: any;
    longitude?: any;
    created_at: string;
    updated_at: string;
}