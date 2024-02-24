"use client"

import axios from "axios"

const deleteFile = async (name: string) => {

    const apiURL: string | undefined = process.env.NEXT_PUBLIC_POLARIS_URL + "/" + name;

    let headers = {
        'Authorization': `Basic ${process.env.NEXT_PUBLIC_POLARID_KEY}`
    }


    return await axios.delete(apiURL,{
        headers:headers
    })
}

export default deleteFile;