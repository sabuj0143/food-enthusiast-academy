import { useEffect, useState } from "react";
import ClassesCart from "./ClassesCart";

const Classes = () => {

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => {
                setMenu(data);
            })
    }, [])

    return (
        <div>
            <div className="my-4 mt-8 text-center">
                <h1 className="text-4xl font-semibold text-[#FBBD23]">All Classes</h1>
            </div>
            <div className="gap-6 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    menu.map(item => <ClassesCart
                        key={item._id}
                        item={item}
                    ></ClassesCart>)
                }
            </div>
        </div>
    );
};

export default Classes;