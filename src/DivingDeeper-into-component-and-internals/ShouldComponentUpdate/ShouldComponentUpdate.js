import React, { useState } from "react";
import Counter1 from "./Counter1";
import Counter2 from "./Counter2";


const ShouldComponentUpdate = () => {

// Using useState hooks for defining state
const [counter1, setCounter1] = useState(0);

const increase1 = () => {
	setCounter1(counter1 + 1);
};
const [counter2, setCounter2] = useState(0);

const increase2 = () => {
	setCounter2(counter2 + 1);
};
	
return (
	<div className="container">
	<div>
		<Counter1 value={counter1} onClick={increase1} />
	</div>
	<div>
		<Counter2 value={counter2} onClick={increase2} />
	</div>
	</div>
);
};

export default ShouldComponentUpdate;
