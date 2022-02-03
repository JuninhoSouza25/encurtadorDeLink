import './links.css';
import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi'

export default function Links(){
  return(
    <div className='link-container'>
      <div className='links-header'>
        <FiArrowLeft size={38} color="#fff" />
        <h1>Meus Links</h1>
      </div>
      <div className='links-item'>
        <button className='link'>
          <FiLink size={18} color="#FFF" />
          https://github.com/JuninhoSouza25
        </button>
        <button className='link-delete'>
          <FiTrash size={24} color="#ff5454"/>
        </button>
      </div>
      <div className='links-item'>
        <button className='link'>
          <FiLink size={18} color="#FFF" />
          https://github.com/JuninhoSouza25
        </button>
        <button className='link-delete'>
          <FiTrash size={24} color="#ff5454"/>
        </button>
      </div>
    </div>
  )
}