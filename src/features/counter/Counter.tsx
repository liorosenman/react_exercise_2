import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { useAppSelector, useAppDispatch } from '../../app/hooks.ts';
import { RootState } from '../../app/store';
import { CounterState, getProds, selectProds, setProducts } from './counterSlice.ts';
import { Product } from './Product';
import axios from 'axios';
import { fetchProds } from './counterAPI.ts';


export function Counter() {

  // const SERVER = "http://localhost:4000/products"
  // const products = useAppSelector(selectProds) || [];
  useEffect(() => { console.log(55555555); }, []);


  return (
    <div>
      {/* <h1>Products</h1>
      Desc: <input></input>
      Price: <input></input>
      <ol>
        {products.map(prod =>
          <li key={prod.id}>---{prod.desc}---${String(prod.price)}
          </li>
        )}
      </ol> */}

    </div>
  );
}


