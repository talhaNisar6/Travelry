import './../components/FrontPage.css';
import mountainsgreen from './../images/mountainsgreen.jpeg';
import chinaborder from './../images/chinaborder.jpeg';
import faisalmosque from './../images/faisalmosque.jpeg';

const FrontPage = () => {
    return(

        <div className='frontPage'>
            <div className='textpart'>
                <h1 >Travel to any </h1>
                <h1 >Corner of</h1>
                <h1 >Pakistan</h1>
                <p>A tean of devoted and experienced tourism professionals will <br></br> provide you with the best advice and tips.</p>
                <div className='ExploreMore'>
                    <ul>
                        <li><div className='ExploreMoreChilds'>Location</div></li>
                        <li><div className='ExploreMoreChilds'>Date</div></li>
                        <li><div className='ExploreMoreChilds'>People</div></li>
                        <li><div className='ExploreMoreLastChild'>Explore More</div></li>
                    </ul>
                </div>
                <div className='popularSearches'><span><b>Popular Search:</b> </span><span>Lahore, Murree, Kaghan, Naran, Kashmir, Malam Jabba</span></div>
            </div>
            <div className='imagespart'>
                <div className='maountainsGreen'><img src={mountainsgreen} alt='mountainsGreen' /></div>
                <div className='chinaborder'><img src={chinaborder} alt='chinaborder' /></div>
                <div className='faisalmosque'> <img src={faisalmosque} alt='faisalmosque' /> </div>
            </div>
        </div>
    )
}

export default FrontPage;