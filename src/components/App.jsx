import React from "react";
import Entry from "./Entry";
import emojipedia from '../emojipedia';

/**
 *   {
      id: 1,
      emoji: "💪",
      name: "Tense Biceps",
      meaning:
        "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
    },
 
 */

function createEntry(emojiTerm) {
  return (
    <Entry
    key={emojiTerm.id}
    emoji={emojiTerm.emoji}
    name={emojiTerm.name}
    description={emojiTerm.meaning}

    
    ></Entry>
  )
}



function App(props) {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">


      {emojipedia.map(createEntry)}

        {/* <Entry
          emoji={emojipedia[0].emoji}
          name={emojipedia[0].name}
          description={emojipedia[0].meaning}
        
        ></Entry>

           <Entry
          emoji={emojipedia[1].emoji}
          name={emojipedia[1].name}
          description={emojipedia[1].meaning}
        
        ></Entry>

           <Entry
          emoji={emojipedia[2].emoji}
          name={emojipedia[2].name}
          description={emojipedia[2].meaning}
        
        ></Entry> */}
   

     

      </dl>
    </div>
  );
}

export default App;
