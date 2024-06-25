import { useState } from "react"; // hook
import Rainbow from "./Rainbow";

export default function RainbowWrapper() {

    const [ loaded, setLoaded ] = useState(false);

    return (
        <div>
            <input 
                type="checkbox" 
                checked={loaded}
                onChange={ () => setLoaded(!loaded) } 
            />
            <span>Charger le composant Rainbow</span>
            
            { loaded &&  
                <Rainbow defaultColor="#ccffee" speed={6000} />
            }   
            
        </div>
    )

}