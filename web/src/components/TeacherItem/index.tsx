import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/10343884?s=460&u=01e20e973cd97aaac219e633e18a4215858209ce&v=4" alt="Samuel Monai"/>
        <div>
          <strong>Ailton Ferreira Luz</strong>
          <span>Elétrica</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <br /><br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus laboriosam corporis neque natus enim cumque blanditiis nihil esse doloremque a cum error dolore, beatae non eligendi rem suscipit expedita libero!
      </p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ 100,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp"/>
          Entrar em Contato
        </button>
      </footer>
    </article>
  )
}


export default TeacherItem

