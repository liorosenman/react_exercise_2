import React, { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks.ts';
import { CounterState, getProds, selectProds, setProducts } from './productsSlicer.ts';
import { Product } from './Product';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store.ts';



export function Counter() {

  const SERVER = "http://localhost:4000/products"
  const products = useAppSelector(selectProds) || [];
  // const products = useAppSelector(state => state.products.products) || [];
  // const products = useSelector((state: RootState) => state.products.products) || [];


  useEffect(() => { 
    console.log("Counter component mounted!"); 
}, []);


  return (
    <div>
      <h1>Products</h1>
       Desc: <input/>
       Price: <input/>
      
      <ol>
        {products.map(prod =>
          <li key={prod.id}> {prod.id}---{prod.desc}---${String(prod.price)}</li>
        )}
      </ol>  
    </div>
  );
}



