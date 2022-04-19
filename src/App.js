import { React, useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import FavItem from "./components/FavItem";
import "./App.css";
import Axios from "axios";
import { FaSearch } from "react-icons/fa";
import { FcSpeaker } from "react-icons/fc";
import {AiFillDelete} from "react-icons/ai";
import {MdFavorite} from "react-icons/md";
import {deleteHandler} from "./redux/actions";
import {addHangler} from "./redux/actions";

function App() {
  const [state,setState]=useState("")
  const [data,setData]=useState("")
  const [searchWord, setSearchWord]= useState("")
  const favs =useSelector(state=>state.favs);
  const dispatch=useDispatch();

  useEffect(()=>{

  },[])

    const deleteHandler = (id)=>{
      setState(state.filter(item =>item.id !==id))
    }

  function getMeaning(){
      console.log(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`)

      Axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`
    ).then((response)=>{
      setData(response.data[0]);
    });
  }

  function playAudio() {
    let audio = new Audio(data.phonetics[0].audio);
    audio.play();
  }

  return (
    <div className="App">
      <h1>Free dictionary</h1>
        <div className="favs">
            <p>Favs</p>
            <ul className="favs">
                {favs.map((item,index) =>{
                    return <FavItem key={item.id} remove={deleteHandler} item={item}/>
                })}
            </ul>
        </div>
      <div className="searchBox">

        <input type="text"
               placeholder={'Enter ur word'}
               onChange={(e) => {
                   setSearchWord(e.target.value);
               }
        }/>
        <button
            onClick={()=>{
                getMeaning();
            }}>
            <FaSearch size="20px" /></button>
      </div>
      {data && (
          <div className="showResults">
            <h2>{data.word}{""}
            <button onClick={()=>{
            playAudio();
            }}>
              <FcSpeaker size="26px" />
            </button>
              <button onClick={()=>dispatch(addHangler(data.word))}>
                  <MdFavorite size="26px" />
              </button></h2>
            <h4>Parts of speech</h4>

            <p>{data.meanings[0].partOfSpeech}</p>

            <h4>Definition:</h4>

            <p>{data.meanings[0].definitions[0].definition}</p>

            <h4>Example:</h4>

            <p>{data.meanings[0].definitions[0].example}</p>

          </div>
      )}
      </div>
      );
}

export default App;
