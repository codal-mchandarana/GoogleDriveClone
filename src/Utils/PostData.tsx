"use client"

import axios from "axios";

const fileFetch = async (apiURL: string | undefined, file: File) => {
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
            headers: headers
        })
    }
}

export default fileFetch;