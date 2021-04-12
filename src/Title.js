import Search from "./Search"

const Title = (arg) => {
    return(
        <section class="page-title">
            <div class="auto-container">
                <h1>{arg.data}</h1>

               <Search />           
            </div>
        </section>
    );
}

export default Title;