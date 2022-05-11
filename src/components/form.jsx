import react, { useState } from 'react';

    
const Form = (props) => {
    const [listItem, setListItem] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.addToList(listItem);
        setListItem("");
    };
    
    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <label htmlFor="item">Add Item:</label>
                <input onChange={ (e) => setListItem(e.target.value) } value={ listItem }/>
                <input type="submit" value="Add" />
            </form>
        
        </div>
    );
};
    
export default Form;