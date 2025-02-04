function Food(){
let food="orange";
let food2="banana";

    return(
        <ul>
            <li>Apple</li>
            <li>{food}</li>
            <li>{food2.toLocaleUpperCase()}</li>
        </ul>
    );

}
export default Food