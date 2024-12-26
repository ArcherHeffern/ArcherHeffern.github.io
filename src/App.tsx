import './App.css'
import Showcase from './Showcase'

function App() {

  return (
    <div>
      <h1>
        Archer Heffern
      </h1>
      <p>
        Prev @LinkedIn - 5 previous SWE Internships - Head CS TA
      </p>
      <h1>Projects</h1>
      <div id='project-container'>
        <Showcase {...{ 
          image_src: './casm_demo.gif', 
          title: 'Casm', 
          // description: 'Visualizer and Interpreter for Brandeis OS classes mock assembly language', 
          links: [
            { name: 'demo', url: './casm.html' }, 
            { name: 'github', url: 'https://github.com/archerheffern/casm' },
            { name: 'youtube (todo)', url: 'todo' }
            ], 
          technologies: [
            'C', 
            'Raylib'
          ],
        }} 
        />
        <Showcase {...{ 
          image_src: './party.gif', 
          title: 'Party Mode', 
          // description: 'Embedded Party System. Song playing, queueing, searching, and downloading CLI tool with lights integration, and door security system using facial recognition', 
          links: [
            { name: 'demo', url: './party_button.html' }, 
            { name: 'report', url: 'https://drive.google.com/file/d/110bgij8KvjR3hpskTRymmuvgzvhMYxr9/view?usp=drive_link' },
            { name: 'github', url: 'https://github.com/eliorakruman/pesst'}
          ], 
          technologies: [
            'Raspberry PI WH', 
            'Micropython'
          ],
        }} 
        />
      </div>
    </div>
  )
}

export default App
