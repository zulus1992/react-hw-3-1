import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import { withOnlineStatus } from "./withOnlineStatus ";
import { withLocalStorage } from "./withLocalStorage";
import { ProgressBarControll } from "./ProgressBarControll";

const Presentation = ({ isOnline }) => <span>{isOnline ? 'online' : 'offline'}</span>
const PresentationWithStatus = withOnlineStatus(Presentation);


const TextInput = ({ value, onChange }) => <input type="text" value={value} onChange={onChange} />
const LocalStoredTextInput = withLocalStorage(TextInput, 'storage-value');

render(
  <>
    <ProgressBarControll />
    <PresentationWithStatus />
    <LocalStoredTextInput />
  </>
  , document.getElementById('root'));
