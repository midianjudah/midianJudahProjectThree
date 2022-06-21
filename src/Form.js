import { useState } from 'react';

const Form = (props) => {


    const [selectValue, setSelectValue] = useState('');


    const handleChange = (event) => {
        setSelectValue(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        props.handleSubmit(event, selectValue);
        console.log(props.selectArtist)


    }




    return (
        <>
            <form action=""
                onSubmit={submitHandler}
            >
                <label htmlFor="artistSelection">Please Select and Artist:</label>
                <select name="" id="artistSelection" onChange={handleChange} value={props.selectValue}
                >
                    <option value="placeholder" disabled selected>Select an artist</option>
                    <option value="drake">Drake</option>
                    <option value="cream">Cream</option>

                </select>

                <button>Submit</button>
            </form>
            <>
                
                <>
                    <p>{props.selectArtist}</p>
                    {/* 
                    I'm having trouble targeting the similar artists and I'm having trouble getting down into the levels I need it to go.
                    Don't know what path I need to go!
                     */}
                </>
                
            </>
        </>

    )
}

export default Form;