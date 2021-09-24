import Product from "../components/Product"

function ProductFeed({ productLists }){
    // const {productLists} = props
    return(
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
            {productLists.slice(0,4).map(({id, title, price, description, category, image})=>(
                <Product 
                    key = {id}
                    id = {id}
                    title = {title}
                    price = {price}
                    description = {description}
                    category = {category}
                    image = {image}
                />
            ))}
            
            <img className="md:col-span-4" src="https://links.papareact.com/dyz" alt="" />
            <div className="md:col-span-2">
                {productLists.slice(4,5).map(({id, title, price, description, category, image})=>(
                    <Product 
                        key = {id}
                        id = {id}
                        title = {title}
                        price = {price}
                        description = {description}
                        category = {category}
                        image = {image}
                    />
                ))}    
            </div>    
            {productLists.slice(5,productLists.length).map(({id, title, price, description, category, image})=>(
                    <Product 
                        key = {id}
                        id = {id}
                        title = {title}
                        price = {price}
                        description = {description}
                        category = {category}
                        image = {image}
                    />
                ))}    

        </div>
    );
}

export default ProductFeed;