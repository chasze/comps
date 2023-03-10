import { useState } from "react"
import {GoChevronDown, GoChevronLeft} from 'react-icons/go'

function Accordion( {items} ) {
    // sttting the defualt state to -1 makes all closed by default 
    const [expandedIndex, setExpandedIndex] = useState(-1);

           const handleClick =  (index) => {

                setExpandedIndex( (currentExpandedIndex) => {
                    if(currentExpandedIndex === index)
                    {
                        return -1;
                    }
                    else {
                        return index;
                    }
                } )

                }

          


    const renderedItems = items.map((item, index) => {

        // if the index is equal set isExpanded to true
        const isExpanded = index === expandedIndex

          const icon = <span className="text-xl"> 
                {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
            </span>

        // if  expanded is true render the div otherwise returns false
        const content = isExpanded && <div className="border-p p-5">{item.content}</div>

        // if (index === expandedIndex) {
        //     console.log('expanded')
        // }
        // else {
        //     console.log('collapsed')
        // }
 
        return(
            <div key={item.id}>
                <div className="flex p-3 justify-between bg-gray-50 border-b items-center cursor-pointer" onClick={() => handleClick(index)} >
                    {item.label}
                    {icon}
                    </div>
                <div>{content}</div>

            </div>
        )
    })
    return <div className="border-x border-t rounded">
        {renderedItems}
    </div>
}

export default Accordion