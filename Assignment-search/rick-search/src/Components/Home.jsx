import { useEffect, useState } from "react";
import "./home.css"
import { BiSearch } from "react-icons/bi";
import { GrNext, GrPrevious } from "react-icons/gr";
import { Error } from "./Error";
import { Popup } from "./Detail";

export const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [data, setdata] = useState();
    const [search, setsearch] = useState("");
    const [page, setpage] = useState(1);
    const [user,setuser] = useState()
    
    useEffect(() => {
        getdata()
    }, [search, page])
    const getdata = async () => {

        let res = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}&name=${search}`);
        let data = await res.json();
        setdata(data.results);

    }
    const pagination = (value) => {
        setpage(page + value)
    }
    const debounce = (func, delay) => {
        let debounceTimer;
        return function () {
            const context = this;
            const args = arguments;
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => func.apply(context, args), delay);
        };
    };

    const update = debounce(function (e) {
        setsearch(e.target.value)
    }, 1000);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    console.log(user)
    return <div className="main-box">
        <h1 className="heading">Rick and Morty Search</h1>
        <div className="search-box">
            <BiSearch size={25} />
            <input onChange={(e) => { update(e) }} type="text" name="" id="" placeholder="search for a contact" />
        </div>
        {
            data ? data.map((e) => {
                return <div className="container" onClick={() => { togglePopup()
                 setuser(e) } }>
                    <div className="character">
                        <img src={e.image} alt="" />
                        <div>{e.name}</div>
                    </div>
                    <div className="character_name">
                        <div className={e.status == "Alive" ? "dot-alive" : e.status == "unknown" ? "dot-unknown" : "dot-dead"}></div>
                        <div >{e.status}</div> -
                        <div>{e.species}</div>
                    </div>
                </div>

            }) : <Error />
        }
        {isOpen && <Popup
            user={user}
            togglePopup={togglePopup}
        />}
     
        <div className="pagination">
            <GrPrevious size={20} onClick={() => {
                if (page > 1) pagination(-1)
            }} />
            <p>{page}</p>
            <GrNext size={20} onClick={() => {
                if (data != undefined) pagination(1)
            }} />
        </div>

        

    </div>
}