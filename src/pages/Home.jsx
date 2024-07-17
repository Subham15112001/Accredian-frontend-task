import React, { useState } from 'react'
import { ShowCard,ModelForm } from "../components/index.js";

function Home() {

  const [showModel,useShowModel] = useState(false);

  return (
    <>
      <ShowCard onShow={() => useShowModel(true)} isVisible={showModel} />
        {showModel && <ModelForm onClose={()=> useShowModel(false)} isVisible={showModel}/>}
    </>
  )
}

export default Home