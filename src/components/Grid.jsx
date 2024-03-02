import React from "react";
import Restaurant from "./Restaurant";
import oldJerusalem from "../assets/old_jerusalem.png"
import chickenGs from "../assets/chickenGs.jpeg"
import afghanimg from "../assets/afghan.png"
import birria from "../assets/birria.jpeg"
import cracked from "../assets/cracked.jpeg"
import oldMandarin from "../assets/oldMandarin.jpeg"
import halalGuys from "../assets/halalGuys.jpeg"
import dastarkhan from "../assets/dastarkhan.jpeg"
import mesopotamia from "../assets/mesopotamia.jpeg"
import hfc from "../assets/hfc.jpeg"


const Grid = () => {
    return (
            <div className="Grid" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: '20px' }}>
                <Restaurant 
                img= {oldJerusalem}
                name='Old Jerusalem'
                caption = 'Goated spot fr. This the place for your Shawarma and cheap too!'
                location= "2966 Mission St, San Francisco, CA 94110"
                website= "https://www.oldjerusalem.co/menu/" />
                <Restaurant 
                img= {chickenGs}
                name='Chicken Gs' 
                caption = 'Chicken sandwich soso good. Big Portion in the Financial District'
                location= "346 Kearny St, San Francisco, CA 94108"
                website= "https://chickengs.com/menu" />
                <Restaurant 
                img= {afghanimg}
                name='De Afghanan Kabob House' 
                caption = 'The Spot for Afghan food in downtown!!'
                location= "321 Kearny St, San Francisco, CA 94108, USA"
                website= "https://deafghanansf.com/menu" />
                <Restaurant 
                img= {hfc}
                name='Halal Fried Chicken' 
                caption = 'Cheap, quaint spot for fried chicken!'
                location= "911 E Duane Ave, Sunnyvale, CA 94085"
                website= "halalfriedchicken.dine.online" />
                <Restaurant 
                img= {halalGuys}
                name='Halal Guys' 
                caption = 'The classic. You have all heard of it'
                location= "336 O'Farrell St San Francisco, CA 94102"
                website= "https://thehalalguys.com/locations/336-ofarrell-street-san-francisco/" />
                <Restaurant 
                img= {dastarkhan}
                name='Halal Dastarkhan' 
                caption = 'Uzbeki Food. Try the Samosas, they are unreal'
                location= "1098 Sutter st, San Francisco, CA"
                website= "https://halaldastarkhan.com/menu/" />
                <Restaurant 
                img= {oldMandarin}
                name='Old Mandarin Islamic Restaurant' 
                caption = 'Halal Chinese food. Very rare in SF'
                location= "3132 Vicente St, San Francisco, CA 94116"
                website= "https://www.yelp.com/biz/old-mandarin-islamic-restaurant-san-francisco" />
                <Restaurant 
                img= {cracked}
                name='Cracked & Battered' 
                caption = 'Go to spot for brunch!!!'
                location= "1434 18th St, San Francisco, CA 94107"
                website= "https://crackedandbattered.com/menu" />
                <Restaurant 
                img= {mesopotamia}
                name='Mesopotamia Kitchen' 
                caption = 'Good Good Turkish Food'
                location= "3915 24th St, San Francisco, CA 94114"
                website= "https://mesopotamiakitchen.menufy.com/order" />
                <Restaurant 
                img= {birria}
                name='La Vaca Birria' 
                caption = 'Insane Birria!!!'
                location= "2962 24th St, San Francisco, CA 94110"
                website= "https://www.lavacabirria.com/" />                                         
            </div>
            
        )
}

export default Grid;
