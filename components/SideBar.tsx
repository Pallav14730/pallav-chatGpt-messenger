'use client'

import { signOut, useSession } from "next-auth/react"
import NewChat from "./NewChat"
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from "../firebase";
import { collection } from "firebase/firestore";
import ChatRow from "./ChatRow";


function SideBar() {

  const { data:session } = useSession();

  const [chats,loading,error] = useCollection(
    session && collection(db,'users',session.user?.email!,'chats')
  );
  return (
    <div className="p-5 flex flex-col h-screen">
        <div className="flex-1">
            <div>
                {/* NewChat */}
                <NewChat />
                <div>
                    {/* ModelSelection */}
                </div>
                {chats?.docs.map((chat)=>(
                    <ChatRow key={chat.id} id={chat.id} />
                ))}
                {/* ChatRows */}
            </div>
        </div>
        {session && (
          <img onClick={()=> signOut()} src={session.user?.image!} alt="profile-picture" className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50" />
        )}
    </div>
  )
}

export default SideBar