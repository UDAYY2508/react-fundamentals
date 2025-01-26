import Profilepic from './assets/my-profile-pic.jpeg'

function Card(){
    return(
        <div className="card">
            <img alt="not loaded" src={Profilepic} className='profileImg'></img>
            <h2 className='cardTittle'>Uday</h2>
            <p className='cardPara'>Sri Balaji University</p>

        </div>
    );

}

export default Card;