import { useRef } from 'react'
import { useState, useEffect } from 'react'
import DisplayCount from './components/DisplayCount'
import NavBar from './components/NavBar'
import './index.css'

function App() {

  const [text, setText] = useState("")
  const [words, setWords] = useState(0)
  const [characters, setCharacters] = useState(0)
  const [sentences, setSentences] = useState(0)
  const [paragraphs, setParagraphs] = useState(0)
  const [longestWord, setLongestWord] = useState("")

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [])
  


  const calculateWords = (txt) => {
    if(txt === ""){
      setWords(0);
      setLongestWord("");
      return;
    }
      let splitted_text = txt.split(" ");
      for ( let text2 of splitted_text) {
        if (longestWord.length < text2.length) {
          setLongestWord(text2)
        }
      }
      setWords(splitted_text.length);
  }

  const calculateCharacters = (txt) => {
    if(txt === ""){
      setCharacters(0);
      return;
    }
    setCharacters(txt.length);
  }

  function calculateSentences(txt) {
    if(txt === ""){
      setSentences(0);
      return;
    }
    // Define a regular expression pattern for identifying sentences
    const sentencePattern = /(?<!\w\.\w.)(?<![A-Z][a-z]\.)(?<=\.|\?)\s/g;
    const sentences = txt.split(sentencePattern);
    setSentences(sentences.length);
}

  const calculateParagraphs = (txt) => {
    if(txt === ""){
      setParagraphs(0);
      return;
    }    
    let splitted_text = txt.split("\n");
    setParagraphs(splitted_text.length-1);
  }

  const handleChange = (e) => {
    let txt = e.target.value;
    setText(txt);
    calculateWords(txt);
    calculateCharacters(txt);
    calculateSentences(txt);
    calculateParagraphs(txt);
  }

  return (
    <>
    <NavBar/>
    <div className="bg-slate-200 h-screen">
    <div className='flex justify-around w-2/3 h-20 mx-auto bg-white mb-5'>
     <DisplayCount title={"Words"} count={words} />
     <DisplayCount title={"Characters"} count={characters} />
     <DisplayCount title={"Sentences"} count={sentences} />
     <DisplayCount title={"Paragraphs"} count={paragraphs} />
    </div>
    <textarea ref={inputRef} placeholder=" Paste your text here..." type='text' className='flex items-center w-2/3 h-2/3 mx-auto' onChange={handleChange}>{text}</textarea>
    <div className='flex items-center w-2/3 h-20 mx-auto bg-white mt-5'>   Longest Word: {longestWord}</div>
    </div>
    </>
  )
}
export default App
