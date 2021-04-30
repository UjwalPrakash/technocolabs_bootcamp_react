import { Link } from "react-router-dom";





const Search = () => {
    return(
        <div class="search-boxed">
            <div class="search-box">
                <form method="post" action="contact.html">
                    <div class="form-group">
                        <input type="search" name="search-field" placeholder="What do you want to learn?" required />
                        <Link to="/searchresult">  <button type="submit"><span class="icon fa fa-search"></span></button> </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Search;