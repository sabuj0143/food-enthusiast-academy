import { useEffect, useState } from 'react';
import StudentCard from './StudentCard';

const TopStudents = () => {
    const [topStudents, setTopStudents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => {
                console.log(data);

                // Sort the students based on available seats and select the top 6
                const sortedStudents = data.students.sort((a, b) => {
                    const seatsA = parseInt(a.availableSeats['$numberInt']);
                    const seatsB = parseInt(b.availableSeats['$numberInt']);
                    return seatsB - seatsA;
                });

                const topStudents = sortedStudents.slice(0, 6);
                console.log(topStudents);

                setTopStudents(topStudents);
            })
            .catch(error => {
                console.log('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="top-students my-5">
            <div className='text-center text-4xl font-semibold'>
                <h2>Top Six Students</h2>
            </div>
            {topStudents.map(student => <StudentCard
                key={student._id}
                student={student}
            ></StudentCard>)}
        </div>
    );
};

export default TopStudents;
