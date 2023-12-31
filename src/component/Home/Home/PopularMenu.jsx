import { useEffect, useState } from "react";
import PopularMenuCart from "./PopularMenuCart";

const PopularMenu = () => {

    const [menu, setMenu] = useState([]);


    useEffect(() => {
        fetch('https://assigment-12-food-enthusiast-academy-server.vercel.app/classes')
            .then(res => res.json())
            .then(data => {
                setMenu(data);
            })
    }, [])

    const popular = menu.filter(item => item.category === 'popular');
    const topSixPopular = popular.slice(0, 6);

    return (
        <div className="my-8 mt-12">
            <div className="my-4 mt-8 text-center">
                <h3 className="text-4xl lilita font-semibold text-[#FBBD23]">Top Six Popular Classes</h3>
                <hr className="w-[30%] mx-auto my-2" />
                <hr className="w-[20%] mx-auto my-2" />
            </div>

            <div className="gap-6 p-4 grid md:grid-cols-3">
                {
                    topSixPopular.map(item => <PopularMenuCart
                        key={item._id}
                        item={item}
                    ></PopularMenuCart>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;