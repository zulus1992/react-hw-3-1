import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import { withOnlineStatus  } from "./withOnlineStatus ";
import { withVisibility } from "./withVisibility";
import { withLocalStorage } from "./withLocalStorage";

const Presentation = ({isOnline}) => <span>{isOnline ? 'online' : 'offline'}</span>
const PresentationWithStatus = withOnlineStatus(Presentation);



const TextInput = ({value, onChange}) => <input type="text" value={value} onChange={onChange} />
const LocalStoredTextInput = withLocalStorage(TextInput, 'storage-value');

var options = {
  classname: 'my-class',
  id: 'my-id',
  target: document.getElementById('myDivId')
};

var nanobar = new Nanobar( options );
nanobar.go( 30 );

render(
  <>
  <div id='myDivId'/>
    <PresentationWithStatus/>
     <LocalStoredTextInput/>
  </>
  , document.getElementById('root'));
