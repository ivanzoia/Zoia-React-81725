const Cartwidget = (props) => {
    console.log(props)
    return(
        <div>
            <span>🛒</span>
            <span style={{color:'blue'}}>{props.counter}</span>
        </div>

    )
}
export default Cartwidget