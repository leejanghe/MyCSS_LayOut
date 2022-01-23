import NavBar from './Navbar'

function LayOut({children}) {
    return (
        <div>
            <NavBar />
            <div>{children}</div>
        </div>
    )
}

export default LayOut