import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

/**
 *  StepFour Collects user input for miles
 */
function StepFour() {

    const miles = useSelector(store => store.miles);
    const dispatch = useDispatch();
    
    //Allows us to navigate to next page
    const history = useHistory();

    const handleChange = (event) => {
        const action = {
            type: 'SET_ACTIVITY_MILES',
            payload: event.target.value
        };
        dispatch(action);
    }

    const nextPage = (event) => {
        event.preventDefault();
        if (miles > 0) {
            history.push('/review');
        } else {
            alert('Please enter a value greater than 0.');
        }
    }

    return (
        <>
            <h3>Step Four</h3>
            <form onSubmit={nextPage}>
                <label htmlFor="miles">Miles</label><br />
                <input value={miles} onChange={handleChange} type="number" />
                <input type="submit" value="Next" />
            </form>
        </>
    );
}

export default StepFour;