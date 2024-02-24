"use client"

import { openActions } from "@/Store/openModal-slice";
import check from "@/Utils/CheckFile";
import { faAngleDown, faAngleUp, faCircleCheck, faFileImage, faFileLines, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

let counter: number = 0;

const FileUpload: React.FC = (): JSX.Element => {

    const items = useSelector((state: any) => state.downloadItems.items);
    const progessItems = useSelector((state: any) => state.ProgessBarItems.ProgessItems);
    const open = useSelector((state: any) => state.openModal.open);

    const [show, setShow] = useState<boolean>(true);

    const dispatch = useDispatch();

    const handleClick = (): void => {
        dispatch(openActions.closeModal())
    }

    const handleClosingClick = (): void => {
        setShow((prev) => { return !prev })
    }

    return (
        <>
            {open &&
                <div className="fixed bottom-1 right-7 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                    <div className="bg-[#e5e7eb] p-3 rounded w-[20rem] flex justify-between">
                        <p>{counter!==0 && counter%2==0?`${items.length} Uploads Completed`:`Uploading ${items.length} items`}</p>
                        <div className="flex md:space-x-5 items-center">
                            <FontAwesomeIcon onClick={handleClosingClick} className="size-5" icon={show ? faAngleDown : faAngleUp} style={{ color: "#3d3d3d", cursor: 'pointer' }} />
                            <FontAwesomeIcon onClick={handleClick} className="size-5" icon={faXmark} style={{ color: "#3d3d3d", cursor: 'pointer' }} />
                        </div>
                    </div>

                    {show &&
                        items.map((element: any, index: number) => {

                            const currItem = progessItems.find((progessItem: any) => { return progessItem.name === element.payload.name })

                            if(currItem && currItem.value===100)
                              counter++;

                            return <div key={index} className="pb-7 flex flex-col p-3 border-b-2">
                                <div className="flex justify-between  gap-2 items-center">
                                    <div className="flex">
                                        {check(element.payload.name) === 1 ? <FontAwesomeIcon icon={faFileImage} size="xl" style={{ color: "#b30000", }} /> : <FontAwesomeIcon size="xl" icon={faFileLines} style={{ color: "#b90404", }} />}
                                        <p className="ml-2">{(element.payload.name).slice(0, 20)}</p>
                                    </div>
                                    {(currItem && currItem.value === 100) && <FontAwesomeIcon icon={faCircleCheck} size="xl" style={{ color: "#16a34a", }} />}
                                </div>
                                <div className="relative top-3 w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                                    <div className="bg-green-600 h-2.5 rounded-full dark:bg-gray-300"
                                        style={{ width: `${currItem ? currItem.value : 0}%` }}>
                                    </div>
                                    <p className="mt-1">{currItem ? currItem.value : 0}%</p>
                                </div>
                            </div>
                        })
                    }
                </div>
            }
        </>
    )
}

export default FileUpload;