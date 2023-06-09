
const StudentCard = ({ student }) => {

    const { name, instructorName, image, availableSeats } = student;
    return (
        <div className="student-card">
            <h3>{name}</h3>
            <p>Instructor: {instructorName}</p>
            <img src={image} alt={name} />
            <p>Available Seats: {availableSeats}</p>
        </div>
    );
};

export default StudentCard;
