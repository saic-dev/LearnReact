import Love from './assets/Love.png'
function Card(){
    return (
        <div className="card">
            <img className="cardimg" alt="profile Image" src={Love}></img>
            <h2 className='cardtitle'>Love</h2>
            <p className='carddesc'>I am a Chef.</p>

        </div>
    );
}
export default Card