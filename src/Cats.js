
import { useSelector } from "react-redux";

var Cats = () => {
    const state = useSelector( state => state);
    
    var cats = state.cats.map(((cat,index) => {
        return (
        <span key={index}>
            <img alt={cat.id} src={cat.url} height="50%" width="50%"></img>
        </span>
        )
      }))

        return(
            <div >
            {cats}
          </div>
        );


}


export default Cats;