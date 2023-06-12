import useClass from "../../../Hooks/useClass";
import SingleClass from "./SingleClass";

const Instructors = () => {

    const [classes] = useClass();

    return (
        <div className="my-6">
            <div className="grid bg-[#0F172A] md:grid-cols-3 gap-4">
                {
                    classes.map(singleClass => <SingleClass
                        key={singleClass._id}
                        singleClass={singleClass}
                    ></SingleClass>)
                }
            </div>
        </div>
    );
};

export default Instructors;