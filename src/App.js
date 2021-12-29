import './App.css'
// import Speech from 'speak-tts'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
    return (
        <div className="App">
            <header>
                <h1>Txt2Speech</h1>
                <h5>Speech synthezizer React app</h5>
            </header>

            <section className="row">
                <aside className="col">
                    <span className="ActSymbol">🗣️ </span>
                    <br />
                    <br />

                    <input placeholder="Text" />
                    <br />
                    <br />

                    <button>
                        <span className="OptStyle">👨</span> Male
                    </button>
                    <button>
                        <span className="OptStyle">👩</span> Female
                    </button>
                    <button>
                        <span className="OptStyle">🧒</span> Small child
                    </button>
                    <button>
                        <span className="OptStyle">🤖</span> Robot
                    </button>

                    <button>
                        <span className="OptStyle">🐦</span> Bird
                    </button>
                </aside>
            </section>
        </div>
    )
}

export default App
