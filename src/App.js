import GlobalAndColumnSearchTable from "./component/GlobalAndColumnSearchTable";
import HeadFooterTable from "./component/HeadFooterTable";
import PaginationTable from "./component/PaginationTable";
import ReactTable from "./component/ReactTable";
import SortedTable from "./component/SortedTable";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./component/Header/Header";
import ColumnHidingTable from "./component/ColumnHidingTable";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/column-hiding/table" component={ColumnHidingTable} />
        <Route path="/full/table" component={ReactTable} />
        <Route path="/header-and-footer/table" component={HeadFooterTable} />
        <Route path="/sorted/table" component={SortedTable} />
        <Route
          path="/global-and-column/table"
          component={GlobalAndColumnSearchTable}
        />
        <Route path="/patination/table" component={PaginationTable} />
      </Switch>
    </Router>
  );
}

export default App;
