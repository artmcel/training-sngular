import { useState } from "react"
import mySerie from '../utils/Serie'

export const FormComponent = () => {

    const [n, setN] = useState(0);
    const [result, setResult] = useState(null);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            setResult( mySerie.serie(n) );
        } catch (error) {
            setResult( error.message );
        }

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="number" className="form-label">Ingresa un valor</label>
                    <input
                        type="number"
                        className="form-control"
                        name="number"
                        id="number"
                        value={n}
                        onChange={ (e)=>setN(e.target.value) }
                        aria-describedby="helpId"
                        placeholder="ingresa un valor"
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    Calcular
                </button>
                
            </form>
            <div className="col">
                { result && <p>Resultado: {result}</p>}
            </div>
        </>
        
    )
}
