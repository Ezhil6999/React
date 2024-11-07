import Car from './Car.js';
import Apple from './Apple.js';
import Gun from './Guns.js';
function Vechical(){
    const brand_name = "Bucati"
    const model = "RTX 3080"
    const color = "red"
    const class_props = {"color":color,"type":"crispy"}
    const apples_list = [
        {"color":color,"type":"crispy"},
        {"color":"green","type":"fry"},
        {"color":"dark golden","type":"jelly"}
    ]
    const number_display_no_unique_for_key = [
        1,1,2,3,4,4,45,566,677,7
    ]
    return (
      <>
      <h1>Welcome to Vechical Show-room</h1>
      { brand_name!==undefined && model !== undefined?
      <Car brand = {brand_name} model  = {model} /> : null}
      { class_props.color !== undefined &&  class_props.type !== undefined?
      <Apple values = {class_props} />:null}
      <Gun/>
      <ul>
        {apples_list.map((val) => <li key={val.color}><Apple values= {val}/></li>)}

      </ul>
      <ul>
        {number_display_no_unique_for_key.map((val,index) => {return <p key={index}>{val}</p>
        })}
        
      </ul>
      </>
      
    );
};

export default Vechical;