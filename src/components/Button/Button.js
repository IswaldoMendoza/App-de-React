const Button = ({label, background}) => {
    return <button
                style={{
                        background: background,
                        color: 'yellow'
                }}>
                {label}
           </button>
}

export default Button