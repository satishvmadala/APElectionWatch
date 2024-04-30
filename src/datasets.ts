export interface Dataset {
    name: string;
    label: string;
    link: string;
    map: string;
    desc: string;
}

export const DatasetList: Dataset[] = [
    { 
        name: "AP_Districts",
        label: "AP Election Watch",
        link: '/APEW_PCData.json',
        map: "/AndhraPradesh_Districts.geojson",
        desc: ""
    }
];

export const DatasetList2: Dataset[] = [
    { 
        name: "AP_Assemblies",
        label: "AP Assemblies",
        link: '/APEW_PCData.json',
        map: "/Constituencies_AndhraPradesh_2024.geojson",
        desc: ""
    }
];