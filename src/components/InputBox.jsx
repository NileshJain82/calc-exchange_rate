import { useId,useState } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  placeholder,
  currencyOptions = [],
  selectCurrency = "usd",
  inputFieldDisabled
}){

  const amountInputId = useId()

  return (
    <div className={`bg-gray-300 p-3 rounded-lg text-lg flex`}>
      <div className="w-1/2">
        <label 
        htmlFor={amountInputId}
        className="text-black mb-2 inline-block">{label}</label>

        <input 
          id={amountInputId}
          disabled={inputFieldDisabled}
          className=" w-full h-7 rounded-lg bg-gray-100 py-3"
          type="number"
          placeholder={placeholder}
          value={amount}
          onChange={(e)=>{ onAmountChange &&
            onAmountChange(Number(e.target.value))
          }}
        />
      </div>

      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black 40 mb-2 w-full">Currency Type</p>
        
        <select className="rounded-lg px-1 py-1  h-7 bg-gray-100 cursor-pointer outline-none"  
        value={selectCurrency}
        onChange={(e)=> onCurrencyChange&&onCurrencyChange(e.target.value)}
        > 
        
        {currencyOptions.map((curren)=> (
            <option key={curren} value={curren}>{curren}</option>
        ))}
          
        </select>


      </div>
    </div>
  );
}

export default InputBox;
