import React, { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks.ts';
import { CounterState, getProds, selectProds, createProd, updProd } from './productsSlicer.ts';
// import { Product } from './Product.ts';
// import { useDispatch, useSelector } from 'react-redux';
// import { AppDispatch, RootState } from '../../app/store.ts';



export function Products() {

  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProds) || [];
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0)

  useEffect(() => {
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
    dispatch(getProds());
  }, []);


  return (
    <div>
      <h1>Products</h1>
      Desc: <input onChange={(e) => setDesc(e.target.value)} />
      Price: <input onChange={(e) => setPrice(+e.target.value)} />
      <button onClick={() => dispatch(createProd({ id:0,desc: desc, price: price }))}>ADD</button>

      <ol>
        {products.map((prod) => (
          <li key={prod.id}>
            {prod.id}---{prod.desc}---${String(prod.price)}
            <button
              onClick={() =>
                dispatch(
                  updProd({
                    id: prod.id,
                    updatedprod: { id: 45, desc: desc, price: price },
                  })
                )
              }
            >
              UPDATE
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Products



