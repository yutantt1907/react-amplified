import React,{useState} from "react";

const TelRoad= (onSubmit)=>{
    const onReloadSubmit=(event)=>{
        event.preventDefault();
        onSubmit();
    };
    return(
        <div className="container">
            <label for="telroad">
                <imput type="submit"id="telroad" onSubmit={onReloadSubmit} className="ui button">
                    <div>
                        <p>リロード</p>
                    </div>    
                </imput>    

            </label>
        </div>
    )
}
export default TelRoad;