import { useState } from "react";
export const StockCreation = () => {

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(prevState => ({...prevState, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // const productDetail = {
        //     pcode: inputs.pcode
        // }
        console.log('before', inputs);
        // setInputs((values) => {
        // return values.pcode = '';
        // });
        
        setInputs({});
        
    }

    return (
        <form>
            <div>
                <label>Product Code
                    <input type="text" name="pcode" value={inputs.pcode || ''} onChange={handleChange}/>
                </label>
            </div>
            <div>
                <label>Product Name
                    <input type="text" name="pname" value={inputs.pname || ''} onChange={handleChange}/>
                </label>
            </div>
            <div>
                <label>No of Units
                    <input type="text" name="units" value={inputs.units || ''} onChange={handleChange}/>
                </label>
            </div>
            <div>
                <label>Original Price
                    <input type="text" name="oprice" value={inputs.oprice} />
                </label>
            </div>
            <div>
                <label>Selling Price
                    <input type="text" name="sprice" value={inputs.sprice} />                    
                </label>
            </div>
            <div>
                <label>Date of purchase
                    <input type="text" name="purchasedate" value={inputs.purchasedate}/>
                </label>
            </div>
            <div>
                <label>Product Type
                    <input type="text" name="ptype" value={inputs.ptype}/>
                </label>
            </div>
            <div>
                <label>Tax
                    <input type="text" name="tax" value={inputs.tax}/>
                </label>
            </div>
            <div>
                <label>Dealer
                    <input type="text" name="dealer" value={inputs.dealer}/>
                </label>
            </div>
            <div>
                <label>Weight
                    <input type="text" name="weight" value={inputs.weight}/>
                </label>
            </div>
            <div>
                <label>Date of purchase
                    <input type="text" name="height" value={inputs.height}/>
                </label>
            </div>
            <div>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </form>
    )
}