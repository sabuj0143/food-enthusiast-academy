import { useEffect, useState } from "react";
import PopularMenuCart from "./PopularMenuCart";

const PopularMenu = () => {

    const [menu, setMenu] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => {
                setMenu(data);
            })
    }, [])

    const popular = menu.filter(item => item.category === 'popular');


    return (
        <div>
            <div>
                <h3>Popular Classes Section</h3>
            </div>
            
            <div className="grid md:grid-cols-2">
                {
                    popular.map(item => <PopularMenuCart
                        key={item._id}
                        item={item}
                    ></PopularMenuCart>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;