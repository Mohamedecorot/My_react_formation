import React, {useState, useEffect, useRef} from 'react';

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 1000 ),
            text: input
        });

        setInput('');
    };


    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit ? ( <><input type="text" placeholder="mettre à jour votre tâche" value={input} name='text' className='todo-input edit' onChange={handleChange} ref={inputRef}/><button className='todo-button edit'>Mise à jour</button></>) : (<><input type="text" placeholder="ajouter une tâche" value={input} name='text' className='todo-input' onChange={handleChange} ref={inputRef}/>
            <button className='todo-button'>Ajouter</button></>)}

        </form>
    )
}

export default TodoForm
