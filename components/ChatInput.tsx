"use client"

import toast, { Toaster } from 'react-hot-toast';
import { PaperAirplaneIcon } from "@heroicons/react/24/solid"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { useSession } from "next-auth/react"
import { FormEvent, useState } from "react"
import { db } from "../firebase"

type Props = {
    chatId: string
}

function ChatInput({ chatId }: Props) {

    //TODO: UseSWR to get the model
    const model = 'text-davinci-003'

    const [prompt, setprompt] = useState('')
    const { data: session } = useSession();

    const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!prompt) return;

        const input = prompt.trim()
        setprompt("")

        const message: Message = {
            text: input,
            createdAt: serverTimestamp(),
            user: {
                _id: session?.user?.email!,
                name: session?.user?.name!,
                image: session?.user?.image!
            }
        }

        await addDoc(collection(db, 'users', session?.user?.email!, 'chats', chatId, 'messages'), message)

        // toast notification to say loading

        const notify = toast.loading('ChatGpt is Thinking...');



        await fetch('/api/askQuestion', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt: input, chatId, model, session
            })
        }).then(()=>{
            //toast notification to say successfull
            toast.success('ChatGpt is Responded!',{
                id:notify
            })
        })


    }
    return (
        <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm  ">
            <form onSubmit={sendMessage} className="p-5 space-x-5 flex">
                <input
                    value={prompt}
                    onChange={e => setprompt(e.target.value)}
                    className='outline-none bg-transparent flex-1 disabled:cursor-not-allowed disabled:text-gray-400'
                    disabled={!session}
                    type="text" placeholder="Type your Message here..." />

                <button disabled={!prompt || !session}
                    className="bg-[#11A37F] hover:opacity-50 text-white font-bold px-4 py-2 rounded-lg disabled:text-gray-400 disabled:cursor-not-allowed"
                >
                    <PaperAirplaneIcon className="h-5 w-5" />
                </button>
            </form>
            <div>

            </div>
        </div>
    )
}

export default ChatInput