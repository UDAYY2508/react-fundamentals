function Food(){
    
    const Food1 = "mango"
    const Food2 = "banana"
    const Food3 = "apple"
    
    return(
        <ul>
            <li>peach</li>
            <li>{Food2}</li>
            <li>{Food3.toUpperCase()}</li>
        </ul>
    );
}
export default Food;