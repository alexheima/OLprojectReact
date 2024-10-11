import me from '/Users/alexkaramanov/Desktop/OLprojectReact/src/assets/me.jpeg'

export default function About(){
    return (

         <main className="m-0">
 <p className='text-3xl text-center p-2 text-white' >About</p>
        <article className="flex flex-row flex-wrap justify-center gap-3 m-2" >
            <img src={me} alt="Alex Karamanov" className="w-80 "/>
            <p className='w-80 text-white pl-2'>Alex Karamanov is a outdoor & portrait photographer based   in Martigny, Southwest of Switzerland.
                <br/>  <br/>

                By following his passion to photography, he captures authentic moments inspired by nature and pursuits visual storytelling: His work mainly focuses on the outdoors, adventure and lifestyle portraits. 
                <br/>  <br/>
                
                Through camera, he wants to inspire people to escape a routine and feel more like a home outdoors.
                <br/>  <br/>
                Available for travel and photography projects worldwide, feel free to contact Alex to bring your projects to life.</p>

        </article>    
      
         </main>
        
  
    )
}