import { useState } from "react"

export const FormComponent = () => {

    const [n, setN] = useState(0);

    return (
        <form action="">
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
        
    )
}
