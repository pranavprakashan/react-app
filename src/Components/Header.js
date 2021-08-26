import Button from "./Button"

const Header = ({title , buttonStatus , onClick}) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button text={buttonStatus ? 'Close' : 'Add'} onClick={onClick} />
        </header>
    )
}

export default Header
