import { useMemo, useState } from "react"

const getAverage = (numbers: number[]) => {
  console.log("평균값을 계산중입니다.")

  if (numbers.length === 0) return 0

  const sum = numbers.reduce((acc, cur) => acc + cur)
  return sum / numbers.length
}

function App() {
  // useCallback
  // useCallback은 useMemo와 상당히 비슷한 함수입니다. 주로 렌더링 성능을 최적화해야 하는 상황에서 사용합니다.
  // 이 훅 (hook)을 사용하면 만들어 놓았던 함수를 재사용할 수 있습니다.

  // useCallback의 첫 번째 파라미터에는 생성하고 싶은 함수를 넣고,
  // useCallback의 두 번째 파라미터에는 배열을 넣으면 된다.

  const [list, setList] = useState<number[]>([])
  const [number, setNumber] = useState<string>("")

  const onInsert = () => {
    const newList = list.concat(parseInt(number))
    setList(newList)
    setNumber("")
  }

  const average = useMemo(() => getAverage(list), [list])

  return (
    <div>
      <input
        type="text"
        value={number}
        onChange={(event) => setNumber(event.target.value)}
      />
      <button onClick={onInsert}>등록</button>

      <ul>
        {list.map((item: number, index: number) => {
          return <li key={index}>{item}</li>
        })}
      </ul>

      <div>
        <b>평균 값: {average}</b>
      </div>
    </div>
  )
}

export default App
