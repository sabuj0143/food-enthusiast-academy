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
        <div className="my-8 mt-12">
            <div className="my-4 mt-8 text-center">
                <h3 className="text-4xl font-semibold text-[#CD6001]">Top Six Popular Classes</h3>
                <hr className="w-[30%] mx-auto my-2" />
                <hr className="w-[20%] mx-auto my-2" />
            </div>

            <div className="gap-6 p-4 grid md:grid-cols-3">
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