import "./App.css";
import Arrowfunc from "./Module2/ArrowFunction";
// import LetConst from "./Module2/let-const/LetAndConst";
import { Exim } from "./Module2/ArrowFunction";
import Class from "./Module2/Classis,Properties&Methods";
import Properties from "./Module2/Classis,Properties&Methods/properties";
import Methods from "./Module2/Classis,Properties&Methods/methods";
import Spread from "./Module2/Spread&RestOperator/spread";
import Rest from "./Module2/Spread&RestOperator/rest";
import Destructuring from "./Module2/Destructuring/destructuring";
import ArrayFunctions from "./Module2/ArrayFunctions/ArrayFunctions";
import Jsx from "./Module2/jsx/jsx";
import Dynamic from "./Module2/outputtingDynamicContent";
import Props from "./Module2/Props/props";
import { ClassState } from "./Module2/state/Stateclass";
import StateFunction from "./Module2/state/StateFunction";
import ChildrenProperty from "./Module2/ChildrenProperty";
import Index2 from "./Module2/ChildrenProperty/index2";
import HandlingEvent from "./Module2/handlingEvent/handlingEvent";
import HelloWorld from "./Module2/StatelessVsStateful/Stateless";
import PassingMethods from "./Module2/PassingMethods/PassingMethods";
import Passinghandler from "./Module2/PassingMethods/handling";
import Style from "./Stylingsheet/style";
import Mapfunc from "./Module3/map/mapfunc";
import Lists from "./Module3/lists/lists";
import Immutable from "./Module3/immutable/Immutable";
import ArrayUseState from "./Module3/immutable/ArrayUseState";
import ListAndKey from "./Module3/ListAndKey/ListAndKey";
import StyleDynamic from "./Module4/StyleDynamic/StyleDynamic";
import AddingRaduim from "./Module4/AddingRadium/AddingRaduim";
import Lists2 from "./Module3/FlexibleList/Lists";
import Somedata from "./Module4/MediaQueryRadium/somedata";
import MediaQuery from "./Module4/MediaQueryRadium/MediaQuery";

function App() {
  const users =[
    {id:1,name:'om',result:'pass'},
    {id:2,name:'jay',result:'pass'},
    {id:3,name:'sam',result:'fail'},
]

  return (
    <div className="App">
      {/* <LetConst />
      <Arrowfunc />

      <Exim />
      <Class/>
      <Properties/>
      <Methods/>
      <Spread/>
      <Rest/>
      <Destructuring/> */}
      {/* <ArrayFunctions/> */}
      {/* <Jsx/>
      <Dynamic/>
      <Props firstname='james' lastname='bond' id='007'/>
      <Props firstname='fevi' lastname='bond' id='008'/>
      <Props firstname='fevi' lastname='col' id='009'/> */}
{/* <ClassState/>
<StateFunction/>
<ChildrenProperty/>
<Index2/>
<HandlingEvent/>
<HelloWorld/>
<Passinghandler /> */}
{/* <Style/> */}
{/* <Mapfunc/> */}
{/* <Lists/> */}
{/* <Immutable/> */}
{/* <ArrayUseState/> */}

{/* <ListAndKey list={users}/> */}
{/* <Lists2/> */}
<StyleDynamic/>
{/* <AddingRaduim/> */}
{/* <Somedata/> */}
{/* <MediaQuery/> */}
    </div>
  );
}

export default App;
