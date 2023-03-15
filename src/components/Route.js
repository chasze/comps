import useNavigation from "../hooks/use-navigation";

function Route({path, children}) {
    const {currentPath} = useNavigation()
    // if our path is equal to the current path return children
    if (path === currentPath) { 
    return children}
    // return nothing if not
    return null;
}   



export default Route