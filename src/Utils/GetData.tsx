"use client"

import axios from "axios";

const getData = async (apiURL: string | undefined) => {

    let headers = {
        'Authorization': `basic ${process.env.NEXT_PUBLIC_POLARID_KEY}`,
    }

    if (apiURL) {
        return await axios.get(apiURL, {
            headers: headers
        })
    }
}

export default getData;