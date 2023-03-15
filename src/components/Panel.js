import classNames from "classnames";

        function Panel({children, className, ...rest} ) {
            // use classnames library to push these tailwind classes that are used
            // by most components + any children passed to the panel object with "className"
            const finalClassNames = classNames(
                'border rounded p-3 shadow bg-white w-full',
                className
                )
                // ...rest is used for anything passed to this component i.e onClick, etc..
                return <div {...rest} className={finalClassNames}> {children} </div>

}

export default Panel;