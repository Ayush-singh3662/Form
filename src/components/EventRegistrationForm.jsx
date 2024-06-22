import useForm from '../hooks/useForm';
import validate from '../validateInfo';

const EventRegistrationForm = () => {
    const { handleChange, handleSubmit, values, errors } = useForm(validate);

    return (
        <div className='page'>
            <div>
                <h1 className='title'>Event Registration Form</h1>
            </div>
            <div className="form-container">
                <form onSubmit={handleSubmit} noValidate>
                    <div className="form-inputs">
                        <label htmlFor="name" className="form-label">
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            className="form-input"
                            placeholder="Enter your name"
                            value={values.name}
                            onChange={handleChange}
                        />
                        {errors.name && <p>{errors.name}</p>}
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            className="form-input"
                            placeholder="Enter your email"
                            value={values.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p>{errors.email}</p>}
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="age" className="form-label">
                            Age
                        </label>
                        <input
                            id="age"
                            type="number"
                            name="age"
                            className="form-input"
                            placeholder="Enter your age"
                            value={values.age}
                            onChange={handleChange}
                        />
                        {errors.age && <p>{errors.age}</p>}
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="guest" className="form-label">
                            Are you attending with a guest?
                        </label>
                        <select
                            id="guest"
                            name="guest"
                            className="form-input"
                            value={values.guest}
                            onChange={handleChange}
                        >
                            <option value="No">No</option>
                            <option value="Yes">Yes</option>
                        </select>
                    </div>
                    {values.guest === 'Yes' && (
                        <div className="form-inputs">
                            <label htmlFor="guestName" className="form-label">
                                Guest Name
                            </label>
                            <input
                                id="guestName"
                                type="text"
                                name="guestName"
                                className="form-input"
                                placeholder="Enter guest name"
                                value={values.guestName}
                                onChange={handleChange}
                            />
                            {errors.guestName && <p>{errors.guestName}</p>}
                        </div>
                    )}
                    <button className="form-input-btn" type="submit">
                        Register
                    </button>
                    {values.submitted && (
                        <div className="form-summary">
                            <h3>Form Summary</h3>
                            <p>Name: {values.name}</p>
                            <p>Email: {values.email}</p>
                            <p>Age: {values.age}</p>
                            <p>Attending with a guest: {values.guest}</p>
                            {values.guest === 'Yes' && <p>Guest Name: {values.guestName}</p>}
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default EventRegistrationForm;