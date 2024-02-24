"use client"

import { ProgessBarActions } from "@/Store/progessBar-slice";
import axios from "axios";

const fileFetch = async (apiURL: string | undefined, file: File,dispatch:any) => {


    let bodyFormData = new FormData();
    bodyFormData.append('file', file, file.name);

    let headers = {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Basic ${process.env.NEXT_PUBLIC_POLARID_KEY}`,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
    }

    if (apiURL) {
        return await axios.post(apiURL, bodyFormData, {
            headers: headers,
            responseType: 'json',
            onUploadProgress: function (progressEvent: any) {
                const percentage = Math.floor((progressEvent.loaded/progressEvent.total)*100);
                dispatch(ProgessBarActions.updateProgessBar({payload:file.name,value:percentage}))
            }
        })
    }
}

export default fileFetch;