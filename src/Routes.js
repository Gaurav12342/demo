import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Hello from './components/Hello';
import ConditionalRender from './components/ConditionalRender';
import MapList from './components/MapList';
import FormEx from './components/FormEx';
import Sample from './components/Sample';
import Sample1 from './functionalComponent/Sample1';
import Sudoku from './functionalComponent/Sudoku';
import Level1 from './functionalComponent/Level1';
import Level3 from './functionalComponent/Level3';
import SamplePage from './components/SamplePage';
import AxiosEx from './functionalComponent/AxiosEx';
import SlugMaster from './divine-solitaires/components/SlugMaster';
import AddSlugMaster from './divine-solitaires/components/AddSlugMaster';
import EditSlugMaster from './divine-solitaires/components/EditSlugMaster';
import Ex from './firebase-example/Ex';
import List from './firebase-example/List';
import AddForm from './firebase-example/AddForm';
import EditForm from './firebase-example/EditForm';
import DisplayEmployee from './firebase-example/Components/DisplayEmployee';
import AddEmployee from './firebase-example/Components/AddEmployee';
import EditEmployee from './firebase-example/Components/EditEmployee';
import SignUp from './authentication/SignUp';
import SignIn from './authentication/SignIn';
import ChangePassword from './authentication/ChangePassword';
import ForgotPassword from './authentication/ForgotPassword';
import ManageProfile from './authentication/ManageProfile';

const Routes = (props) => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/sample-page"><SamplePage /></Route>
          <Route exact path="/hello"> <Hello name={new Date()} /> </Route>
          <Route path="/sample"> <Sample /> </Route>
          <Route path="/condition"> <ConditionalRender /> </Route>
          <Route path="/map"> <MapList /> </Route>
          <Route path="/form"><FormEx /></Route>
          <Route path="/sample1"> <Sample1 /> </Route>
          <Route exact path="/sudoku"> <Sudoku /> </Route>
          <Route path="/level1"><Level1 /></Route>
          <Route path="/level3"><Level3 /></Route>
          <Route path="/axios"> <AxiosEx /></Route>
          <Route exact path="/slug-master"><SlugMaster /></Route>
          <Route path="/slug-master/edit-slug/:id"><EditSlugMaster /></Route>
          <Route path="/slug-master/add-slug"><AddSlugMaster /></Route>
          <Route path="/ex"><Ex /></Route>
          <Route exact path="/list"><List /></Route>
          <Route path="/list/edit/:id"><EditForm /></Route>
          <Route path="/add-data"><AddForm /></Route>
          <Route exact path="/emp-list"><DisplayEmployee /></Route>
          <Route path="/emp-list/edit-emp/:id"><EditEmployee /></Route>
          <Route path="/emp-list/add-emp"><AddEmployee /></Route>
          <Route path="/sign-up"><SignUp /></Route>
          <Route path="/sign-in"><SignIn /></Route>
          <Route path="/change-pass"><ChangePassword /></Route>
          <Route path="/forgot-pass"><ForgotPassword /></Route>
          <Route path="/emp-list/profile"><ManageProfile /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}


export default Routes;