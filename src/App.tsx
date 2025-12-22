import { useState } from "react";

function App() {
	const [value, setValue] = useState<number>(0);
	const [name, setName] = useState<string>("");
	const [nickname, setNickName] = useState<string>("");

	const increment = () => setValue(value + 1);
	const decrement = () => setValue(value - 1);

	const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value);
	const onChangeNickName = (event: React.ChangeEvent<HTMLInputElement>) => setNickName(event.target.value);
	return (
		<div>
			<p>
				현재 카운터 값은 : <b>{value}</b>
			</p>
			<button onClick={increment}>1 증가</button>
			<button onClick={decrement}>1 감소</button>

			<div>
				<input type="text" onChange={onChangeName} />
			</div>
			<div>
				<input type="text" onChange={onChangeNickName} />
			</div>

			<div>
				<b>이름 : {name}</b>
				<b>별명 : {nickname}</b>
			</div>
		</div>
	);
}

export default App;
