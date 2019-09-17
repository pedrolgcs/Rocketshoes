import React from 'react';

import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-advantage-vs/18/D13-2253-118/D13-2253-118_detalhe1.jpg?resize=280:280"
          alt="Shoes"
        />
        <strong>Tênis muito legal lorem10</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Add to cart</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-advantage-vs/18/D13-2253-118/D13-2253-118_detalhe1.jpg?resize=280:280"
          alt="Shoes"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Add to cart</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-advantage-vs/18/D13-2253-118/D13-2253-118_detalhe1.jpg?resize=280:280"
          alt="Shoes"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Add to cart</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-advantage-vs/18/D13-2253-118/D13-2253-118_detalhe1.jpg?resize=280:280"
          alt="Shoes"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Add to cart</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-advantage-vs/18/D13-2253-118/D13-2253-118_detalhe1.jpg?resize=280:280"
          alt="Shoes"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Add to cart</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-advantage-vs/18/D13-2253-118/D13-2253-118_detalhe1.jpg?resize=280:280"
          alt="Shoes"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Add to cart</span>
        </button>
      </li>
    </ProductList>
  );
}
