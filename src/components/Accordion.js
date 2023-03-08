import { useState } from "react"
import {GoChevronDown, GoChevronLeft} from 'react-icons/go'

function Accordion( {items} ) {
    const [expandedIndex, setExpandedIndex] = useState(0);

           const handleClick =  (index) => {
                    setExpandedIndex(index)
                }

          


    const renderedItems = items.map((item, index) => {

        // if the index is equal set isExpanded to true
        const isExpanded = index === expandedIndex

          const icon = <span> 
                {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
            </span>

        // if  expanded is true render the div otherwise returns false
        const content = isExpanded && <div>{item.content}</div>

        // if (index === expandedIndex) {
        //     console.log('expanded')
        // }
        // else {
        //     console.log('collapsed')
        // }
 
        return(
            <div key={item.id}>
                <div onClick={() => handleClick(index)} >
                    {icon}
                    {item.label}</div>
                <div>{content}</div>

            </div>
        )
    })
    return <div>
        {renderedItems}
    </div>
}

export default Accordion