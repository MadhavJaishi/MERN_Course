import './App.css'
import { RecoilRoot, useRecoilValue, useRecoilValueLoadable,useRecoilStateLoadable } from 'recoil';
import { todosAtomFamily } from './atoms';
import { Suspense } from 'react';

function App() {
  return <RecoilRoot>
    {/* Instead  useRecoilValueLoadable, we can also use Suspense as below*/}
    <Suspense fallback={"loading..."} > 
      <Todo id={1}/>
      <Todo id={2} />
    </Suspense>
  </RecoilRoot>
}

function Todo({id}) {
  const [todo, setTodo] = useRecoilStateLoadable(todosAtomFamily(id));
  if (todo.state == "loading") {
    return <div>
      loading...
    </div>
  }
  else if (todo.state == "hasValue") {
    return (
      <>
        {todo.title}
        {todo.description}
        <br />
      </>
    )
  }
  else if (todo.state === "hasError") {
    return <div>
      Error has occured
    </div>
  }
  
}

export default App