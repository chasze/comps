import classNames from "classnames";
import useNavigation from "../hooks/use-navigation";

function Link ({to, children, className, activeClassName}) {
    // destructure the navigate function from Navigation context
    const {navigate, currentPath} = useNavigation()

    const classes = classNames('text-blue-500', className,
        // this line checks the current path and adds the active class if it matches
        currentPath === to && activeClassName
    )


    const handleClick = (event) => {
        // this allows ctrl + click to open new tab
        if(event.metaKey || event.ctrlKey) {
            return;
        }

        event.preventDefault();
        navigate(to);

        
    };


    return <a className={classes} href={to} onClick={handleClick}> {children} </a>
}

export default Link