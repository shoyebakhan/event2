import React from "react";
import "./aboutus.css"
export default function About(){
    return(
        <>
        <section className="img">
            <div className="filtered p-14 iPhone4and4S:p-6 ">
                <div className="info flex-col  align-middle text-wrap w-[400px] iPhone4and4S:w-[250px] h-auto p-6 ml-[10px]">
                    <h1 className="text-3xl text-center mb-6">About Us</h1>
                    <p className="text-xl leading-7 iPhone6+and7+and8+:hidden iPhone4and4S:hidden">Here we are providing you a greate way to communicate all tha necessary  informations about your wedding or other events . Our website acts as a dedicated online plateform that serves as the center hub of information about your events . So that you can save your precious hours.   </p>
                    <p className="hidden iPhone4and4S:block iPhone6+and7+and8+:block">Here we are providing you a greate way to communicate all tha necessary  informations about your wedding or other events .</p>
                </div>
            </div>
        </section>
        
        </>
    )
}
