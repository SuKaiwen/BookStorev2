import React from 'react'

function CriticCard() {
  return (
  <div>
    <h1 className = "bg-gray-600 font-bold text-center text-4xl py-5 lg:text-6xl text-gray-100">Recent Critic Reviews</h1>
    <div className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div className = "bg-gray-600 flex justify-center items-center" style = {{minHeight:"500px"}}>

            <div className = "w-4/5 flex-col bg-white shadow-lg rounded-lg overflow-hidden">
                <div className = "bg-gray-200 text-gray-700 text-lg px-6 py-4 flex justify-between">
                <div>
                    <p className = "font-bold">CoDex 1962</p>
                    <p className = "text-sm">Sjon</p>
                </div>
                <div className = "bg-yellow-500 w-12 h-12 flex justify-center items-center rounded-full font-bold text-gray-100">7</div></div>
                <div className = "flex px-6 py-4 justify-between">
                    <div className = "bg-blue-600 text-xs px-2 py-1 rounded-full border-gray-200 text-gray-200">Approved Critic</div>

                    <div className = "text-sm">June 10th 2021</div>
                </div>

                <div className = "px-6 py-4">
                    <div className = "text-sm" style = {{minHeight:"150px"}}>
    “This book is a Norse Arabian Nights. Each section is a honeycomb. Stories are nested in stories and crack open to reveal rumor and anecdote, prose poems, tendrils of myth. This abundance isn’t an empty show of virtuosity but rooted in Sjon’s belief in the power and obligation of old-fashioned storytelling…”</div>
                </div>

                <div className = "bg-gray-200 px-6 py-4">
                    <div className ="flex items-center pt-3">
                        <div className = "bg-yellow-500 w-12 h-12 flex justify-center items-center rounded-full font-bold text-gray-100">PS</div>
                        <div className ="ml-4">
                            <p className = "font-bold">Parul Sehgal</p>
                            <p className = "text-sm">Award Winning Critic since 1997</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className = "bg-gray-600 flex justify-center items-center" style = {{minHeight:"500px"}}>

                    <div className = "w-4/5 flex-col bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className = "bg-gray-200 text-gray-700 text-lg px-6 py-4 flex justify-between">
                            <div>
                                <p className = "font-bold">1984</p>
                                <p className = "text-sm">George Orwell</p>
                            </div>
                            <div className = "bg-blue-900 w-12 h-12 flex justify-center items-center rounded-full font-bold text-gray-100">10</div>
                        </div>
                        <div className = "flex px-6 py-4 justify-between">
                            <div className = "bg-blue-600 text-xs px-2 py-1 rounded-full border-gray-200 text-gray-200">Approved Critic</div>

                            <div className = "text-sm">June 8th 2021</div>
                        </div>

                        <div className = "px-6 py-4 min-h-1000">
                            <div className = "text-sm" style = {{minHeight:"150px"}}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore."</div>
                        </div>

                        <div className = "bg-gray-200 px-6 py-4">
                            <div className ="flex items-center pt-3">
                                <div className = "bg-red-500 w-12 h-12 flex justify-center items-center rounded-full font-bold text-gray-100">JS</div>
                                <div className ="ml-4">
                                    <p className = "font-bold">John Smith</p>
                                    <p className = "text-sm">Best Critic 2021</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        <div className = "bg-gray-600 flex justify-center items-center" style = {{minHeight:"500px"}}>

                    <div className = "w-4/5 flex-col bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className = "bg-gray-200 text-gray-700 text-lg px-6 py-4 flex justify-between"><div>
                            <p className = "font-bold">The Great Gatsby</p>
                            <p className = "text-sm">F. Scott Fitzgerald</p>
                        </div><div className = "bg-green-500 w-12 h-12 flex justify-center items-center rounded-full font-bold text-gray-100">8</div></div>
                        <div className = "flex px-6 py-4 justify-between">
                            <div className = "bg-blue-600 text-xs px-2 py-1 rounded-full border-gray-200 text-gray-200">Approved Critic</div>

                            <div className = "text-sm">June 1st 2021</div>
                        </div>

                        <div className = "px-6 py-4">
                            <div className = "text-sm" style = {{minHeight:"150px"}}>
                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."</div>
                        </div>

                        <div className = "bg-gray-200 px-6 py-4">
                            <div className ="flex items-center pt-3">
                                <div className = "bg-purple-500 w-12 h-12 flex justify-center items-center rounded-full font-bold text-gray-100">AT</div>
                                <div className ="ml-4">
                                    <p className = "font-bold">Adam Taylor</p>
                                    <p className = "text-sm">Peoples' Choice Winner 2017</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  </div>
  );
}

export default CriticCard;
