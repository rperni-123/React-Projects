import react from 'react';

function Display(props) {

    const renderList = ({myCity}) => {
        if(myCity){   
                 
            return myCity.map((item) => {
                return(
                    <div key={item._id}>
                        <h2>{item.city_name}</h2>
                        
                    </div>                 
                    
                )
            })
        }
        else{
            
            return(
                <h1>error</h1>
            )
        }

    }

    return(
        <div>
            <center>
                {renderList(props)}
            </center>
        </div>
    )
}
export default Display