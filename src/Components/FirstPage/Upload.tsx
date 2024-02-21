
"use client";

import { useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons';



const Upload: React.FC = (): JSX.Element => {

    const [file, setFiles] = useState<File[]>([])

    const input_ref = useRef<HTMLInputElement>(null)

    console.log(file)

    const handleChange = () => {
        if (input_ref.current?.files) {
            const files = Array.from(input_ref.current.files)
            setFiles(files)
        }
    }

    return (
        <>
            <div className="flex flex-col">
                <div className="flex items-center justify-center w-[50rem]">
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-200 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div className="grid grid-cols-4 gap-2">
                            {file.length > 0 && file.map((element,index) => {
                                return (
                                    <div className="flex flex-col">
                                        <FontAwesomeIcon className="size-20" size="2xl" icon={faFile} />
                                        <p className="self-center w-auto">{`File-${index}`}</p>
                                    </div>
                                )
                            })}
                        </div>
                        {file.length === 0 ? <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF</p>
                        </div> : null}
                        <input onChange={handleChange} className="hidden" ref={input_ref} id="dropzone-file" type="file" multiple />
                    </label>
                </div>
                <button className="mt-2 self-center w-52 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Upload</button>
            </div>
        </>
    )
}

export default Upload;