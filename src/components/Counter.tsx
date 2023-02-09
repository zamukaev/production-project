import { FC, useState } from "react";
import styles from "./Counter.module.scss";
interface CounterProps {

}

const Counter: FC<CounterProps> = () => {
	const [count, setCount] = useState<number>(0)
	return (
		<div>
			<h1>{count}</h1>
			<button className={styles.button} onClick={() => setCount((prev) => prev += 1)} type="button">Click</button>
		</div >
	);
}

export default Counter;