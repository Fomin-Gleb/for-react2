 

const Select = ({options, value, onChange}) => {
    console.log("render from Select");

    return (
        <select value={value} onChange={(e)=> onChange(e.target.value)} >
             {options.map(option=>(
                 <option key={option.value} value={option.value}>{option.name}</option>
             ))}           
        </select>
    )
}
export default Select