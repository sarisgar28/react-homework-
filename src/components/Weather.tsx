import { FC } from "react";

interface WeatherProps {
  data: string;
}

const Weather: FC<WeatherProps> = ({ data }) => {
  
 


  return (
    <div >
    
    {data}
           
        
  
    </div>
  );
}

export default Weather