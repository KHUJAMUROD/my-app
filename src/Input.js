import { useContext } from 'react';
import DataContext from './context'



const InputComponent = () => {
    const context = useContext(DataContext);
    return (
        <input
            type="email"
            value={context.mail}
            className='form-control'
            id="exampleFormControlInput1"
            placeholder="name@example.com"
        />
    );
};

export default InputComponent;