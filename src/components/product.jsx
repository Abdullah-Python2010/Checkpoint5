

export const Single = (props) => {
    return(

        <div className="single-product">

            <img src={props.URL} alt="Product"/>
            <h3>{props.name}</h3>
            <p>{props.desc}</p>
            <span>{props.price}</span>
        </div>

    );
};
