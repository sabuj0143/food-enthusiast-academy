import { useEffect, useState } from "react";
import TopSixStudentsCart from "./TopSixStudentsCart";


const TopSixStudents = () => {

    const [topStudents, setTopStudents] = useState([]);

    useEffect(() => {
        fetch('https://assigment-12-food-enthusiast-academy-server.vercel.app/classes')
            .then(res => res.json())
            .then(data => {
                const sortedStudents = data.sort((a, b) => b.students - a.students);
                const topStudentsData = sortedStudents.slice(0, 6);
                setTopStudents(topStudentsData);
            })
    }, [])

    return (
        <div>
            <div className="my-4 mt-8 text-center">
                <h3 className="text-4xl lilita font-semibold text-[#FBBD23]">Top Six Popular Instructor</h3>
                <hr className="w-[30%] mx-auto my-2" />
                <hr className="w-[20%] mx-auto my-2" />
            </div>
            <div className="gap-6 p-4 grid md:grid-cols-3">
                {
                    topStudents.map(item => <TopSixStudentsCart
                        key={item._id}
                        item={item}
                    ></TopSixStudentsCart>)
                }
            </div>
        </div>
    );
};

export default TopSixStudents;