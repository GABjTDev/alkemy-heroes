const BarProgress = ({ title, value, rol = null }) => {
    return (
        <div className="mb-2">
            <h6>{title}</h6>
            <div className="progress" style={{ height: "30px" }}>
                <div className={`progress-bar ${rol === 'good' ? 'bg-info' : ''} ${rol === 'bad' ? 'bg-danger' : ''}`} role="progressbar" style={{ width: `${value}%` }} aria-valuemin="0" aria-valuemax="100">{value}%</div>
            </div>
        </div>
    )
}

export default BarProgress
