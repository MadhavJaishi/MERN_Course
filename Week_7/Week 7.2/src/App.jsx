import { useRecoilState, RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import { countAtom, evenSelector } from './store/atoms/count'
function App() {
  return <div>
    <RecoilRoot>
      <Count />
    </RecoilRoot>
  </div>
}
function Count() {
  const count = useRecoilValue(countAtom);
  return <div>
    <Buttons />
    <br /> <br />
    {count}
    <br /> <br />
    <EvenCountRenderer />
  </div>
}
function EvenCountRenderer() {
  const count = useRecoilValue(evenSelector);
  // Better way to do is to use useMemo
  // const isEven = useMemo(() => {
  //   return (count % 2 == 0) ? "It is even" : null;
  // }, [count])
  return <div>
    {(count % 2 == 0) ? "It is even" : null}
  </div>
}
function Buttons() {
  // const count = useRecoilValue(countAtom);
  // const setCount = useSetRecoilState(countAtom);
  // const [count, setCount] = useRecoilState(countAtom);
  const setCount = useSetRecoilState(countAtom);
  return <div>
    <button onClick={() => setCount(count => count + 1)}>Increase Count</button>
    <button onClick={() => setCount(count => count - 1)}>Decrease Count</button>
  </div>
}
export default App