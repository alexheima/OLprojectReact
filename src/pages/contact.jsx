import conBack from "/Users/alexkaramanov/Desktop/OLprojectReact/src/assets/contact.jpg"
export default function Contact(){
    return (
        <main className=" text-white">
            <img src={conBack} alt="background" className="w-100vw"/>
                   <div className="flex flex-col mx-auto my-auto justify-center w-[70vw]">
                        <h2 className="mx-0 mb-2 mt-4 text-center w-[70vw] text-3xl">Say hello</h2>
                        <p className="mx-0 mb-1 text-center w-[70vw]">For press and business inquiries please fill out the form below. </p>
    
                        <form action="mailto:oleksii.karamanov@powercoders.org" method="post" className="pt-2"> 
                             <div className="">
                                  <input name="name" type="text" className="w-[70vw] h-10 m-auto block hover:border-zinc-400 border-2 rounded my-2" id="name" placeholder="Name"/>
                             </div>
                             <div className="">
                                  <input name="email" type="email" className="w-[70vw] h-10 m-auto block hover:border-zinc-400 border-2 rounded my-2" id="email" placeholder="Email"/>
                               </div>
                             <div className="">
                                  <input name="subject" type="text" className="w-[70vw] h-10  m-auto block hover:border-zinc-400 border-2 rounded my-2" id="subject" placeholder="Subject"/>
                               </div>
                             <div className="">
                                  <textarea name="message" rows="5" className="w-[70vw] m-auto block hover:border-zinc-400 border-2 rounded my-2" id="message" placeholder="Message"></textarea>
                             </div>
                             <div className="">
                                  <input name="submit" type="submit" className="w-[300px] h-10 block mx-auto my-4 rounded-full bg-[#e25f63] font-bold transition-[all_0.4s_ease-in-out] hover:bg-[#333] " id="submit" value="Send"/>
                             </div>
                        </form>
                   </div>
    </main>
    )
}