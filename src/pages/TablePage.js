import Table from "../components/Table";

function TablePage(){

const data = [
    {name: 'Orange', color: 'bg-orange-599', score: 5 },
    {name: 'Apple', color: 'bg-red-599', score: 3 },
    {name: 'Banana', color: 'bg-yellow-599', score: 1 },
    {name: 'Lime', color: 'bg-green-599', score: 4 },




]



    return <div>
        <Table data={data} />
    </div>
}

export default TablePage