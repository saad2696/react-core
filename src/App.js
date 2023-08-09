import { Suspense, lazy } from "react";
import "./App.css";
import ParentComponent from "./Components/ParentComponent";
import Counter from "./Components/Counter";
import FocusInput from "./Components/Refs/FocusInput";
import ClassTimer from "./Components/class-refs-I/ClassTimer";
import HookTimer from "./Components/hookTimer/HookTimer";
import DemoRefs from "./Components/class-refs-||/DemoRefs";
import FRParent from "./Components/ref-forwarding/FRParent";
import PortalDemo from "./Components/Portals/PortalDemo";
import ParentHoc from "./Components/HOC/ParentHoc";
const Home = lazy(() => import("./Components/Lazy-Load/Home"));
const About = lazy(() => import("./Components/Lazy-Load/About"));

function App() {
  let testPortal = "Portal Props";
  return (
    <div className="App">
      <ParentComponent />
      <p>---------------------------------------------------------------</p>
      <div>
        <h1>UseMemo Example</h1>
        <Counter />

        <p>---------------------------------------------------------------</p>

        <div>
          <FocusInput />
        </div>

        <p>---------------------------------------------------------------</p>

        <div>
          <ClassTimer />
        </div>

        <p>---------------------------------------------------------------</p>

        <div>
          <HookTimer />
        </div>

        <p>---------------------------------------------------------------</p>

        <DemoRefs />

        <p>---------------------------------------------------------------</p>

        <FRParent />
        <p>---------------------------------------------------------------</p>

        <ParentHoc />
        <p>---------------------------------------------------------------</p>

        <PortalDemo portalProps={testPortal} />

        <div>
          <h1>Lazy Loading</h1>
          <div>
            <Suspense fallback={<div>Loading Home........</div>}>
              <Home />
            </Suspense>

            <Suspense fallback={<div>Loading About........</div>}>
              <About />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
