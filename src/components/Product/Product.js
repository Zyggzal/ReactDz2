import './Product.css'

function Product(props) {
    return (
        <div className={`container container-dark p-3 border border-white list-group-item list-group-item-action ${props.selected ? 'active' : ''}`}>
            <span className='d-flex justify-items-between mb-2'>
                <h1>{props.name}</h1>
                <p>{props.price}$</p>
            </span>
            <div className='d-flex-start'>
                <p>{props.description}</p>
            </div>
            <span className='d-flex justify-content-end'>
                <button onClick={props.onDelete} className='btn btn-outline-danger'>Delete</button>
            </span>
        </div>
    )
}

export default Product