import React, { useState } from "react";
import {SideBar} from '../components/sidebar'
import { useHistory } from 'react-router-dom';
import Cookies from "universal-cookie";
const cookies = new Cookies();

export function Dashboard() {
  const history = useHistory();
  // initial state


  return (
    <div className="flex">
        <SideBar />
        <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">Home Page</h1>
      </div>
    </div>
  );
}