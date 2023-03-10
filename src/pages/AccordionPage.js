import {GoBell, GoCloudDownload, GoDatabase} from 'react-icons/go'
import Button from "./components/Button";
import Accordion from '../components/Accordion';

function AccordionPage () {

    const items = [
        {
            id: "12kl3jl",
            label: 'Can i use React on a project',
            content: ' adfkjdasjlf jdsalkf jdsalkx;jf lk;as;jflk; sadxjfl kjsdal;k jfkldsajfkldsh fsajdfshdj f'
        },
        { 
            id: "12kdfsdal3jl" ,
            label: 'Can i use JS on a project',
            content: ' adfkjdasjlf jdsalkf jdsalkx;jf lk;as;jflk; sadxjfl kjsdal;k jfkldsajfkldsh fsajdfshdj f'


        },
        {
            id: "12kl3jl3afkld",
            label: 'Can i use CSS on a project',
            content: ' adfkjdasjlf jdsalkf jdsalkx;jf lk;as;jflk; sadxjfl kjsdal;k jfkldsajfkldsh fsajdfshdj f'

        }
    ]

   return <Accordion items={items}  />
}

export default AccordionPage;