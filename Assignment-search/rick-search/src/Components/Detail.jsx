import "./Detail.css"
export const Popup = ({ user, togglePopup }) => {

    return (
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={togglePopup}>x</span>
                <div className="character detail-img">
                    <img src={user.image} alt="" />
                    <div>
                        <div>{user.name}</div>
                        <div className="character_name">
                            <div className={user.status == "Alive" ? "dot-alive" : user.status == "unknown" ? "dot-unknown" : "dot-dead"}></div>
                            <div >{user.status}</div> -
                            <div>{user.species}</div>
                        </div>

                    </div>
                </div>
                

                <div >
                    <div className="character-details" >
                        <div>
                            <p className="grey">Gender</p>
                            <p className = "user">{user.gender}</p>
                        </div>
                        <div>
                            <p className="grey">Location</p>
                            <p className="user">{user.location.name}</p>
                        </div>
                    </div>
                    <div className="character-details">
                        <div>
                            <p className="grey">Species</p>
                            <p className="user">{user.species}</p>
                        </div>
                        <div>
                            <p className="grey">Origin</p>
                            <p className="user">{user.origin.name}</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};


