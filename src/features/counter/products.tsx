import React, { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks.ts';
import { CounterState, loadProducts, selectProds} from './productsSlicer.ts';
import { Product } from './Product.ts';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../app/store.ts';



export function Counter() {

  // const SERVER = "http://localhost:4000/products"
  const products = useSelector((state:RootState) => state.products);
  const dispatch = useDispatch<AppDispatch>();
  // const products = useAppSelector(selectProds) || [];
  // const products = useAppSelector(state => state.products.products) || [];
  // const products = useSelector((state: RootState) => state.products.products) || [];


  useEffect(() => { 
    dispatch(loadProducts());
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



