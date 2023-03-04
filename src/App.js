import {GoBell, GoCloudDownload, GoDatabase} from 'react-icons/go'
import Button from "./Buttton";


function App () {
    return <div> 
        <div>
        <Button  rounded  primary> <GoBell /> click here </Button>
        </div>
        <div>
        <Button secondary> <GoCloudDownload /> Buy Now</Button>
        </div>
        <div>
        <Button outline > <GoDatabase /> See Deal</Button>
        </div>
        <div>
        <Button warning>Someting</Button>
        </div>
        <div>
        <Button danger>asdfsa</Button>
        </div>
    </div>;
}

export default App;