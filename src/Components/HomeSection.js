import React, { Component } from 'react';

class PicturesNav extends Component{
 	constructor(props) {
    super(props);
    this.state = {presedentSelected:"George H. W. Bush"};
 	}


render(){
	return(
		<div className="div_imgs">
			<span>
				<p>Donald Trump</p>
				<article >
					<p>
						Born: June 14, 1946 (age 72)<br/>
						President :45th<br/> 
						Political party: Republican<br/>
					</p>
				</article>
			</span>
			<span>
				<p>Barack Obama</p>
				<article >
					<p>
						Born: August 4, 1961 (age 57)<br/>
						President :44th<br/> 
						Political party: Democratic<br/>
					</p>
				</article>
			</span>
			<span>
				<p>George W. Bush</p>
				<article >
					<p>
						Born: July 6, 1946 (age 72)<br/>
						President :43rd<br/> 
						Political party: Republican<br/>
					</p>
				</article>
			</span>
			<span>
				<p>Bill Clinton</p>
				<article >
					<p>
						Born: August 19, 1946 (age 72)<br/>
						President :42th<br/> 
						Political party: Democratic<br/>
					</p>
				</article>
			</span>
			<span>
				<p>George H. W. Bush</p>
				<article >
					<p>
						Born: June 12, 1924 – November 30, 2018<br/>(age 94)<br/>
						President :41th<br/> 
						Political party: Republican<br/>
					</p>
				</article>
			</span>
		</div>
		);
	}
}
export default PicturesNav;

