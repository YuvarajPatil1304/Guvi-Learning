import React from "react";



function Card({e={}}) {
    return (
        <>
            <div className="Col">
                <div className="head">
                    <div>
                        <h5>{e.title}</h5>
                        <h1>${e.pricing}/month</h1>
                    </div>
                </div>
                <hr className="solid"></hr>
                <div className="body">
                    <p className="body-element">{e.mark1}{' '}{e.e1}</p>
                    <p className="body-element">{e.mark2}{' '}{e.e2}</p>
                    <p className="body-element">{e.mark3}{' '}{e.e3}</p>
                    <p className="body-element">{e.mark4}{' '}{e.e4}</p>
                    <p className="body-element">{e.mark5}{' '}{e.e5}</p>
                    <p className="body-element">{e.mark6}{' '}{e.e6}</p>
                    <p className="body-element">{e.mark7}{' '}{e.e7}</p>
                    <p className="body-element">{e.mark8}{' '}{e.e8}</p>
                    <button className="Button">
                        <div className="Button-Text">Button</div>
                    </button>
                </div>
            </div>
        </>
    )
}
 
export default Card;