// import { useEffect, useState } from "react";
import ClassesCart from "./ClassesCart";
import useClass from "../../Hooks/useClass";

const Classes = () => {
    
    const [classes] = useClass();

    return (
        <div>
            <div className="my-4 mt-8 text-center">
                <h1 className="text-4xl font-semibold text-[#FBBD23]">All Classes</h1>
            </div>
            <div className="gap-6 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    classes.map(item => <ClassesCart
                        key={item._id}
                        item={item}
                    ></ClassesCart>)
                }
            </div>
        </div>
    );
};

export default Classes;