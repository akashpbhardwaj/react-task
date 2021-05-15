import { useSelector,useDispatch } from "react-redux";
import { getCats } from "./Actions";


var TopNav = () => {
    const dispatch = useDispatch();
    const state = useSelector( state => state);


    var topName = state.categories.map(((category,index) => {
        return <a key={index} onClick={()=>{dispatch(getCats(category.id))}}  href="#home" >{category.name}</a>
      }))

        return(
            <div className="topnav">
            {topName}
          </div>
        );
}

export default TopNav;