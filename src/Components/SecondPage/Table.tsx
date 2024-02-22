"use client"

import getData from "@/Utils/GetData";
import { faFileImage, faFileLines } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react"

const Table:React.FC = ():JSX.Element => {

    const [TableContent, setTableContent] = useState([])

    useEffect(() => {

        const fetchTableContent = async () => {
            const url: string | undefined = process.env.NEXT_PUBLIC_POLARIS_URL;

            if (url) {
                const res = await getData(url)
                setTableContent(res?.data.files)
            }
        }

        fetchTableContent()
    }, [])

    const check = (vari: string) => {

        const extension: string = vari.split('.')[1];

        if (extension === "jpg" || extension === "png" || extension === "jpeg")
            return 1
        else
            return 2
    }


    return (
        <div className="p-8">
            <table className="shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="pl-6 py-3">Index.</th>
                        <th scope="col" className="pr-6 py-3">Icon</th>
                        <th scope="col" className="px-6 py-3">Product name</th>
                        <th scope="col" className="px-6 py-3">Size</th>
                        <th scope="col" className="px-6 py-3">Type</th>
                        <th scope="col" className="px-6 py-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {TableContent.map((element, index) => {
                        return (
                            <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row" className="pl-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {index + 1}.
                                </th>
                                <td className="pr-6 py-4">{check(element.name) === 1 ? <FontAwesomeIcon icon={faFileImage} size="xl" style={{ color: "#b30000", }} /> :
                                    <FontAwesomeIcon size="xl" icon={faFileLines} style={{ color: "#b90404", }} />}</td>
                                <td className="px-6 py-4">{element.name}</td>
                                <td className="px-6 py-4">
                                    {((element.sizeBytes) / 1000000).toFixed(2)} MB
                                </td>
                                <td className="px-6 py-4">
                                    {check(element.name) === 1 ? 'Image' : 'File'}
                                </td>
                                <td className="relative right-2 px-6 py-4">
                                    <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-2 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table