import './styles/products.css';

export const Products = () => {
    return (
        <>
            <div className='product-section'>
                <div className='section-title'>
                    <h2>OUR PRODUCTS</h2>
                </div>
                <div className='products'>
                    <div className='product'>
                        <img src='https://virmansha.com/assets/img/home-product-1.png' />
                        <p>Home Decor</p>
                    </div>
                    <div className='product'>
                        <img src='https://virmansha.com/assets/img/home-product-2.png' />
                        <p>Home Furnishing</p>
                    </div>
                    <div className='product'>
                        <img src='https://virmansha.com/assets/img/home-product-3.png' />
                        <p>Bags</p>
                    </div>
                    <div className='product' >
                        <img src='https://virmansha.com/assets/img/home-product-4.png' />
                        <p>Accessories</p>
                    </div>
                    <div className='product'>
                        <img src='https://virmansha.com/assets/img/home-product-5.png' />
                        <p>Toys</p>
                    </div>
                </div>
            </div>
        </>
    )
}