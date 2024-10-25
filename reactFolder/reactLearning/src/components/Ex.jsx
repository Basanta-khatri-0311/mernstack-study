import Ex2 from "./Ex2";
const Example = (value)=>{
    return(
        <>
        <div>Hi from {value.name}</div>
        <Ex2 user={value.name} />
        </>
    )
}

export default Example