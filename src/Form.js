import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


const Form = (props) => {

    const [selectValue, setSelectValue] = useState('');

    const handleChange = (event) => {
        setSelectValue(event.target.value);
        
    }

    const submitHandler = (event) => {
        event.preventDefault();
        props.handleSubmit(event, selectValue);
        
    }

    return (
        <>
            <form action=""
                onSubmit={submitHandler}
            >
                <label htmlFor="artistSelection">Please Select and Artist:</label>
                <select name="" id="artistSelection" defaultValue={'placeholder'} onChange={handleChange}
                >
                    <option value="placeholder" disabled>Select an artist</option>
                    <option value="B. B. King">B. B. King</option>
                    <option value="Muddy Waters">Muddy Waters</option>

                    <option value="Chuck Berry">Chuck Berry</option>
                    <option value="Cream">Cream</option>
                    <option value="Pink Floyd">Pink Floyd</option>
                    <option value="Elvis Presley">Elvis Presley</option>
                    <option value="The Beatles">The Beatles</option>
                    <option value="Radiohead">Radiohead</option>

                    <option value="Metallica">Metallica</option>
                    <option value="Iron Maiden">Iron Maiden</option>
                    <option value="Black Sabbath">Black Sabbath</option>
                    <option value="Van Halen">Van Halen</option>
                    
                    <option value="Drake">Drake</option>
                    <option value="Kanye West">Kanye West</option>
                    <option value="nas">Nas</option>

                    <option value="Merle Haggard">Merle Haggard</option>
                    <option value="kraftwerk">KraftWerk</option>

                    <option value="bob dylan">Bob Dylan</option>

                    <option value="miles davis">Miles Davis</option>
                    <option value="Ella Fitzgerald">Ella Fitzgerald</option>

                    <option value="Madonna">Madonna</option>
                    <option value="Michael Jackson">Michael Jackson</option>

                    <option value="Stevie Wonder">Stevie Wonder</option>

                    <option value="Bob Marley">Bob Marley</option>

                    <option value="Netsky">Netsky</option>
                    <option value="Bladerunner">Bladerunner</option>
                    <option value="Deadmou5">Deadmau5</option>
                </select>

                <button>Submit</button>
            </form>
            <>
                <>
                {
                    props.artistData.map((artist)=>{
                        return(
                            <p key={uuidv4()}>{artist.name}</p>
                        )
                    })
                }
                </>
                
            </>
        </>

    )
}

export default Form;