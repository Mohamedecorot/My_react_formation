import React, {useState} from 'react';

export default function Picture( { imageName, index, handleRemove }) {
    const [showCloseButton, setshowCloseButton] = useState(-1);

    return (
        <div className="relative" key={index}
            onMouseEnter={() => setshowCloseButton(index)}
        >
            <button
                className={`bg-white w-5 h-5 pb-1 font-thin rounded-xl text-center flex justify-center items-center absolute text-red-500 right-0 text-sm focus:outline-none ${index === showCloseButton ? '' : 'hidden'}`}
                onClick={() => handleRemove(index)}
                >x
            </button>
            <img className="w-40 mx-auto" src={imageName} alt="" />
        </div>
    )
}
