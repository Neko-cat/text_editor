import './App.css'
import React from 'react'
import { useState } from 'react'
import Contributions from './Components/Contributions'
import Header from './Components/Header'
import TextEditor from './Components/TextEditor'
import Ws from './Utils/Ws'
import User from './Components/User'

function App() {

  const [value, setValue] = useState([
    {
        type: 'paragraph',
        children: [{ text: '' }],
    },
  ])

  const [allValues, setAllValues] = useState([])

  const [screenStatus, setScreenStatus] = useState('fetch')

  const postData = () => {
    setScreenStatus('loading')
      const textConcat = []
      value.map(line => textConcat.push(line.children[0].text))

      setTimeout(() => {
        Ws(`https://moderation.logora.fr/predict?text=${textConcat.join('%20')}`, 'GET').then(res1 => {
          Ws(`https://moderation.logora.fr/score?text=${textConcat.join('%20')}&votes=${Math.floor(Math.random() * 100)}`, 'GET').then(res2 => {
            setScreenStatus('fetch')
            setAllValues([...allValues, {text: textConcat.join("\r\n"), prediction: res1.prediction[0], score: res2.score}])
          }).catch(() => setScreenStatus('error'))
        
        }).catch(() => setScreenStatus('error'))
        }, 300)
  }

  return (
    <div className="content-wrapper">
      <div className="user-wrapper">
        <User user='John Doe'/>
      </div>
      <div className="text-wrapper">
        <Header>Editeur de texte</Header>
        <TextEditor screenStatus={screenStatus} value={value} OnChange={(newText) => setValue(newText)} OnClick={() => postData()}/>
        <Header>Liste des contributions</Header>
        <Contributions allValues={allValues}></Contributions>
      </div>
    </div>
  );
}

export default App;
