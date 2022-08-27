import React,{Component} from "react";

import './pro.css'

function X() {


return(
<div>

    <div className="x">
        <div className="y">
<h2 className="FOOD">italian food</h2>
        
            <h4 className="Hello">pizza section</h4>
          
           
            <p className="pizza" >Pizza is a dish of Italian origin consisting of a usually round, flat base of
                leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is
                then baked at a high temperature, traditionally in a wood-fired oven. A small pizza is sometimes called
                a pizzetta</p>



</div>
</div>

                <div className="col-4">
        <h3 className="PIZZATYPE"> Greek Pizza.</h3>
        {<img className="photo" src="https://cdnimg.webstaurantstore.com/uploads/blog/2016/8/onions.jpg"/>}
        {<br/>}
        <p className="PRAGRAPH">Greek pizza was created by Greek immigrants who came to America and were introduced to Italian pizza.
            Greek-style pizza, especially popular in the New England states, features a thick and chewy crust cooked in
            shallow, oiled pans, resulting in a nearly deep-fried bottom. While this style has a crust that is puffier
            and chewier than thin crust pizzas, its not quite as thick as a deep-dish or Sicilian crust..</p>
    </div>
    <div className="col-4">
        <h3 className="PIZZATYPE"> California Pizza</h3>
      {  <img className="photo" src="https://cdnimg.webstaurantstore.com/uploads/buying_guide/2014/11/pizzatypes-gourmet.jpg"/>}
      {<br/>}
        <p className="PRAGRAPH">California pizza, or gourmet pizza, is known for its unusual ingredients. This pizza got its start back in
            the late 1970s when Chef Ed LaDou began experimenting with pizza recipes in the classic Italian restaurant,
            Prego. He created a pizza with mustard, ricotta, pate, and red pepper, and by chance, served it to Wolfgang
            Puck. Impressed with LaDous innovative pie, Puck invited him to be a head pizza chef at his restaurant. It
            was here that LaDou came up with over 250 unique pizza recipes that eventually formed the menu of the chain
            restaurant California Pizza Kitchen</p>
    </div>

    <div className="col-4">
        <h3 className="PIZZATYPE"> Detroit Pizza </h3>
      
     { <img className="photo" src="https://cdnimg.webstaurantstore.com/uploads/blog/2019/3/blog-types-pizza_in-blog-7.jpg"/>}

     {<br/>}
        <p className="PRAGRAPH">Reflecting the citys deep ties to the auto industry, Detroit-style pizza was originally baked in a square
            automotive parts pan in the 1940s. Detroit pizza is first topped with pepperoni, followed by brick cheese
            which is spread to the very edges of the pan, yielding a caramelized cheese perimeter. Sauce is then spooned
            over the pizza, an order similar to Chicago-style pizza. This pizza features a thick, extra crispy crust
            that is tender and airy on the inside</p>
    </div>

 
<div className="w">


    <p className="PRAGRAPH">Its easy to take pizza for granted. Its your go-to when you need an easy meal at home or for an office event. But dont forget that a good pie can be elevated to gourmet cooking with the right combination of crust, sauce, cheese, toppings. It’s one of the most popular items to order, and we have the pizza statistics to prove it,</p>
</div>


</div>



)


}


export default X;