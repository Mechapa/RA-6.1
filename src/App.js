import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useRef} from 'react';
import WatchList from './components/WatchList';

function App() {
  const [titleValue, setTitleValue] = useState('');
  const [timeZoneValue, setTimeZoneValue] = useState('');
  const [watches, setWatches] = useState([]);
  
  const inputRef = useRef(null);

  const addWatch = ()  => {
    if (!titleValue) {
      return;
    }
    setWatches([...watches, {
      id: Date.now(),
      title: titleValue,
      timeZone: timeZoneValue
    }]);
    setTitleValue('');
    setTimeZoneValue('');
  };

  const removeWatch = (id)  => {
      setWatches(watches.filter( watch => watch.id !== id));
  }

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus()
  }, []);

  return (
    <div className='App'>
      <div className='class-form'>
        <label htmlFor='title'>Название</label>
        <input value={titleValue} onChange={ e => setTitleValue(e.target.value) } id='title' ref={inputRef} required/>
        
        <label htmlFor='timeZone'>Временная зона</label>        
        <input value={timeZoneValue} onChange={ e => setTimeZoneValue(e.target.value)} id='timeZone' type='number' min='0' required/>

        <button onClick={addWatch}>Добавить</button>
      </div>
      <WatchList watches={watches} removeWatch={removeWatch} />
    </div>
  );
}

export default App;
