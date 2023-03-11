function Dropdown({options} ) {

    const renderedOptions = options.map( (option)=> {
                return <div id={option.value}>
                    {option.label}
                </div>
    } )

    return <div>
        <div>
            Select...
        </div>
        <div>
            {renderedOptions}
        </div>
    </div>
    
}

export default Dropdown