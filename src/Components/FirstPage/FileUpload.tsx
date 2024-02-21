import { faAngleDown, faImage, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const FileUpload: React.FC = (): JSX.Element => {
    return (
        <>
            <div className="fixed bottom-1 right-1 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                <div className="bg-[#e5e7eb] p-3 rounded w-[20rem] flex justify-between">
                    <p>Uploading File</p>
                    <div className="flex md:space-x-5 items-center">
                        <FontAwesomeIcon className="size-5" icon={faAngleDown} style={{ color: "#3d3d3d", }} />
                        <FontAwesomeIcon className="size-5" icon={faXmark} style={{ color: "#3d3d3d" }} />
                    </div>
                </div>
                <div className="flex rounded p-3 border-b-2">
                    <div className="flex gap-2 items-center">
                        <FontAwesomeIcon className="size-5" icon={faImage} style={{ color: "#e60000", }} />
                        <p>1.jpg</p> 
                    </div>
                </div>
                <div className="flex rounded p-3 border-b-2">
                    <div className="flex gap-2 items-center">
                        <FontAwesomeIcon className="size-5" icon={faImage} style={{ color: "#e60000", }} />
                        <p>2.jpg</p>
                    </div>
                </div>
                <div className="flex rounded p-3 border-b-2">
                    <div className="flex gap-2 items-center">
                        <FontAwesomeIcon className="size-5" icon={faImage} style={{ color: "#e60000", }} />
                        <p>3.jpg</p>
                    </div>
                </div>
            </div>
        </>


        // <div>
        //     <div>
        //         <head>Uploading File</head>
        //         <div>

        //         </div>
        //     </div>
        //     <div></div>
        // </div>
    )
}

export default FileUpload;