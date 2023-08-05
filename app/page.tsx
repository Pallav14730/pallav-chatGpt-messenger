import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/outline'
function page() {
    return (
        <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
            <h1 className='text-5xl font-bold mb-20'>ChatGpt</h1>

            <div className='flex space-x-5 text-center'>
                <div>
                    <div className="flex flex-col items-center justify-center mb-5" >
                        <SunIcon className="h-8 w-8"/>
                        <h1>Examples</h1>
                    </div>
                    <div className="space-y-2">  
                        <p className="infotext">"Explain something to me"</p>
                        <p className="infotext">"What is the difference between a dog and a cat? "</p>
                        <p className="infotext">"What is the color of the sun?"</p>
                    </div>
                </div>


                <div>
                    <div className="flex flex-col items-center justify-center mb-5" >
                        {/* Sun icon */}
                        <BoltIcon className="h-8 w-8"/>
                        <h1>Capabilities</h1>
                    </div>
                    <div className="space-y-2">  
                        <p className="infotext">"Change the CHATGPT model to use"</p>
                        <p className="infotext">"Message are store in firebase firestore "</p>
                        <p className="infotext">"Hot toast Notification when CHATGPT is thinking"</p>
                    </div>
                </div>



                <div>
                    <div className="flex flex-col items-center justify-center mb-5" >
                        {/* Sun icon */}
                        <ExclamationTriangleIcon className="h-8 w-8"/>
                        <h1>Limitations</h1>
                    </div>
                    <div className="space-y-2">  
                        <p className="infotext">"May occasionally generate incorrect information"</p>
                        <p className="infotext">"May occasionally produce harmful instruction"</p>
                        <p className="infotext">"Limitations knowledge of worlds and events"</p>
                    </div>
                </div>


                
            </div>
        </div>
    )
}

export default page