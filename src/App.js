import './App.css';
import 'bootstrap/dist/css/bootstrap.css';



function App() {
  return (
    <div className="App">
      <header>
        <h1>Txt2Speak</h1>
        <h5>Small text to speech tool created in React</h5>
      </header>


      <br/>
      <br/>

<section className="row">

      <aside className="col">
      <span className="ActSymbol">🗣️ </span>
      <br/>
      <br/>


      <input placeholder="Text"/>
      <br/>
      <br/>
          
      <button>Change to speech</button>
      </aside>


      <aside className="col">
      <span className="ActSymbol">🔊 </span>
      <br/>
      <br/>


      <span className="ActLabel">Speech result</span>

      <p className="SpeechLabel">Speach output: eget viverra justo, sit amet lacinia ex. Proin molestie vulputate justo, eget 
      porttitor lacus gravida quis. Vestibulum non consectetur lectus, sit amet ornare est. Vivamus justo 
      urna, placerat quis tempus at, commodo vitae ipsum. Etiam rhoncus erat in aliquet euismod. Praesent 
      placerat lectus id efficitur vehicula. Praesent tempus, mauris a fringilla fermentum, metus quam vulputate 
      magna, et commodo ligula odio sollicitudin augue. </p>
      </aside>

</section>

    </div>
  );
}

export default App;
