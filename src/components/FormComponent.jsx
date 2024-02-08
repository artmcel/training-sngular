export const FormComponent = () => {
  return (
    <form action="">
        <div className="mb-3">
            <label htmlFor="number" className="form-label">Ingresa un valor</label>
            <input
                type="text"
                className="form-control"
                name="number"
                id="number"
                aria-describedby="helpId"
                placeholder="ingresa un valor"
            />
        </div>
        <button
            type="submit"
            className="btn btn-primary"
        >
            Resolver
        </button>
        
    </form>
    
  )
}
