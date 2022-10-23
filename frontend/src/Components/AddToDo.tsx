import React, {ChangeEvent, useState} from 'react';
import '../Css/AddToDo.css';

type addToDoProps = {
    addToDo: (description: string) => void
}

function AddToDo(props: addToDoProps) {

    const [descrip, setDescrip] = useState<string>("")

    const onDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
        setDescrip(event.target.value)
    }

    return (

            <section>
            <input
                type="text"
                value={descrip}
                onChange={onDescriptionChange}
            />
            <button className={"add_button"} onClick={()=>props.addToDo(descrip)} >add</button>
        </section>

    );
}

export default AddToDo;